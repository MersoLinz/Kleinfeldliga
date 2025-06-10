import { red } from "@mui/material/colors";
import stmk from "../assets/stmk.png";
import * as React from "react";

function Teams() {
  const handleSpeichern = () => {
    fetch("http://localhost:7777/mannschaften", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
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