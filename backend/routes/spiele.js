import express from "express";
import { sqlSpiele } from "../sql.js";
import connection from "../db.js";

const router = express.Router();

router.get("/", (req, res) => {
  const { saison, spieltag } = req.query;
  connection.query(sqlSpiele, [saison, spieltag], (err, results) => {
    if (err) return res.status(500).send("Fehler beim Laden");
    res.json(results);
  });
});

export default router;