import express from "express";
import cors from "cors";
import multer from "multer";
import mannschaftenRoutes from "./routes/mannschaften.js";
import saisonRoutes from "./routes/saison.js";
import spieleRoutes from "./routes/spiele.js";
import ergebnisseRoutes from "./routes/ergebnisse.js";
import spielerRoutes from "./routes/spieler.js";
import newsRoutes from "./routes/news.js";
import tabelleRoutes from "./routes/tabelle.js";
import neueSaisonRoutes from "./routes/neueSaison.js";

const app = express();
const upload = multer({ dest: "uploads/" });
const port = 7777;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/mannschaften", mannschaftenRoutes);
app.use("/saisons", saisonRoutes);
app.use("/spiele", spieleRoutes);
app.use("/ergebnisse", ergebnisseRoutes);
app.use("/spieler", spielerRoutes);
app.use("/news", newsRoutes);
app.use("/tabelle", tabelleRoutes);
app.use("/neue-saison", neueSaisonRoutes);

app.listen(port, () => console.log(`Server läuft auf Port ${port}`));
