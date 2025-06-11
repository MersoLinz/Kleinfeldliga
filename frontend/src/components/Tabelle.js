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

export default function Spieltabelle() {
  const [tabelle, setTabelle] = useState([]);
  const [saisons, setSaisons] = useState([]);
  const [selectedSaison, setSelectedSaison] = useState(null);

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

        <Select
          value={selectedSaison || ""}
          onChange={(e) => setSelectedSaison(e.target.value)}
          style={{ marginBottom: 20 }}
        >
          {saisons.map((jahr) => (
            <MenuItem key={jahr} value={jahr}>
              {jahr}
            </MenuItem>
          ))}
        </Select>

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
                  <TableCell style={{ paddingLeft: 2 }}>{row.name}</TableCell>
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