import { NextRequest } from "next/server";
import { createMagicToken } from "@/lib/authTokens";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const email = String(formData.get("email") || "").trim();

  if (!email || !email.includes("@")) {
    return new Response("Invalid email", { status: 400 });
  }

  const ttl = Number(process.env.AUTH_TOKEN_TTL_MIN || "15");
  const token = createMagicToken(email, ttl);

  const baseUrl = process.env.APP_BASE_URL || "http://localhost:3000";
  const link = `${baseUrl}/api/auth/callback?token=${token}`;

  // MVP: "Email senden" => in Konsole ausgeben
  console.log("\n=== STEINHUDER GÄSTEPASS MAGIC LINK ===");
  console.log(`To: ${email}`);
  console.log(link);
  console.log("======================================\n");

  return Response.redirect(new URL("/login/sent", baseUrl), 303);
}
