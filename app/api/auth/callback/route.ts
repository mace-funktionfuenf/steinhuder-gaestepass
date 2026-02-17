import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { consumeMagicToken } from "@/app/lib/authTokens";
export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token") || "";
  const rec = consumeMagicToken(token);

  if (!rec) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("error", "invalid_token");
    return NextResponse.redirect(url);
  }

  const sessionId = crypto.randomBytes(24).toString("hex");

  const res = NextResponse.redirect(new URL("/verify-stay", req.url));
  res.cookies.set({
    name: "sgp_session",
    value: sessionId,
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12, // 12h
  });

  return res;
}
