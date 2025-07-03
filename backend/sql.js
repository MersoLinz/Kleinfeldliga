export const sqlMannschaft = `SELECT * FROM mannschaften ORDER BY id`;

export const sqlAlleSaison = `SELECT DISTINCT saison AS jahr FROM spiele ORDER BY saison DESC`;

export const sqlSpiele = `
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

export const sqlErgebnisse = `UPDATE spiele SET heimtore = ?, gasttore = ? WHERE id = ?`;

export const sqlNeueSaisonMax = `SELECT MAX(saison) AS maxSaison FROM spiele`;

export const sqlIdMannschaft = `SELECT id FROM mannschaften`;

export const sqlInsertSpiele = `INSERT INTO spiele (saison, spieltag, heimmannschaft_id, gastmannschaft_id) VALUES (?, ?, ?, ?)`;

export const sqlTabelle = `SELECT 
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
ORDER BY punkte DESC, tordifferenz DESC, tore DESC`;

export const sqlIdName = `SELECT id, name FROM mannschaften`;

export const sqlSpieler = `SELECT * FROM spieler`;

export const sqlNeuerSpieler = `INSERT INTO spieler (vorname, nachname, geburtsjahr, email, mannschaft_id) VALUES (?, ?, ?, ?, ?)`;

export const sqlNewsPost = `INSERT INTO news (text, image_url) VALUES (?, ?)`;

export const sqlNewsGet = `SELECT * FROM news ORDER BY id DESC`;

export const sqlNewsDelete = `DELETE FROM news WHERE id = ?`;