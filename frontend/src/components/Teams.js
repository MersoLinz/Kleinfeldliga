import { red } from "@mui/material/colors";
import stmk from "../assets/stmk.png";
import * as React from "react";

function Teams() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "blue",
          fontSize: 50,
          letterSpacing: ".1rem",
          color: "red",
        }}
      >
        Mannschaften
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 30,
        }}
        className="container"
      >
        <div style={{ gap: 20, border: "2px solid black", padding: 20 }}>
          <img src={stmk} alt="STMK" style={{ height: 50, margin: 10 }} />
          <div>Mannschaft</div>
          <div>Id: XXX</div>
        </div>
        <div></div>
      </div>
    </>
  );
}
export default Teams;
