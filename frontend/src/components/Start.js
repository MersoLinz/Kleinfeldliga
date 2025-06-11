import start from "../assets/uploads/start.jpg";

function Start() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            color: "black",
            fontSize: 50,
            letterSpacing: ".1rem",
            marginTop: 20,
          }}
        >
          Kleinfeldliga IQRA Linz
        </h1>
        <br />
        <img src={start} alt="Start" style={{ height: 400 }} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 15,
            letterSpacing: ".1rem",
            color: "black",
            flexDirection: "column",
            textAlign: "center",
            margin: 20,
            fontWeight: "bold",
          }}
        >
          <p style={{fontSize: 20}}>Willkommen bei der IQRA Kleinfeldliga!</p>
          <p>⚽ Spaß am Spiel. Leidenschaft am Ball. Teamgeist im Mittelpunkt.</p>
          <p>Unsere Kleinfeldliga bietet das alles.</p>
          <p>Ob du ein erfahrener Spieler bist oder einfach nur Spaß am Fußball hast – bei uns ist jeder herzlich willkommen!</p>
          <p style={{marginTop: 30}}>Was dich bei uns erwartet:</p>
          <p>✅ Organisierte Spieltage & Tabellenführung</p>
          <p>✅ Faire Spielregeln & lizenziertes Schiedsrichterteam</p>
          <p>✅ Gemeinschaftliches Miteinander auf und neben dem Platz</p>
          <p style={{marginTop: 30}}>Du willst mit deinem Team dabei sein?</p>
          <p>Dann melde dich bei uns – wir freuen uns!</p>
          <p style={{marginTop: 30}}>📍 Spielort: [HAKA Traun - Am Nordsaum 160]</p>
          <p>📆 Spieltage: [z. B. Jeden Sonntag ab 9:00 Uhr]</p>
          <p>📩 Kontakt: [iqra.linz@hotmail.com]</p>
        </div>
      </div>
    </>
  );
}
export default Start;