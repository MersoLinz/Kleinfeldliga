import React from "react";

export default function Ligaordnung() {
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
          <li><a href="#para1">§ 1 – Ligarhythmus und Wertung</a></li>
          <li><a href="#para2">§ 2 – Termine</a></li>
          <li><a href="#para3">§ 3 – Allgemeine Vorgaben</a></li>
          <li><a href="#para4">§ 4 – zweite Mannschaft</a></li>
          <li><a href="#para5">§ 5 – Blankett</a></li>
          <li><a href="#para6">§ 6 – Spielball</a></li>
          <li><a href="#para7">§ 7 – Trikots</a></li>
          <li><a href="#para8">§ 8 – Sportplätze</a></li>
          <li><a href="#para9">§ 9 – Spielberechtigung</a></li>
          <li><a href="#para10">§ 10 – Finanzen</a></li>
          <li><a href="#para11">§ 11 – Ausstieg und Kündigung</a></li>
          <li><a href="#para12">§ 12 – Kontaktdaten</a></li>
          <li><a href="#para13">§ 13 – Spielabsagen</a></li>
          <li><a href="#para14">§ 14 – Spielverschiebungen</a></li>
          <li><a href="#para15">§ 15 – Strafen</a></li>
          <li><a href="#para16">§ 16 – Allgemeines</a></li>
        </ul>
      </nav>

      <section id="para1" style={{ marginBottom: 40 }}>
        <h3>§ 1 – Ligarhythmus und Wertung</h3>
        <ol>
          <li>Der Ligabetrieb findet von September bis Juli, mit einer Winterpause von November bis Februar, statt.</li>
          <li>Die Spiele finden im Wochenrhythmus statt. Ausweichtermine werden vom Bund festgelegt.</li>
          <li>Die Spiele werden an Sonn- und Feiertagen ausgetragen.</li>
          <li>Es gibt für Hin- und Rückrunde je einen Termin für die Nachtragsspiele. Dieser wird vor Saisonbeginn bekannt gegeben. Die Spiele am Nachtragstermin können nicht mehr verschoben werden.</li>
          <li>Bei Punktegleichheit gilt die Tordifferenz danach die Anzahl der geschossenen Tore. Falls sich alle Faktoren die Waage halten, wird aufgrund der Fair Play Wertung entschieden.</li>
          <li>Bei einem Spielabbruch wird das Spiel mit 0:6 für die Mannschaft, welche nicht für den Spielabbruch verantwortlich ist gewertet. Ausnahme: Wenn die unschuldige Mannschaft mit mehr als 6 Toren in Führung war, kein Nachteil für diese Mannschaft entstanden ist und 40 Minuten gespielt wurden. In diesem Fall kann das Ergebnis bestehen bleiben.</li>
          <li>Bei einem Spielabbruch aufgrund von nicht beeinflussbaren Ereignissen (Wetter, Schiedsrichterverletzung, schwere Verletzung eines Spielers…) wird das Spiel wiederholt, außer es wurden 40 Minuten gespielt. Falls 40 Minuten gespielt wurden, bleibt das Ergebnis bestehen.</li>
        </ol>
      </section>

      <section id="para2" style={{ marginBottom: 40 }}>
        <h3>§ 2 – Termine</h3>
        <ol>
          <li>
            Zahlungsfristen:
            <ul>
              <li>1. August für die Hinrunde (Herbstsaison)</li>
              <li>1. Februar für die Rückrunde (Frühjahrssaison)</li>
            </ul>
          </li>
          <li>Eine Abmeldung für die kommende Saison ist bis spätestens 1. Mai durchzuführen.</li>
          <li>
            Abgabe der Wunschzeiten:
            <ul>
              <li>1. August für die Hinrunde (Herbstsaison)</li>
              <li>1. Jänner für die Rückrunde (Frühjahrssaison)</li>
            </ul>
          </li>
          <li>Spielabsagen und Spielverschiebungen: Bis 12:00 Uhr am Vortag des Spieles</li>
        </ol>
      </section>

      <section id="para3" style={{ marginBottom: 40 }}>
        <h3>§ 3 – Allgemeine Vorgaben</h3>
        <ol>
          <li>Der Spielort wird vom Bund festgelegt.</li>
          <li>Die Anstoßzeiten können bis 3 Tage vor dem Spiel zur Stichzeit 12:00 Uhr angepasst werden. Diese beinhalten in der Regel eine maximale Verschiebung um 2 Stunden.</li>
          <li>Die Anstoßzeiten werden spätestens ein Monat vor dem Ligaspiel festgesetzt und werden nicht mehr geändert. Wunschzeiten können abgegeben werden (sh. §2, Pkt.3)</li>
          <li>In der laufenden Saison können Spielzeitänderungen nur durch Spieltausch vorgenommen werden. Dafür müssen alle betroffenen Mannschaften einem Spieltausch zustimmen. Die Organisation eines Spieltauschs obliegt den betreffenden Teams. Bei Zustimmung aller Mannschaften ist der Bund zu informieren. Alle betroffenen Mannschaften haben dem Bund eine Homepage Nachricht mit der Zustimmung zu senden.</li>
          <li>Heim- und Auswärtsrecht bezieht sich lediglich auf die Trikotwahl und die Zuständigkeit der Spielbälle.</li>
          <li>Die Mannschaft muss zu Spielbeginn aus mindestens 5 Feldspieler und einem Tormann bestehen, ansonsten gilt das Spiel als 0:6 verloren. Es entsteht eine Geldstrafe aufgrund Nicht Antretens laut Ligaordnung (sh. §16, Pkt.9). Bei einem Spielabbruch (weniger als 4 Spieler) durch Verletzungen oder Sperren während dem Spiel entfällt die Geldstrafe.</li>
          <li>Der Trainer kann online angemeldet werden (Funktion auf der Homepage). Während eines Ligaspiels darf sich nur eine, als Trainer gemeldete Person, im Bereich der Ersatzbank befinden.</li>
          <li>Auf der Ersatzbank dürfen sich nur auf dem Blankett stehende Spieler und eine als Trainer gemeldete Person befinden. Jede Mannschaft hat dafür zu sorgen, dass diese Regel eingehalten wird.</li>
          <li>Wechselspielern und Trainern ist es untersagt das Spielfeld oder den Bereich der gegnerischen Wechselbank zu betreten.</li>
          <li>Wechselspieler müssen jederzeit Überziehleibchen tragen.</li>
        </ol>
      </section>

      <section id="para4" style={{ marginBottom: 40 }}>
        <h3>§ 4 – zweite Mannschaft</h3>
        <ol>
          <li>Es ist möglich bis zu zwei Mannschaften pro Vertrag anzumelden. Diese unterliegen besonderen Vorgaben. Die zweite Mannschaft darf nicht in der gleichen oder einer höheren Liga wie die erste Mannschaft spielen.</li>
          <li>Alle Spieler können am Wochenende bei beiden Mannschaften eingesetzt werden.</li>
          <li>Der Bund ist bemüht, den Spielplan so einzuteilen, dass beide Mannschaften hintereinander spielen.</li>
          <li>Beide Mannschaften müssen mit dem gleichen Namen und Logo antreten und müssen klar als Team 1 und Team 2 erkennbar sein.</li>
          <li>Die zweite Mannschaft unterliegt ebenso der Ligaordnung. Insbesondere auch betreffend Kündigung und Vertragssituation.</li>
        </ol>
      </section>

      <section id="para5" style={{ marginBottom: 40 }}>
        <h3>§ 5 – Blankett</h3>
        <ol>
          <li>Jede Mannschaft muss selbstständig ein online Blankett für das jeweilige Meisterschaftsspiel eingeben. Für die Kontrolle des eingetragenen Blanketts ist das jeweilige Team verantwortlich.
            <br />
            Die Blankette können vor dem Spiel mit dem Schiedsrichter kontrolliert werden. Die Aufstellungen liegen dem Schiedsrichter vor. Der Schiedsrichter muss dazu, jedoch von einem Mannschaftsleiter aufgefordert werden. Falls Die Blankett Kontrolle nicht durchgeführt wurde und ein Fehler während dem Spiel entdeckt wird, liegt der Fehler beim Team selbst.
          </li>
          <li>Ein Blankett Fehler liegt vor wenn:
            <ul>
              <li>Bei einem oder mehreren Spielern keine Rückennummer eingetragen wurde.</li>
              <li>Ein oder mehrere Spieler mit einer anderen Nummer auflaufen als auf dem Blankett angegeben.</li>
              <li>Der Tormann nicht mit der Trikotnummer 1 eingetragen ist. Ersatztormann muss mit einer anderen Nummer eingetragen werden.</li>
            </ul>
            
            <ul>
              <li>Ein oder mehrere Spieler, welche zum Einsatz kommen, sind auf dem Blankett nicht angeführt.</li>
            </ul>
            In den obigen Fällen führt eines der Fehler zu einer 0:6 Niederlage. (Ausnahme: Die Mannschaft, welche den Fehler begangen hat, verliert das Spiel. In diesem Fall bleibt das Ergebnis bei einem höheren Ausgang bestehen.)
          </li>
          <li>Bei einem Fehlen des Blanketts wird das Spiel als 0:6 verloren gewertet.</li>
        </ol>
      </section>

      <section id="para6" style={{ marginBottom: 40 }}>
        <h3>§ 6 – Spielball</h3>
        <ol>
          <li>Die Spielbälle werden von der Liga gestellt. Jede Mannschaft muss jedoch zwei Matchbälle mitführen (ausreichend mit Luft versorgt) falls die Bälle der Liga während des Spieltages verloren gehen.</li>
          <li>Jede Heimmannschaft erhält am Anfang des Spiels vom Schiedsrichter zwei Spielbälle und ist bis zum Ende des Spiels für diese verantwortlich. Sollten die Bälle unauffindbar, verschossen werden oder verloren gehen, werden diese der Heimmannschaft in Rechnung gestellt. (sh. §16, Pkt.15)
            <ul>
              <li>Ausnahme: Wenn der Ball von der Auswärtsmannschaft absichtlich weggeschossen wird. Dieser Fall muss vom Schiedsrichter bestätigt werden.</li>
              <li>Ausnahme: Der Spielball geht kaputt.</li>
            </ul>
          </li>
          <li>In Situationen, in denen die Spielbälle nicht auffindbar oder kaputt sind, ist das Weiterspielen mit den Bällen der Heimmannschaft erlaubt. Die Heimmannschaft ist jedoch angehalten, den Spielball sofort wieder zu beschaffen.</li>
          <li>Sollte die Heimmannschaft keine Bälle mitführen und diese werden benötigt, folgt eine Geldstrafe. (sh. §16, Pkt. 16)</li>
        </ol>
      </section>

      <section id="para7" style={{ marginBottom: 40 }}>
        <h3>§ 7 – Trikots</h3>
        <ol>
          <li>Die Heimmannschaft kann bis Donnerstag 20:00 die Garnitur für das Wochenende auswählen. Die Heimmannschaft muss in den ausgewählten Farben spielen. Die Farben der Trikots und Stutzen der Auswärtsmannschaft können sich von den Farben auf der Homepage unterscheiden. Sie dürfen jedoch nicht dieselbe Farbe wie die Heimmannschaft haben.</li>
          <li>Sollte die Auswärtsmannschaft mit gleichen Trikots oder Stutzenfarben zum Meisterschaftsspiel antreten als die Heimmannschaft (vorausgesetzt diese hat die Vorgaben auf der Homepage eingehalten), wird das Spiel strafverifiziert und es findet ein Freundschaftsspiel statt.</li>
          <li>Falls der Torwart während des Spiels mit einem Feldspieler getauscht wird, muss der ehemalige Torwart das gleiche Trikot inkl. Hosen und Stutzen wie die restlichen Feldspieler tragen.</li>
          <li>Die Mannschaften sind selbst dafür verantwortlich, dass die dargestellten Trikotgarnituren auf der Homepage aktuell sind. Ansonsten ist dem Bund ein Bild der neuen Trikotgarnitur zu senden.</li>
        </ol>
      </section>

      <section id="para8" style={{ marginBottom: 40 }}>
        <h3>§ 8 – Sportplätze</h3>
        <ol>
          <li>Die Sportplätze werden vom Bund festgelegt. Ausser die Ligaleitung sieht vor unterschiedliche Sportplätze für Heim- und Auswärtsspiele zu organisieren.</li>
          <li>Bei der Anmeldung einer Mannschaft muss angegeben werden, welcher Sportplatz bei Heimspielen verwendet wird. Der Bund behält sich das Recht vor, nachträglich Änderungen vorzunehmen.</li>
          <li>Alle Mannschaften müssen bis spätestens 14 Tage vor Saisonbeginn den Standort des Sportplatzes auf der Homepage eintragen und ein Foto von diesem einstellen.</li>
          <li>Der Bund ist berechtigt, die Nutzung von Sportplätzen im Sinne der Ligarichtlinien zu überprüfen und gegebenenfalls Änderungen vorzunehmen.</li>
        </ol>
      </section>

      <section id="para9" style={{ marginBottom: 40 }}>
        <h3>§ 9 – Spielberechtigung</h3>
        <ol>
          <li>Spielberechtigt sind nur Spieler, die im Online-Portal des Bundes registriert sind und in der jeweiligen Mannschaft gemeldet wurden.</li>
          <li>Wechselspieler müssen vor Spielbeginn im Blankett eingetragen sein.</li>
          <li>Spieler, die in der gleichen Saison für eine höhere Mannschaft gespielt haben, dürfen nicht in der unteren Mannschaft spielen.</li>
          <li>Ausnahmen bedürfen der schriftlichen Zustimmung des Bundes.</li>
        </ol>
      </section>

      <section id="para10" style={{ marginBottom: 40 }}>
        <h3>§ 10 – Finanzen</h3>
        <ol>
          <li>Die Teilnahmegebühr für die Liga ist vor Saisonbeginn zu entrichten.</li>
          <li>Bei Nichtzahlung erfolgt eine Sperre für die Teilnahme an der Liga.</li>
          <li>Geldstrafen werden vom Finanzkonto der Mannschaft abgebucht.</li>
        </ol>
      </section>

      <section id="para11" style={{ marginBottom: 40 }}>
        <h3>§ 11 – Ausstieg und Kündigung</h3>
        <ol>
          <li>Eine Abmeldung muss bis spätestens 1. Mai erfolgen.</li>
          <li>Bei vorzeitiger Kündigung werden Strafgebühren erhoben.</li>
          <li>Die Kündigung muss schriftlich erfolgen.</li>
        </ol>
      </section>
      <section id="para12" style={{ marginBottom: 40 }}>
  <h3>§ 12 – Kontaktdaten</h3>
  <ol>
    <li>
      Jeder Mannschaftsleiter ist verantwortlich, jegliche Änderungen bezüglich der Kontaktdaten auf der Homepage des Bundes zu ändern. Die Mannschaft haftet selbst für nicht erhaltene Nachrichten aufgrund veralteter Daten.
    </li>
  </ol>
</section>

<section id="para13" style={{ marginBottom: 40 }}>
  <h3>§ 13 – Spielabsagen</h3>
  <ol>
    <li>
      Eine Spielabsage seitens des Bundes kann jederzeit aus bekanntzugebenden Gründen erfolgen. Dies kann auf zwei Arten passieren:
      <ol type="a">
        <li>Der komplette Spieltag wird abgesagt. Der Bund bestimmt den Nachholtermin.</li>
        <li>Ein einzelnes Spiel wird abgesagt. Der Nachholtermin wird vom Bund festgelegt.</li>
      </ol>
    </li>
    <li>Erscheint eine Mannschaft zu spät zur Spielzeit, wird das Spiel mit 0:6 gewertet.</li>
    <li>
      Entspricht eine 0:6 Niederlage als Wettbewerbsverzerrung, muss das Spiel nachgeholt werden. Ist ein Nachholtermin nicht möglich, entscheidet der Bund.
    </li>
    <li>
      Spielabsagen müssen auf der Homepage bekannt gegeben werden. Bei Spielabsagen gilt folgende Strafe: 100€.
    </li>
    <li>
      Erscheint eine Mannschaft ohne rechtzeitige Absage (mindestens am Vortag bis 12:00 Uhr) nicht zum Spiel, wird das Spiel mit 0:6 gewertet und eine zusätzliche Strafe 50€ verhängt.
    </li>
    <li>Dem Gegner der absagenden Mannschaft werden automatisch 50 € gutgeschrieben.</li>
  </ol>
</section>

<section id="para14" style={{ marginBottom: 40 }}>
  <h3>§ 14 – Spielverschiebungen</h3>
  <ol>
    <li>
      Jede Mannschaft darf einmal im Herbst und einmal im Frühjahr ein Spiel verschieben. Die Nachholtermine werden vor Saisonbeginn bekanntgegeben. Voraussetzungen:
      <ul>
        <li>Zustimmung beider Mannschaften</li>
        <li>Zustimmung des Bundes</li>
        <li>Terminliche Möglichkeit des Nachtragsspiels an vorgegebenen Spieltagen</li>
        <li>Keine Wettbewerbsverzerrung oder Absprachen betroffen</li>
      </ul>
    </li>
    <li>
      Verschiebungen sind nur möglich, wenn beide Mannschaften am Nachholtermin kein Spiel haben. Die verschiebende Mannschaft zahlt 70 € für das neue Spiel. Anträge sind über die Homepage von beiden Teams zu stellen.
    </li>
  </ol>
</section>

<section id="para15" style={{ marginBottom: 40 }}>
  <h3>§ 15 – Strafen</h3>
  <ol>
    <li>Die Strafen werden vom der Ligaleitung festgelegt. Folgende Richtlinien sind verbindlich, können aber angepasst werden:</li>
    <li>Schiedsrichterbeleidigung / Bedrohung: 2 bis 15 Spiele Sperre</li>
    <li>Tätlichkeit gegen Schiedsrichter: 5 bis 20 Spiele Sperre bis Ligaausschuss</li>
    <li>Tätlichkeit von Spieler: 3 bis 20 Spiele Sperre</li>
    <li>Wiederholte Tätlichkeiten nach abgesessener Sperre: lebenslanger Ausschluss</li>
    <li>Tätlichkeit von mehr als zwei Spielern (Rudelbildung): 3 bis 20 Spiele Sperre + 300 € Geldstrafe</li>
    <li>Rassistisches Verhalten: 10 bis 40 Spiele Sperre</li>
    <li>Verschiebung eines Spiels: 70€</li>
    <li>Nichtantreten ohne Absage oder zu wenigen Spielern: 100 € Geldstrafe + 50€ gemäß §13, Pkt. 4 und 5 </li>
    <li>Nichtabgabe des Onlineblanketts: 0:6 Wertung</li>
    <li>Einsatz nicht spielberechtigter Spieler: 0:6 Wertung</li>
    <li>Falsches Trikot/Stutzen: 0:6 Wertung</li>
    <li>Zahlungsverzug Ligabeitrag: 100 € für jedes anstehende Spiel</li>
    <li>Bundschädigendes Verhalten: 200 €</li>
    <li>Nicht an Schiedsrichter zurückgegebener Spielball: 30 €</li>
    <li>Heimteam stellt keinen Spielball: 30 €</li>
    <li>Unbefugtes Betreten des Spielfelds während des Spiels: 50 € (bei Rudelbildung Strafe gemäß §16, Pkt. 5)</li>
    
  </ol>
</section>

<section id="para16" style={{ marginBottom: 40 }}>
  <h3>§ 16 – Allgemeines</h3>
  <p>
    Jede Mannschaft ist selbst verantwortlich, die aktuelle Ligaordnung zu kennen und ihre Mitglieder darüber zu informieren. Änderungen haben keine rückwirkende Gültigkeit.
  </p>
  <p>
    Alle Mannschaftsleiter und Spieler haben sich dem Bund gegenüber fair und loyal zu verhalten.
  </p>
  <p>
    Mannschaftsleiter haben bei allen Ligasitzungen Anwesenheitspflicht. Entscheidungen werden per Mehrheitsbeschluss getroffen. Bei Abwesenheit erlischt das Stimmrecht, eine Vertretung ist möglich.
  </p>
  <p>
    Mannschaftsleiter müssen sich über verpasste Sitzungen informieren und auf dem Laufenden bleiben.
  </p>
</section>

    </div>
  );
}
