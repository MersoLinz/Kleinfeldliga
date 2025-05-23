import express, { response } from "express";
import cors from "cors";
import mysql from "mysql";

const app = express();
const port = 7777;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "kleinfeldliga",
});

connection.connect((err) => {
  if (err) {
    console.error("Fehler bei der Verbindung zur Datenbank: ", err);
  } else {
    console.log("Erfolgreich mit der Datenbank verbunden");
  }
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server startet on port ${port}`);
});

app.get("/spieler", (req, res) => {
  const query = "SELECT * FROM spieler";
  connection.query(query, (error, spieler) => {
    if (error) {
      res.status(500).send("interner Serverfehler");
    } else {
      res.json(spieler);
    }
  });
});

app.post("/neuerSpieler", (req, res) => {
  console.log("Eingehende Daten:", req.body); // 👈 HIER
  const { vorname, nachname, geburtsjahr, email } = req.body;

  if (!vorname || !nachname || !geburtsjahr || !email) {
    return res.status(400).send("Alle Felder müssen ausgefüllt sein");
  }

  const query = `INSERT INTO spieler (vorname, nachname, geburtsjahr, email) VALUES (?, ?, ?, ?)`;
  connection.query(
    query,
    [vorname, nachname, geburtsjahr, email],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send("Fehler beim Einfügen des Spielers");
      } else {
        res.status(201).send("Spieler erfolgreich registriert");
      }
    }
  );
});

app.get("/mannschaften", (req, res) => {
  const query = "SELECT * FROM mannschaften ORDER BY id";
  connection.query(query, (error, mannschaften) => {
    if (error) {
      res.status(500).send("interner Serverfehler");
    } else {
      res.json(mannschaften);
    }
  });
});

app.get("/saison", (req, res) => {
  const query = "SELECT * FROM saison ORDER BY jahr DESC";
  connection.query(query, (error, saison) => {
    if (error) {
      res.status(500).send("interner Serverfehler");
    } else {
      res.json(saison);
    }
  });
});

app.get("/spieltage", (req, res) => {
  const query = "SELECT * FROM spieltage WHERE saison_id = ? ORDER BY nummer";
  connection.query(query, (error, saison) => {
    if (error) {
      res.status(500).send("interner Serverfehler");
    } else {
      res.json(saison);
    }
  });
});

app.get("/spiele", (req, res) => {
  const { saison, spieltag } = req.query;

  const query = `
    SELECT s.id,
           m1.name AS heimmannschaft,
           m2.name AS gastmannschaft,
           s.heimtore,
           s.gasttore,
           s.heimmannschaft_id,
           s.gastmannschaft_id
    FROM spiele s
    JOIN mannschaften m1 ON s.heimmannschaft_id = m1.id
    JOIN mannschaften m2 ON s.gastmannschaft_id = m2.id
    WHERE s.saison_id = ? AND s.spieltag_id = ?
    ORDER BY s.id
  `;

  connection.query(query, [saison, spieltag], (err, rows) => {
    if (err) return res.status(500).json({ fehler: err.message });
    res.json(rows);
  });
});

app.post("/ergebnisse", (req, res) => {
  const { ergebnisse } = req.body;

  console.log("Empfangene Ergebnisse:", ergebnisse);

  const updates = ergebnisse.map((spiel) => {
    console.log("Verarbeite Spiel:", spiel);
    return new Promise((resolve, reject) => {
      const query = `
        UPDATE spiele
        SET heimtore = ?, gasttore = ?
        WHERE id = ?
      `;
      connection.query(
        query,
        [spiel.heimtore, spiel.gasttore, spiel.id],
        (err, result) => {
          if (err) reject(err);
          else resolve();
        }
      );
    });
  });

  Promise.all(updates)
    .then(() => res.json({ nachricht: "Ergebnisse erfolgreich gespeichert" }))
    .catch((err) => {
      console.error(err);
      res.status(500).json({ fehler: "Fehler beim Speichern der Ergebnisse" });
    });
});
