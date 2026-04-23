import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import withAuth from "./middleware/withAuth"

// export async function middleware(request: NextRequest) {
//   const token = await getToken({
//     req: request,
//     secret: process.env.NEXTAUTH_SECRET,
//   });

//   if (token) {
//     return NextResponse.next();
//   }

//   return NextResponse.redirect(new URL("/", request.url));
// }
export function mainMiddleware(request: NextRequest) {
  const res = NextResponse.next();
  return res;
}

// Bagian ini yang krusial: export default withAuth
export default withAuth(mainMiddleware, ["/produk", "/about", "/profile", "/admin", "/editor"]);

export const config = {
  matcher: ["/produk", "/about", "/profile", "/admin", "/editor"],
};