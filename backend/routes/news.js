import express from "express";
import multer from "multer";
import fs from "fs";
import { v2 as cloudinary } from "cloudinary";
import { sqlNewsPost, sqlNewsGet, sqlNewsDelete } from "../sql.js";
import connection from "../db.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

cloudinary.config({
  cloud_name: 'drltrpag2',
  api_key: '663795571325894',
  api_secret: 'grmyXcRSISNkttQKbHxGcwsd7Mo'
});

async function uploadImage(localFilePath) {
  try {
    const result = await cloudinary.uploader.upload(localFilePath, {
      folder: "news",
    });
    fs.unlinkSync(localFilePath);
    return result.secure_url;
  } catch (error) {
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }
    throw error;
  }
}

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { text } = req.body;
    const filePath = req.file?.path;
    let imageUrl = filePath ? await uploadImage(filePath) : null;

    connection.query(sqlNewsPost, [text, imageUrl], (err, result) => {
      if (err) return res.status(500).send("Fehler beim Speichern des News-Posts");
      res.json({ id: result.insertId, text, image: imageUrl });
    });
  } catch (error) {
    res.status(500).send("Fehler beim Upload");
  }
});

router.get("/", (req, res) => {
  connection.query(sqlNewsGet, (err, results) => {
    if (err) return res.status(500).send("Fehler beim Laden der News");
    res.json(results.map((row) => ({ id: row.id, text: row.text, image: row.image_url })));
  });
});

router.delete("/:id", (req, res) => {
  connection.query(sqlNewsDelete, [req.params.id], (err) => {
    if (err) return res.status(500).send("Fehler beim Löschen");
    res.sendStatus(204);
  });
});

export default router;