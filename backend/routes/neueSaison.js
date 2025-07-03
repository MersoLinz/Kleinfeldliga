import express from "express";
import { sqlNeueSaisonMax, sqlIdMannschaft, sqlInsertSpiele } from "../sql.js";
import connection from "../db.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const jahr = await new Promise((resolve, reject) => {
      connection.query(sqlNeueSaisonMax, (err, result) => {               // Abfrage des maximalen Jahres für die neue Saison
        if (err) return reject(err);
        resolve((result[0].maxSaison || new Date().getFullYear()) + 1);   // Nächste Saison ist das aktuelle Jahr + 1
      });
    });

    const mannschaften = await new Promise((resolve, reject) => {
      connection.query(sqlIdMannschaft, (err, result) => {                // Abfrage der IDs aller Mannschaften  
        if (err) return reject(err);
        resolve(result.map((r) => r.id));                                 // Extrahieren der IDs aus dem Ergebnis, also 1, 2, ..., 10
      });
    });

    if (mannschaften.length !== 10) return res.status(400).json({ fehler: "Genau 10 Mannschaften benötigt" });

    function generateRoundRobinSchedule(teams) {                          // Beschreibung in generateSchedule.js
      const spielplan = [];
      if (teams.length % 2 !== 0) teams.push(null);
      const totalRounds = teams.length - 1;
      const halfSize = teams.length / 2;
      const teamList = [...teams];
      const fixed = teamList.pop();

      for (let round = 0; round < totalRounds; round++) {
        const roundTeams = [fixed, ...teamList];
        const pairs = [];
        for (let i = 0; i < halfSize; i++) {
          const home = round % 2 === 0 ? roundTeams[i] : roundTeams[teams.length - 1 - i];
          const away = round % 2 === 0 ? roundTeams[teams.length - 1 - i] : roundTeams[i];
          if (home && away) pairs.push([home, away]);
        }
        teamList.splice(1, 0, teamList.pop());
        spielplan.push(pairs);
      }
      return spielplan;
    }

    const spielplan = [
      ...generateRoundRobinSchedule(mannschaften),                                        // Hinzufügen des Hinspiels
      ...generateRoundRobinSchedule(mannschaften).map(sp => sp.map(([a, b]) => [b, a]))   // Rückspiel (Umkehrung der Paarungen)
    ];

    for (let i = 0; i < spielplan.length; i++) {
      const spieltag = i + 1;
      for (const [heim, gast] of spielplan[i]) {
        await new Promise((resolve, reject) => {
          connection.query(
            sqlInsertSpiele,
            [jahr, spieltag, heim, gast],
            (err) => (err ? reject(err) : resolve())
          );
        });
      }
    }

    res.json({ nachricht: `Neue Saison ${jahr} erfolgreich erstellt mit ${spielplan.flat().length} Spielen.` });
  } catch (err) {
    res.status(500).json({ fehler: "Fehler beim Erstellen der Saison" });
  }
});

export default router;
