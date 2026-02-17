import { NextRequest } from "next/server";
import { consumeMagicToken } from "@/lib/authTokens";
import crypto from "crypto";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token") || "";
  const rec = consumeMagicToken(token);

  const baseUrl = process.env.APP_BASE_URL || "http://localhost:3000";

  if (!rec) {
    return Response.redirect(new URL("/login?error=invalid_token", baseUrl), 303);
  }

  // MVP Session: signed random session id
  const sessionId = crypto.randomBytes(24).toString("hex");

  const res = Response.redirect(new URL("/verify-stay", baseUrl), 303);

  // HttpOnly cookie (kein JS Zugriff)
  res.headers.append(
    "Set-Cookie",
    `sgp_session=${sessionId}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 12}`
  );

  // für später: wir verknüpfen sessionId -> user in DB
  return res;
}
