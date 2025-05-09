import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name,
  spiele,
  siege,
  unentschieden,
  niederlagen,
  tore,
  gegentore,
  punkte
) {
  return {
    name,
    spiele,
    siege,
    unentschieden,
    niederlagen,
    tore,
    gegentore,
    punkte,
  };
}

const rows = [
  createData("Mannschaft 1", 15, 10, 3, 2, 35, 20, 33),
  createData("Mannschaft 2", 15, 9, 4, 2, 30, 18, 31),
  createData("Mannschaft 3", 15, 8, 5, 2, 28, 22, 29),
  createData("Mannschaft 4", 15, 7, 3, 5, 25, 24, 24),
  createData("Mannschaft 5", 15, 6, 4, 5, 22, 25, 22),
  createData("Mannschaft 6", 15, 5, 3, 7, 20, 27, 18),
  createData("Mannschaft 7", 15, 4, 4, 7, 18, 28, 16),
  createData("Mannschaft 8", 15, 3, 3, 9, 15, 30, 12),
  createData("Mannschaft 9", 15, 2, 2, 11, 12, 35, 8),
  createData("Mannschaft 10", 15, 1, 1, 13, 10, 38, 4),
];

export default function Spieltabelle() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="Spieltabelle">
        <TableHead>
          <TableRow>
            <StyledTableCell>Platz</StyledTableCell>
            <StyledTableCell>Mannschaft</StyledTableCell>
            <StyledTableCell align="center">Sp</StyledTableCell>
            <StyledTableCell align="center">S</StyledTableCell>
            <StyledTableCell align="center">U</StyledTableCell>
            <StyledTableCell align="center">N</StyledTableCell>
            <StyledTableCell align="center">Tore</StyledTableCell>
            <StyledTableCell align="center">GT</StyledTableCell>
            <StyledTableCell align="center">TD</StyledTableCell>
            <StyledTableCell align="center">Pkt</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {index + 1}
              </StyledTableCell>
              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.spiele}</StyledTableCell>
              <StyledTableCell align="center">{row.siege}</StyledTableCell>
              <StyledTableCell align="center">
                {row.unentschieden}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.niederlagen}
              </StyledTableCell>
              <StyledTableCell align="center">{row.tore}</StyledTableCell>
              <StyledTableCell align="center">{row.gegentore}</StyledTableCell>
              <StyledTableCell align="center">
                {row.tore - row.gegentore}
              </StyledTableCell>
              <StyledTableCell align="center">{row.punkte}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
