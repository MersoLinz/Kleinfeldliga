import express from "express";
import { sqlNeueSaisonMax, sqlIdMannschaft } from "../sql.js";
import connection from "../db.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const jahr = await new Promise((resolve, reject) => {
      connection.query(sqlNeueSaisonMax, (err, result) => {
        if (err) return reject(err);
        resolve((result[0].maxSaison || new Date().getFullYear()) + 1);
      });
    });

    const mannschaften = await new Promise((resolve, reject) => {
      connection.query(sqlIdMannschaft, (err, result) => {
        if (err) return reject(err);
        resolve(result.map((r) => r.id));
      });
    });

    if (mannschaften.length !== 10) return res.status(400).json({ fehler: "Genau 10 Mannschaften benötigt" });

    function generateRoundRobinSchedule(teams) {
      const schedule = [];
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
        schedule.push(pairs);
      }
      return schedule;
    }

    const spielplan = [
      ...generateRoundRobinSchedule(mannschaften),
      ...generateRoundRobinSchedule(mannschaften).map(sp => sp.map(([a, b]) => [b, a]))
    ];

    for (let i = 0; i < spielplan.length; i++) {
      const spieltag = i + 1;
      for (const [heim, gast] of spielplan[i]) {
        await new Promise((resolve, reject) => {
          connection.query(
            "INSERT INTO spiele (saison, spieltag, heimmannschaft_id, gastmannschaft_id) VALUES (?, ?, ?, ?)",
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
