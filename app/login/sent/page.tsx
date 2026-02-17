import Link from "next/link";

export default function SentPage() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui", maxWidth: 520 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700 }}>Fast fertig</h1>
      <p style={{ marginTop: 8 }}>
        Wenn das schon live wäre, hättest du jetzt eine E-Mail bekommen.
      </p>
      <p style={{ marginTop: 8 }}>
        Für den MVP findest du den Magic Link im Terminal, wo <code>npm run dev</code> läuft.
      </p>

      <Link
        href="/"
        style={{
          display: "inline-block",
          marginTop: 16,
          padding: "12px 16px",
          borderRadius: 10,
          background: "#0b1220",
          color: "white",
          textDecoration: "none",
        }}
      >
        Zur Startseite
      </Link>
    </main>
  );
}
