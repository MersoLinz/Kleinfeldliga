import express from "express";
import { sqlMannschaft } from "../sql.js";
import connection from "../db.js";

const router = express.Router();

router.get("/", (req, res) => {
  connection.query(sqlMannschaft, (error, mannschaften) => {
    if (error) {
      res.status(500).send("interner Serverfehler");
    } else {
      res.json(mannschaften);
    }
  });
});

export default router;