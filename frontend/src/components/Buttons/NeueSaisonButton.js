import React from "react";
import { Button } from "@mui/material";

const NeueSaisonButton = () => {
  const handleNeueSaison = () => {
    fetch("http://localhost:7777/neue-saison", { method: "POST" })
      .then((res) => res.json())
      .then((data) => alert(data.nachricht))
      .catch((err) => {
        console.error(err);
        alert("Fehler beim Erstellen der Saison");
      });
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={handleNeueSaison}
      style={{ marginLeft: 20 }}
    >
      Neue Saison starten
    </Button>
  );
};

export default NeueSaisonButton;
