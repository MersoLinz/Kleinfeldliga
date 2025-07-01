import express from "express";
import { sqlErgebnisse } from "../sql.js";
import connection from "../db.js";

const router = express.Router();

router.post("/", (req, res) => {
  const { ergebnisse } = req.body;
  const updates = ergebnisse.map((spiel) => {
    return new Promise((resolve, reject) => {
      connection.query(sqlErgebnisse, [spiel.heimtore, spiel.gasttore, spiel.id], (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  });

  Promise.all(updates)
    .then(() => res.json({ nachricht: "Ergebnisse erfolgreich gespeichert" }))
    .catch(() => res.status(500).json({ fehler: "Speichern fehlgeschlagen" }));
});

export default router;