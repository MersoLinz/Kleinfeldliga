import * as React from "react";
import stmk from "../assets/stmk.png";

function Tabelle() {
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
        Tabelle
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
          <div>Platz</div>
          <div>Name</div>
          <div>Spiele</div>
          <div>Siege</div>
          <div>Niederlagen</div>
        </div>
      </div>
    </>
  );
}
export default Tabelle;
