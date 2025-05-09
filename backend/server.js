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

app.get("/mannschaft", (req, res) => {
  const query = `SELECT * FROM mannschaft`;
  connection.query(query, (error, mannschaft) => {
    if (error) {
      res.status(500).send("interner Serverfehler");
    } else {
      res.json(mannschaft);
    }
  });
});

app.post("/addNewTeam", (req, res) => {
  const mannschaft = req.body.mannschaft;
  const query = `INSERT INTO mannschaft VALUES ("${mannschaft}")`;
  connection.query(query, (error, results) => {
    if (error) {
      res.status(500).send("interner Serverfehler");
    } else {
      res.status(201).send("Team wurde angelegt");
    }
  });
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

app.post("/addNewPlayer", (req, res) => {
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
