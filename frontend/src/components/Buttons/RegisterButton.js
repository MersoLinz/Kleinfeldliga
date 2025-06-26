// src/components/RegisterButton.js
import React from "react";
import { Button } from "@mui/material";

const RegisterButton = ({ player, onSuccess }) => {
  const handleSubmit = async () => {
    console.log("Neuer Spieler registriert:", player);

    try {
      const response = await fetch("http://localhost:7777/neuerSpieler", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(player),
      });

      if (response.ok) {
        alert(
          `Spieler ${player.vorname} ${player.nachname}, Geburtsjahr ${player.geburtsjahr}, wurde registriert!`
        );
        onSuccess();
      } else {
        const errorText = await response.text();
        alert(`Fehler: ${errorText}`);
      }
    } catch (error) {
      console.error("Fehler beim Registrieren:", error);
      alert("Ein unerwarteter Fehler ist aufgetreten.");
    }
  };

  return (
    <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>
      Registrieren
    </Button>
  );
};

export default RegisterButton;