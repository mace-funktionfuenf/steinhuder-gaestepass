import crypto from "crypto";

type TokenRecord = {
  email: string;
  expiresAt: number; // epoch ms
};

const tokens = new Map<string, TokenRecord>();

export function createMagicToken(email: string, ttlMinutes: number) {
  const token = crypto.randomBytes(32).toString("hex");
  const expiresAt = Date.now() + ttlMinutes * 60_000;
  tokens.set(token, { email: email.toLowerCase().trim(), expiresAt });
  return token;
}

export function consumeMagicToken(token: string) {
  const rec = tokens.get(token);
  if (!rec) return null;
  tokens.delete(token);
  if (Date.now() > rec.expiresAt) return null;
  return rec;
}
