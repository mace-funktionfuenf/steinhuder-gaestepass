export default function LoginPage() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui", maxWidth: 520 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700 }}>Login</h1>
      <p style={{ marginTop: 8 }}>
        Gib deine E-Mail ein. Du bekommst einen Magic Link (ohne Passwort).
      </p>

      <form action="/api/auth/request-link" method="post" style={{ marginTop: 16 }}>
        <label style={{ display: "block", fontWeight: 600 }}>E-Mail</label>
        <input
          name="email"
          type="email"
          required
          placeholder="name@example.com"
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 10,
            border: "1px solid #ccc",
            marginTop: 8,
          }}
        />

        <button
          type="submit"
          style={{
            marginTop: 12,
            padding: "12px 16px",
            borderRadius: 10,
            background: "#0b1220",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Magic Link anfordern
        </button>
      </form>

      <p style={{ marginTop: 16, fontSize: 14, opacity: 0.8 }}>
        Hinweis: Für den MVP wird der Link im Terminal ausgegeben (später per SMTP).
      </p>
    </main>
  );
}
