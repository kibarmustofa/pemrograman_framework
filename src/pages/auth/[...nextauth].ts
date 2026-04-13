import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    // ... (konfigurasi session)
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    // ... (konfigurasi providers)
  ],

  callbacks: {
    // ... (konfigurasi callbacks)
  },

  pages: {
    signIn: "/auth/login",
  },
};

export default NextAuth(authOptions);