import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Protect these routes
  if (pathname.startsWith("/verify-stay") || pathname.startsWith("/wallet")) {
    const session = req.cookies.get("sgp_session")?.value;

    if (!session) {
      const url = req.nextUrl.clone();
      url.pathname = "/login";
      url.searchParams.set("error", "login_required");
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/verify-stay/:path*", "/wallet/:path*"],
};
