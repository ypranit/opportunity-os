import { NextResponse, type NextRequest } from "next/server";
import { ACCESS_TOKEN_COOKIE } from "@/lib/supabase/cookies";

const authRoutes = ["/login", "/signup", "/forgot-password"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get(ACCESS_TOKEN_COOKIE)?.value;
  const isAuthenticated = Boolean(accessToken);

  if (pathname.startsWith("/dashboard") && !isAuthenticated) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthenticated && (pathname === "/" || authRoutes.includes(pathname))) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/login", "/signup", "/forgot-password"],
};
