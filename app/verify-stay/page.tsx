export default function VerifyStayPage() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui", maxWidth: 520 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700 }}>Aufenthalt bestätigen</h1>
      <p style={{ marginTop: 8 }}>
        Als Nächstes prüfen wir Zimmernummer + Nachname (und später Check-in/out).
      </p>

      <form style={{ marginTop: 16 }}>
        <label style={{ display: "block", fontWeight: 600 }}>Zimmernummer</label>
        <input
          name="room"
          placeholder="z.B. 204"
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 10,
            border: "1px solid #ccc",
            marginTop: 8,
          }}
        />

        <label style={{ display: "block", fontWeight: 600, marginTop: 12 }}>
          Nachname
        </label>
        <input
          name="lastName"
          placeholder="z.B. Müller"
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 10,
            border: "1px solid #ccc",
            marginTop: 8,
          }}
        />

        <button
          type="button"
          style={{
            marginTop: 12,
            padding: "12px 16px",
            borderRadius: 10,
            background: "#0b1220",
            color: "white",
            border: "none",
          }}
        >
          Bestätigen (kommt als nächstes)
        </button>
      </form>
    </main>
  );
}
