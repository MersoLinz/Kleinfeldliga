import React from "react";

export default function Spielregeln() {
  return (
    <div
      style={{
        maxWidth: 800,
        margin: "100px auto",
        fontSize: 14,
        color: "#000",
        lineHeight: 1.5,
        fontFamily: "Arial, sans-serif",
        padding: "0 20px",
      }}
    >
      <nav style={{ marginBottom: 30 }}>
  <h2>Inhaltsverzeichnis</h2>
  <ul style={{ listStyle: "none", paddingLeft: 0 }}>
    <li><a href="#para1">§ 1 – Disclaimer</a></li>
    <li><a href="#para2">§ 2 – Spielfeldgröße</a></li>
    <li><a href="#para3">§ 3 – Spielball</a></li>
    <li><a href="#para4">§ 4 – Tor Größe</a></li>
    <li><a href="#para5">§ 5 – Spieleranzahl</a></li>
    <li><a href="#para6">§ 6 – Ausrüstung</a></li>
    <li><a href="#para7">§ 7 – Spielzeit</a></li>
    <li><a href="#para8">§ 8 – Auswechslungen</a></li>
    <li><a href="#para9">§ 9 – Auswechselbank</a></li>
    <li><a href="#para10">§ 10 – Karten</a></li>
    <li><a href="#para11">§ 11 – Abseits</a></li>
    <li><a href="#para12">§ 12 – Rückpassregel</a></li>
    <li><a href="#para13">§ 13 – Rutschen bzw. Sliding tackle</a></li>
    <li><a href="#para14">§ 14 – Freistoß</a></li>
    <li><a href="#para15">§ 15 – Strafstoß</a></li>
    <li><a href="#para16">§ 16 – Spielabbruch und Spielunterbrechung</a></li>
  </ul>
</nav>


      <section id="para1" style={{ marginBottom: 40 }}>
        <h3>§ 1 – Disclaimer</h3>
        <p>Aufgrund von örtlichen Gegebenheiten, werden die Regeln für den Spielbetrieb in Österreich leicht angepasst, entsprechen jedoch zum Großteil dem Regelwerk der „EMF“.</p>
      </section>

      <section id="para2" style={{ marginBottom: 40 }}>
        <h3>§ 2 – Spielfeldgröße</h3>
        <p>Die Länge des Spielfeldes beträgt international zwischen 44 und 50 Metern.</p>
        <p>Die Breite des Spielfeldes beträgt international zwischen 24 und 30 Metern.</p>
        <p>Die Spielfelder des ÖKFB werden an die örtlichen Gegebenheiten angepasst und entsprechen daher nicht immer den internationalen Vorgaben.</p>
      </section>

      <section id="para3" style={{ marginBottom: 40 }}>
        <h3>§ 3 – Spielball</h3>
        <p>Im Kleinfeldfußball wird mit einem Ball der Größe 5 gespielt.</p>
        <p>Der Ball muss den Mindeststandards für Trainingsbälle der Fifa entsprechen.</p>
      </section>

      <section id="para4" style={{ marginBottom: 40 }}>
        <h3>§ 4 – Tor Größe</h3>
        <p>Die Größe des Tores ist National mit 5 Metern breit und 2 Metern Höhe festgelegt.</p>
        <p>International haben die Tore eine Breite von 4 Metern.</p>
      </section>

      <section id="para5" style={{ marginBottom: 40 }}>
        <h3>§ 5 – Spieleranzahl</h3>
        <p>Jede Mannschaft besteht auf dem Feld aus 5 Spielern und einem Tormann.</p>
        <p>An jedem Spieltag können maximal 12 Spieler aufgestellt werden (sechs Ersatzspieler).</p>
        <p>Die Mindestanzahl an Spielern, welche für einen Spielstart notwendig ist, wird mit fünf Feldspielern und einem Tormann festgelegt. Sollten Teams unter drei Feldspieler fallen, wird das Spiel mit 0:6 gewertet und beendet.</p>
      </section>

      <section id="para6" style={{ marginBottom: 40 }}>
        <h3>§ 6 – Ausrüstung</h3>
        <p>Spieler müssen in nummerierten Trikots, kurzen Hosen und Stutzen antreten. Schienbeinschoner sind Pflicht.</p>
        <p>Schmuck und Fremdkörper wie Uhren oder Armbänder sind untersagt.</p>
        <p>Hauben bei Kälte sind erlaubt, Baseballmützen nur für Torleute.</p>
        <p>Die Ausrüstung einer Mannschaft muss farblich und im Design einheitlich sein.</p>
      </section>

      <section id="para7" style={{ marginBottom: 40 }}>
        <h3>§ 7 – Spielzeit</h3>
        <p>Die Spielzeit beträgt 2 x 25 Minuten. Nachspielzeit liegt im Ermessen des Schiedsrichters.</p>
      </section>

      <section id="para8" style={{ marginBottom: 40 }}>
        <h3>§ 8 – Auswechslungen</h3>
        <p>Spielerwechsel sind fliegend, aber nur in der Wechselzone erlaubt. Verstoß führt zu Ermahnung oder gelber Karte.</p>
        <p>Blockwechsel nur bei Spielunterbrechung und eigenem Ballbesitz erlaubt.</p>
      </section>

      <section id="para9" style={{ marginBottom: 40 }}>
        <h3>§ 9 – Auswechselbank</h3>
        <p>Nur Spieler und Trainer dürfen sich in der Wechselzone aufhalten. Der Trainer muss vorab gemeldet sein.</p>
      </section>

      <section id="para10" style={{ marginBottom: 40 }}>
        <h3>§ 10 – Karten</h3>
        <ol>
          <li>Gelbe Karte: Verwarnung</li>
          <li>Zweite Gelbe: Gelb-Rot, 5 Minuten Unterzahl, 1 Spiel Sperre</li>
          <li>Rote Karte: Sofortiger Ausschluss, 5 Minuten Unterzahl, mind. 1 Spiel Sperre</li>
        </ol>
      </section>

      <section id="para11" style={{ marginBottom: 40 }}>
        <h3>§ 11 – Abseits</h3>
        <p>Es wird ohne Abseitsregel gespielt.</p>
      </section>

      <section id="para12" style={{ marginBottom: 40 }}>
        <h3>§ 12 – Rückpassregel</h3>
        <p>Rückpässe mit dem Fuß oder Einwürfe dürfen vom Tormann nicht mit der Hand aufgenommen werden. Kopfball nach vorherigem Fußkontakt ist ebenfalls untersagt.</p>
      </section>

      <section id="para13" style={{ marginBottom: 40 }}>
        <h3>§ 13 – Rutschen bzw. Sliding tackle</h3>
        <p>Sliding Tackles innerhalb eines Meters zum Gegner sind verboten – direkter Freistoß, im Strafraum: Strafstoß.</p>
      </section>

      <section id="para14" style={{ marginBottom: 40 }}>
        <h3>§ 14 – Freistoß</h3>
        <p>Mauerabstand: 5 Meter. Bei Freistoß im gegnerischen Strafraum muss die Mauer auf der Torlinie stehen.</p>
      </section>

      <section id="para15" style={{ marginBottom: 40 }}>
        <h3>§ 15 – Strafstoß</h3>
        <p>Distanz: 7,5 Meter. Tormann darf Linie nicht verlassen. Bei Regelverstößen Wiederholung. Feldspieler: 5 Meter Abstand, außerhalb des Strafraums.</p>
      </section>

      <section id="para16" style={{ marginBottom: 40 }}>
        <h3>§ 16 – Spielabbruch und Spielunterbrechung</h3>
        <p>Ein Spielabbruch liegt bei endgültiger Beendigung ohne Fortsetzungsmöglichkeit vor (z. B. Wetter, Raufhandel, Schiedsrichterangriff, weniger als 3 Feldspieler). Ein Spiel kann unterbrochen und ggf. abgebrochen werden. Bei Abbruch nach 40 Minuten kann Ergebnis gewertet werden.</p>
      </section>
    </div>
  );
}
