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
} from "@mui/material";

export default function SpieltageEingabeMUI() {
  const [spieltag, setSpieltag] = useState(0); // Index 0 = Spieltag 1
  const [spiele, setSpiele] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:7777/spiele?saison=1&spieltag=${spieltag + 1}`)
      .then((res) => {
        if (!res.ok) throw new Error("Fehler beim Laden der Spiele");
        return res.json();
      })
      .then((data) => setSpiele(data))
      .catch((err) => {
        console.error(err);
        alert("Fehler beim Laden der Spiele");
      });
  }, [spieltag]);

  const handleToreChange = (index, key, value) => {
    const neueSpiele = [...spiele];
    neueSpiele[index] = {
      ...neueSpiele[index],
      [key]: value === "" ? null : Number(value),
    };
    setSpiele(neueSpiele);
  };

  const handleSpeichern = () => {
    fetch("ergebnisse", {
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
    <div>
      <Tabs
        value={spieltag}
        onChange={(e, newValue) => setSpieltag(newValue)}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="Spieltag Tabs"
        sx={{ mb: 2 }}
      >
        {[...Array(18)].map((_, index) => (
          <Tab key={index} label={index + 1} />
        ))}
      </Tabs>
      <h2 style={{ textAlign: "center", fontSize: 40 }}>
        Spieltag {spieltag + 1}
      </h2>
      <TableContainer component={Paper} sx={{ mb: 2 }}>
        <Table>
          <TableBody>
            {spiele.map((spiel, index) => (
              <TableRow key={spiel.id}>
                <TableCell>{spiel.heimmannschaft}</TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    size="small"
                    value={spiel.heimtore ?? ""}
                    onChange={(e) =>
                      handleToreChange(index, "heimtore", e.target.value)
                    }
                    sx={{ width: 60 }}
                  />
                </TableCell>
                <TableCell>:</TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    size="small"
                    value={spiel.gasttore ?? ""}
                    onChange={(e) =>
                      handleToreChange(index, "gasttore", e.target.value)
                    }
                    sx={{ width: 60 }}
                  />
                </TableCell>
                <TableCell>{spiel.gastmannschaft}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button variant="contained" color="primary" onClick={handleSpeichern}>
        Ergebnisse speichern
      </Button>
    </div>
  );
}
