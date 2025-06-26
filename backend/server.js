import express, { response } from "express";
import cors from "cors";
import mysql from "mysql";
import multer from "multer";
import fs from "fs";
import { v2 as cloudinary } from 'cloudinary';
const upload = multer({ dest: "uploads/" }); // Temp-Ordner für Bilder

const app = express();
const port = 7777;

cloudinary.config({
  cloud_name: 'drltrpag2',
  api_key: '663795571325894',
  api_secret: 'grmyXcRSISNkttQKbHxGcwsd7Mo'
});

async function uploadImage(localFilePath) {
  try {
    const result = await cloudinary.uploader.upload(localFilePath, {
      folder: "news", // <-- Zielordner in Cloudinary
    });

    // Temporäre Datei löschen (nicht vergessen!)
    fs.unlinkSync(localFilePath);

    return result.secure_url;
  } catch (error) {
    console.error("Fehler beim Hochladen zu Cloudinary:", error);
    // Datei trotzdem löschen, um Müll zu vermeiden
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }
    throw error;
  }
}


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "kewsercup",
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
  const query = "SELECT * FROM spiele WHERE saison = ? ORDER BY jahr DESC";
  connection.query(query, (error, saison) => {
    if (error) {
      res.status(500).send("interner Serverfehler");
    } else {
      res.json(saison);
    }
  });
});

app.get("/alle-saisons", (req, res) => {
  const query =
    "SELECT DISTINCT saison AS jahr FROM spiele ORDER BY saison DESC";
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Fehler beim Abrufen der Saisons:", err);
      return res.status(500).send("Fehler beim Laden");
    }

    const response = results.map((row) => row.jahr); // nur Jahr-Werte
    res.json(response);
  });
});

