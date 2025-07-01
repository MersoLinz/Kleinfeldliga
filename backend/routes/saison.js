import express from "express";
import { sqlAlleSaison } from "../sql.js";
import connection from "../db.js";

const router = express.Router();

router.get("/", (req, res) => {
  connection.query(sqlAlleSaison, (err, results) => {
    if (err) return res.status(500).send("Fehler beim Laden");
    res.json(results.map((row) => row.jahr));
  });
});

export default router;