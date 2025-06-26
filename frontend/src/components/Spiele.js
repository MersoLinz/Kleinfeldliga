import React, { useEffect, useState } from "react";
import {
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Grid,
} from "@mui/material";

import L1 from "../assets/logos/L1.PNG";
import L2 from "../assets/logos/L2.PNG";
import L3 from "../assets/logos/L3.PNG";
import L4 from "../assets/logos/L4.PNG";
import L5 from "../assets/logos/L5.PNG";
import L6 from "../assets/logos/L6.PNG";
import L7 from "../assets/logos/L7.PNG";
import L8 from "../assets/logos/L8.PNG";
import L9 from "../assets/logos/L9.PNG";
import L10 from "../assets/logos/L10.PNG";

const logoMap = {
  1: L1,
  2: L2,
  3: L3,
  4: L4,
  5: L5,
  6: L6,
  7: L7,
  8: L8,
  9: L9,
  10: L10,
};


export default function Spiele() {
  const [spieltag, setSpieltag] = useState(0);
  const [spiele, setSpiele] = useState([]);
  const [saison, setSaison] = useState("2025");
  const [verfügbareSaisons, setVerfügbareSaisons] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7777/alle-saisons")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const neuesteSaison = Math.max(...data);
          setVerfügbareSaisons(data);
          setSaison(String(neuesteSaison));
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Fehler beim Laden der Saisons");
      });
  }, []);

  useEffect(() => {
    fetch(
      `http://localhost:7777/spiele?saison=${saison}&spieltag=${spieltag + 1}`
    )
      .then((res) => res.json())
      .then((data) => setSpiele(data))
      .catch((err) => {
        console.error(err);
        alert("Fehler beim Laden der Spiele");
      });
  }, [spieltag, saison]);

  const handleToreUpdate = (index, key, value) => {
    const neueSpiele = [...spiele];
    neueSpiele[index] = {
      ...neueSpiele[index],
      [key]: value === "" ? null : Number(value),
    };
    setSpiele(neueSpiele);
  };

  const handleSpeichern = () => {
    fetch("http://localhost:7777/ergebnisse", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ergebnisse: spiele }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Fehler beim Speichern");
        return res.json();
      })
      .then((data) => alert(data.nachricht || "Ergebnisse gespeichert"))
      .catch((err) => {
        console.error(err);
        alert("Fehler beim Speichern der Ergebnisse");
      });
  };

  return (
    <div style={{ marginLeft: 50, padding: 20 }}>
      <h2 style={{ textAlign: "center", marginTop: 50, fontWeight: "bold", fontSize: 24 }}>
        Spieltag {spieltag + 1} – Saison {saison}
      </h2>

      <FormControl variant="standard" style={{ minWidth: 120, margin: 20 }}>
        <InputLabel id="saison-label">Saison</InputLabel>
        <Select
          labelId="saison-label"
          value={saison}
          onChange={(e) => setSaison(e.target.value)}
        >
          {verfügbareSaisons.map((jahr) => (
            <MenuItem key={jahr} value={jahr}>
              {jahr}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Tabs
          value={spieltag}
          onChange={(e, newValue) => setSpieltag(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="Spieltag Tabs"
          style={{ backgroundColor: "#f0f0f0", maxWidth: "100%" }}
        >
          {[...Array(18)].map((_, index) => (
            <Tab key={index} label={index + 1} />
          ))}
        </Tabs>
      </div>

      <Grid
        style={{
          textAlign: "center",
          justifyContent: "center",
          margin: 60,
          fontSize: 24,
        }}
        container
        spacing={4}
      >
        <Grid item xs={12} md={6}>
          <TableContainer
            component={Paper}
            style={{
              margin: "0 auto",
              maxWidth: 600,
              width: "100%",
            }}
          >
            <Table>
              <TableBody>
                {spiele.map((spiel, index) => (
                  <TableRow key={spiel.id}>
                    <TableCell style={{ width: 150, textAlign: "right" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 8 }}>
                        <span>{spiel.heimmannschaft}</span>
                          <img
                          src={logoMap[spiel.heimmannschaft_id]}
                          alt="Heimlogo"
                          style={{ width: 24, height: 24, objectFit: "contain" }}/>
                      </div>
                    </TableCell>
                    <TableCell>
                      <TextField
                        type="number"
                        size="small"
                        value={spiel.heimtore ?? ""}
                        onChange={(e) =>
                          handleToreUpdate(index, "heimtore", e.target.value)
                        }
                        style={{ width: 60 }}
                      />
                    </TableCell>
                    <TableCell style={{ width: 10, textAlign: "center" }}>
                      :
                    </TableCell>
                    <TableCell>
                      <TextField
                        type="number"
                        size="small"
                        value={spiel.gasttore ?? ""}
                        onChange={(e) =>
                          handleToreUpdate(index, "gasttore", e.target.value)
                        }
                        style={{ width: 60 }}
                      />
                    </TableCell>
                    <TableCell style={{ width: 150, textAlign: "left" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <img
                          src={logoMap[spiel.gastmannschaft_id]}
                          alt="Gastlogo"
                          style={{ width: 24, height: 24, objectFit: "contain" }}/>
                        <span>{spiel.gastmannschaft}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Button variant="contained" color="primary" onClick={handleSpeichern}>
            Ergebnisse speichern
          </Button>

          {spieltag === 17 && (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                fetch("http://localhost:7777/neue-saison", { method: "POST" })
                  .then((res) => res.json())
                  .then((data) => alert(data.nachricht))
                  .catch((err) => alert("Fehler beim Erstellen der Saison"));
              }}
              style={{ marginLeft: 20 }}
            >
              Neue Saison starten
            </Button>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
