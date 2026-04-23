import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"; 
import GithubProvider from "next-auth/providers/github";
import { signIn, signInWithProvider } from "@/utils/db/serviceFirebase"; // Tambahkan signInWithGoogle di sini
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt", 
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({ 
      clientId: process.env.GOOGLE_CLIENT_ID || "", 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "", 
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user: any = await signIn(credentials.email);

        if (user) {
          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (isPasswordValid) {
            return {
              id: user.id,
              email: user.email,
              fullname: user.fullname,
              role: user.role,
            };
          }
        }     
        return null;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, account, user }: any) {
      if (account?.provider === "credentials" && user) {
        token.email = user.email;
        token.fullname = user.fullname;
        token.role = user.role;
      }

      // Modifikasi bagian Google login untuk memanggil signInWithGoogle
      if (account?.provider === "google" || account?.provider === "github") {
        const data = {
          fullname: user.name,
          email: user.email,
          image: user.image,
          type: account.provider,
        };


        // Panggil service untuk menyimpan/update data ke Firestore
        await signInWithProvider(data, (result: any) => {
          // Pastikan mengecek result.status sesuai dengan objek yang dikirim dari service
          if (result.status) {
            token.fullname = result.data.fullname;
            token.email = result.data.email;
            token.image = result.data.image;
            token.type = result.data.type;
            token.role = result.data.role; // Role sekarang diambil dari database (member/admin)
          }
        });
      }
      
      return token;
    },

    async session({ session, token }: any) {
      if (token.email) {
        session.user.email = token.email; 
      }
      if (token.fullname) {
        session.user.fullname = token.fullname;
      }
      if (token.image) {
        session.user.image = token.image;
      }
      if (token.role) {
        session.user.role = token.role; 
      }
      if (token.type) {
        session.user.type = token.type;
      }

      return session; 
    },
  },

  pages: {
    signIn: "/auth/login",
  },
};

export default NextAuth(authOptions);