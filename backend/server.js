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

app.get("/teams", (req, res) => {
  const query = "SELECT * FROM teams";
  connection.query(query, (error, team) => {
    if (error) {
      res.status(500).send("interner Serverfehler");
    } else {
      res.json(team);
    }
  });
});

app.post("/addNewTeam", (req, res) => {
  const teamname = req.body.teamname;
  const query = `INSERT INTO team VALUES ("${teamname}")`;
  connection.query(query, (error, results) => {
    if (error) {
      res.status(500).send("interner Serverfehler");
    } else {
      res.status(201).send("Team wurde angelegt");
    }
  });
});

app.delete("/deleteTeam", (req, res) => {
  const query = `DELETE FROM team WHERE id=${req.body.id}`;
  connection.query(query, (error, results) => {
    if (error) {
      res.status(500).send("interner Serverfehler");
    } else {
      res.status(201).send("Team wurde gelöscht");
    }
  });
});
