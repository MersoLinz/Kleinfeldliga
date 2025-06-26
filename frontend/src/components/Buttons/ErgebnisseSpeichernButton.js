import React from "react";
import { Button } from "@mui/material";

const ErgebnisseSpeichernButton = ({ spiele }) => {
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
    <Button
      style={{ marginTop: 15 }}
      variant="contained"
      color="primary"
      onClick={handleSpeichern}
    >
      Ergebnisse speichern
    </Button>
  );
};

export default ErgebnisseSpeichernButton;
