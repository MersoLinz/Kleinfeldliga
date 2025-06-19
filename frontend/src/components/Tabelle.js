import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
} from "@mui/material";
import { FormControl, InputLabel } from "@mui/material";
import {LigaContext} from "./LigaContext";
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
  L1: L1, L2: L2, L3: L3, L4: L4, L5: L5, L6: L6, L7: L7, L8: L8, L9: L9, L10: L10,
};

export default function Spieltabelle() {
  const [tabelle, setTabelle] = useState([]);
  const [saisons, setSaisons] = useState([]);
  const [selectedSaison, setSelectedSaison] = useState(null);
  const { bundesland } = React.useContext(LigaContext);

  console.log("Bundesland:", bundesland);

  useEffect(() => {
    fetch("http://localhost:7777/alle-saisons")
      .then((res) => res.json())
      .then((saisons) => {
        setSaisons(saisons);
        if (saisons.length > 0) {
          setSelectedSaison(saisons[0]);
        }
      });
  }, []);

  useEffect(() => {
    if (!selectedSaison) return;

    fetch(`http://localhost:7777/tabelle?saison=${selectedSaison}`)
      .then((res) => res.json())
      .then((data) => setTabelle(data));
  }, [selectedSaison]);

  return (
    <div style={{ maxWidth: "80%", margin: "auto", padding: "20px" }}>
      <Paper style={{ padding: 20 }}>
        <h2 style={{ textAlign: "center" }}>
          Tabelle – Saison {selectedSaison}
        </h2>
        <FormControl variant="standard" style={{ minWidth: 120, marginBottom: 20 }}>
  <InputLabel id="saison-label">Saison</InputLabel>
  <Select
    labelId="saison-label"
    value={selectedSaison || ""}
    onChange={(e) => setSelectedSaison(e.target.value)}
  >
    {saisons.map((jahr) => (
      <MenuItem key={jahr} value={jahr}>
        {jahr}
      </MenuItem>
    ))}
  </Select>
  </FormControl>
        <TableContainer>
          <Table>
            <TableHead style={{ backgroundColor: "#f0f0f0" }}>
              <TableRow>
                <TableCell style={{ paddingRight: 0, fontWeight: "bold" }}>
                  Platz
                </TableCell>
                <TableCell style={{ paddingLeft: 0, fontWeight: "bold" }}>
                  Mannschaft
                </TableCell>

                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Sp
                </TableCell>

                <TableCell
                  align="center"
                  style={{ padding: "6px", width: "0px", fontWeight: "bold" }}
                >
                  S
                </TableCell>
                <TableCell
                  align="center"
                  style={{ padding: "6px", width: "0px", fontWeight: "bold" }}
                >
                  U
                </TableCell>
                <TableCell
                  align="center"
                  style={{ padding: "6px", width: "0px", fontWeight: "bold" }}
                >
                  N
                </TableCell>

                <TableCell
                  align="center"
                  style={{ padding: "6px", paddingLeft: "20px", width: "0px", fontWeight: "bold" }}
                >
                  T
                </TableCell>
                <TableCell
                  align="center"
                  style={{ padding: "6px", width: "0px", fontWeight: "bold" }}
                >
                  GT
                </TableCell>
                <TableCell
                  align="center"
                  style={{ padding: "6px", width: "0px", fontWeight: "bold" }}
                >
                  TD
                </TableCell>

                <TableCell
                  align="center"
                  style={{ padding: "6px 6px", fontWeight: "bold" }}
                >
                  Pkt
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {tabelle.map((row, idx) => (
                <TableRow key={row.id}>
                  <TableCell style={{ paddingRight: 2 }}>{idx + 1}</TableCell>
                  <TableCell style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: 2 }}>{row.wappen && (
                  <img src={logoMap[row.wappen]} alt={row.name} style={{ width: 24, height: 24 }} />)}{row.name}</TableCell>
                  <TableCell align="center">{row.spiele}</TableCell>
                  <TableCell align="center">{row.siege}</TableCell>
                  <TableCell align="center">{row.unentschieden}</TableCell>
                  <TableCell align="center">{row.niederlagen}</TableCell>
                  <TableCell style={{ paddingLeft: 30 }} align="center">{row.tore}</TableCell>
                  <TableCell align="center">{row.gegentore}</TableCell>
                  <TableCell align="center">{row.tordifferenz}</TableCell>
                  <TableCell style={{ fontWeight: "bold" }} align="center">
                    {row.punkte}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}