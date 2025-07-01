import express from "express";
import { sqlSpieler, sqlNeuerSpieler } from "../sql.js";
import connection from "../db.js";

const router = express.Router();

router.get("/", (req, res) => {
  connection.query(sqlSpieler, (error, spieler) => {
    if (error) {
      res.status(500).send("interner Serverfehler");
    } else {
      res.json(spieler);
    }
  });
});

router.post("/neu", (req, res) => {
  const { vorname, nachname, geburtsjahr, email, mannschaft_id } = req.body;
  if (!vorname || !nachname || !geburtsjahr || !email || !mannschaft_id) {
    return res.status(400).send("Alle Felder müssen ausgefüllt sein");
  }
  connection.query(sqlNeuerSpieler, [vorname, nachname, geburtsjahr, email, mannschaft_id], (error) => {
    if (error) {
      res.status(500).send("Fehler beim Einfügen des Spielers");
    } else {
      res.status(201).send("Spieler erfolgreich registriert");
    }
  });
});

export default router;