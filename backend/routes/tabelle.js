import express from "express";
import { sqlTabelle, sqlIdName } from "../sql.js";
import connection from "../db.js";

const router = express.Router();

router.get("/", (req, res) => {
  const saison = req.query.saison;
  if (!saison) return res.status(400).send("Saison fehlt");

  connection.query(sqlTabelle, [saison], (err, result) => {
    if (err) return res.status(500).send("Fehler");

    const vorhandeneIds = result.map((r) => r.id);
    connection.query(sqlIdName, (err2, alle) => {
      if (err2) return res.status(500).send("Fehler beim Abrufen der Teams");
      for (const team of alle) {
        if (!vorhandeneIds.includes(team.id)) {
          result.push({
            id: team.id, name: team.name, spiele: 0, siege: 0, unentschieden: 0,
            niederlagen: 0, tore: 0, gegentore: 0, tordifferenz: 0, punkte: 0
          });
        }
      }
      result.sort((a, b) => b.punkte - a.punkte || b.tordifferenz - a.tordifferenz || b.tore - a.tore);
      res.json(result);
    });
  });
});

export default router;