app.get("/spieltage", (req, res) => {
  const query = "SELECT * FROM spiele WHERE spieltag = ? ORDER BY spieltag";
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
    SELECT 
    s.id,
    m1.id AS heimmannschaft_id,
    m1.name AS heimmannschaft,
    m2.id AS gastmannschaft_id,
    m2.name AS gastmannschaft,
    s.heimtore,
    s.gasttore
    FROM spiele s
    JOIN mannschaften m1 ON s.heimmannschaft_id = m1.id
    JOIN mannschaften m2 ON s.gastmannschaft_id = m2.id
    WHERE s.saison = ? AND s.spieltag = ?
    ORDER BY s.id
  `;

  connection.query(query, [saison, spieltag], (err, results) => {
    if (err) {
      console.error("Fehler beim Laden der Spiele:", err);
      return res.status(500).send("Fehler beim Laden");
    }
    res.json(results);
  });
});

app.post("/ergebnisse", (req, res) => {
  const { ergebnisse } = req.body;

  const updates = ergebnisse.map((spiel) => {
    return new Promise((resolve, reject) => {
      const query = `
        UPDATE spiele
        SET heimtore = ?, gasttore = ?
        WHERE id = ?
      `;
      connection.query(
        query,
        [spiel.heimtore, spiel.gasttore, spiel.id],
        (err) => {
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
      res.status(500).json({ fehler: "Speichern fehlgeschlagen" });
    });
});

app.post("/neue-saison", async (req, res) => {
  try {
    const jahr = await new Promise((resolve, reject) => {
      connection.query(
        "SELECT MAX(saison) AS maxSaison FROM spiele",
        (err, result) => {
          if (err) return reject(err);
          const letztesJahr = result[0].maxSaison || new Date().getFullYear();
          resolve(letztesJahr + 1);
        }
      );
    });

    const mannschaften = await new Promise((resolve, reject) => {
      connection.query("SELECT id FROM mannschaften", (err, result) => {
        if (err) return reject(err);
        resolve(result.map((r) => r.id));
      });
    });

    if (mannschaften.length !== 10) {
      return res.status(400).json({ fehler: "Genau 10 Mannschaften benötigt" });
    }

    // Round-Robin-Spielplan erzeugen (Hinrunde)
    function generateRoundRobinSchedule(teams) {
      const schedule = [];
      const numTeams = teams.length;
      if (numTeams % 2 !== 0) teams.push(null); // ungerade? -> spielfrei

      const totalRounds = numTeams - 1;
      const halfSize = numTeams / 2;

      const teamList = [...teams];
      const fixed = teamList.pop();

      for (let round = 0; round < totalRounds; round++) {
        const pairs = [];

        const roundTeams = [fixed, ...teamList];

        for (let i = 0; i < halfSize; i++) {
          const home =
            round % 2 === 0 ? roundTeams[i] : roundTeams[numTeams - 1 - i];
          const away =
            round % 2 === 0 ? roundTeams[numTeams - 1 - i] : roundTeams[i];
          if (home && away) pairs.push([home, away]);
        }

        teamList.splice(1, 0, teamList.pop()); // Rotation
        schedule.push(pairs);
      }

      return schedule; // Array mit Spieltagen
    }

    const spielplanHinrunde = generateRoundRobinSchedule(mannschaften);
    const spielplanRueckrunde = spielplanHinrunde.map((spieltag) =>
    spieltag.map(([heim, gast]) => [gast, heim]));
    const spielplan = [...spielplanHinrunde, ...spielplanRueckrunde]; // jetzt 18 Spieltage

    // Spiele direkt mit saison + spieltag einfügen
    for (let i = 0; i < spielplan.length; i++) {
      const spieltag = i + 1;

      for (const [heim, gast] of spielplan[i]) {
        await new Promise((resolve, reject) => {
          connection.query(
            "INSERT INTO spiele (saison, spieltag, heimmannschaft_id, gastmannschaft_id) VALUES (?, ?, ?, ?)",
            [jahr, spieltag, heim, gast],
            (err) => {
              if (err) return reject(err);
              resolve();
            }
          );
        });
      }
    }

    res.json({
      nachricht: `Neue Saison ${jahr} erfolgreich erstellt mit ${
        spielplan.flat().length
      } Spielen.`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ fehler: "Fehler beim Erstellen der Saison" });
  }
});

app.get("/tabelle", (req, res) => {
  const saison = req.query.saison;
  if (!saison) return res.status(400).send("Saison fehlt");

  const query = `
SELECT 
  m.id,
  m.name,
  m.wappen,

  COUNT(CASE 
    WHEN s.heimtore IS NOT NULL AND s.gasttore IS NOT NULL THEN 1 
  END) AS spiele,

  SUM(CASE 
    WHEN s.heimtore IS NOT NULL AND s.gasttore IS NOT NULL AND 
         ((s.heimmannschaft_id = m.id AND s.heimtore > s.gasttore) OR
          (s.gastmannschaft_id = m.id AND s.gasttore > s.heimtore))
    THEN 1 ELSE 0 
  END) AS siege,

  SUM(CASE 
    WHEN s.heimtore IS NOT NULL AND s.gasttore IS NOT NULL AND s.heimtore = s.gasttore 
    THEN 1 ELSE 0 
  END) AS unentschieden,

  SUM(CASE 
    WHEN s.heimtore IS NOT NULL AND s.gasttore IS NOT NULL AND 
         ((s.heimmannschaft_id = m.id AND s.heimtore < s.gasttore) OR
          (s.gastmannschaft_id = m.id AND s.gasttore < s.heimtore))
    THEN 1 ELSE 0 
  END) AS niederlagen,

  SUM(CASE 
    WHEN s.heimtore IS NOT NULL AND s.gasttore IS NOT NULL THEN 
      CASE 
        WHEN s.heimmannschaft_id = m.id THEN s.heimtore
        WHEN s.gastmannschaft_id = m.id THEN s.gasttore
        ELSE 0
      END
    ELSE 0
  END) AS tore,

  SUM(CASE 
    WHEN s.heimtore IS NOT NULL AND s.gasttore IS NOT NULL THEN 
      CASE 
        WHEN s.heimmannschaft_id = m.id THEN s.gasttore
        WHEN s.gastmannschaft_id = m.id THEN s.heimtore
        ELSE 0
      END
    ELSE 0
  END) AS gegentore,

  SUM(CASE 
    WHEN s.heimtore IS NOT NULL AND s.gasttore IS NOT NULL THEN 
      CASE 
        WHEN s.heimmannschaft_id = m.id THEN s.heimtore - s.gasttore
        WHEN s.gastmannschaft_id = m.id THEN s.gasttore - s.heimtore
        ELSE 0
      END
    ELSE 0
  END) AS tordifferenz,

  SUM(CASE 
    WHEN s.heimtore IS NOT NULL AND s.gasttore IS NOT NULL THEN
      CASE 
        WHEN (s.heimmannschaft_id = m.id AND s.heimtore > s.gasttore) OR
             (s.gastmannschaft_id = m.id AND s.gasttore > s.heimtore) THEN 3
        WHEN s.heimtore = s.gasttore THEN 1
        ELSE 0
      END
    ELSE 0
  END) AS punkte

FROM mannschaften m
LEFT JOIN spiele s
  ON (m.id = s.heimmannschaft_id OR m.id = s.gastmannschaft_id)
  AND s.saison = ?
GROUP BY m.id, m.name
ORDER BY punkte DESC, tordifferenz DESC, tore DESC

  `;

  connection.query(query, [saison], (err, result) => {
    if (err) {
      console.error("Fehler beim Berechnen der Tabelle:", err);
      return res.status(500).send("Fehler");
    }

    // Falls eine Mannschaft noch kein Spiel hatte (kein Eintrag in spiele)
    // müssen diese manuell mit Nullen ergänzt werden
    const vorhandeneIds = result.map((r) => r.id);
    connection.query("SELECT id, name FROM mannschaften", (err2, alle) => {
      if (err2) return res.status(500).send("Fehler beim Abrufen der Teams");

      for (const team of alle) {
        if (!vorhandeneIds.includes(team.id)) {
          result.push({
            id: team.id,
            name: team.name,
            spiele: 0,
            siege: 0,
            unentschieden: 0,
            niederlagen: 0,
            tore: 0,
            gegentore: 0,
            tordifferenz: 0,
            punkte: 0,
          });
        }
      }

      // sortieren erneut (Punkte → TD → Tore)
      result.sort(
        (a, b) =>
          b.punkte - a.punkte ||
          b.tordifferenz - a.tordifferenz ||
          b.tore - a.tore
      );

      res.json(result);
    });
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

app.post("/neuerSpieler", (req, res) => {
  console.log("Eingehende Daten:", req.body); // 👈 HIER
  const { vorname, nachname, geburtsjahr, email, mannschaft_id } = req.body;

  if (!vorname || !nachname || !geburtsjahr || !email || !mannschaft_id) {
    return res.status(400).send("Alle Felder müssen ausgefüllt sein");
  }

  const query = `INSERT INTO spieler (vorname, nachname, geburtsjahr, email, mannschaft_id) VALUES (?, ?, ?, ?, ?)`;
  connection.query(
    query,
    [vorname, nachname, geburtsjahr, email, mannschaft_id],
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

app.post("/news", upload.single("image"), async (req, res) => {
  try {
    const { text } = req.body;
    const filePath = req.file?.path;

    let imageUrl = null;

    if (filePath) {
      imageUrl = await uploadImage(filePath); // <-- Verwendung hier
    }

    const insertQuery = `INSERT INTO news (text, image_url) VALUES (?, ?)`;
    connection.query(insertQuery, [text, imageUrl], (err, result) => {
      if (err) {
        console.error("Fehler beim Speichern:", err);
        return res.status(500).send("Fehler beim Speichern des News-Posts");
      }

      res.json({
        id: result.insertId,
        text,
        image: imageUrl,
      });
    });
  } catch (error) {
    res.status(500).send("Fehler beim Upload");
  }
});


app.get("/news", (req, res) => {
  connection.query("SELECT * FROM news ORDER BY id DESC", (err, results) => {
    if (err) return res.status(500).send("Fehler beim Laden der News");
    res.json(
      results.map((row) => ({
        id: row.id,
        text: row.text,
        image: row.image_url,
      }))
    );
  });
});

app.delete("/news/:id", (req, res) => {
  const id = req.params.id;
  const deleteQuery = "DELETE FROM news WHERE id = ?";
  connection.query(deleteQuery, [id], (err, result) => {
    if (err) {
      console.error("Fehler beim Löschen:", err);
      return res.status(500).send("Fehler beim Löschen");
    }
    res.sendStatus(204);
  });
});
