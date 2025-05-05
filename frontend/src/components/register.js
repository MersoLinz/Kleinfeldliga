import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const RegisterPlayer = () => {
  const [player, setPlayer] = useState({
    vname: "",
    nname: "",
    birthYear: null,
    mail: "",
  });

  const handleChange = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    const year = date ? date.getFullYear() : "";
    setPlayer({ ...player, birthYear: year });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Neuer Spieler registriert:", player);
    alert(
      `Spieler ${player.name}, Geburtsjahr ${player.birthYear}, wurde registriert!`
    );
    setPlayer({ vname: "", nname: "", birthYear: null, mail: "" });
  };

  return (
    <Card sx={{ width: "100%", maxWidth: 320, margin: "auto", marginTop: 5 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Neuen Spieler registrieren
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} direction="column" alignItems="center">
            <Grid item sx={{ width: "100%", maxWidth: 300 }}>
              <TextField
                name="vname"
                label="Vorame"
                value={player.vname}
                onChange={handleChange}
                required
                fullWidth
                InputLabelProps={{ required: true }}
              />
            </Grid>
            <Grid item sx={{ width: "100%", maxWidth: 300 }}>
              <TextField
                name="nname"
                label="Nachname"
                value={player.nname}
                onChange={handleChange}
                required
                fullWidth
                InputLabelProps={{ required: true }}
              />
            </Grid>
            <Grid item sx={{ width: "100%", maxWidth: 300 }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  views={["year"]}
                  label="Geburtsjahr"
                  value={
                    player.birthYear ? new Date(player.birthYear, 0) : null
                  }
                  onChange={handleDateChange}
                  slotProps={{
                    textField: {
                      required: true,
                      fullWidth: true,
                      sx: { m: 0 },
                      InputLabelProps: { required: true },
                    },
                  }}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item sx={{ width: "100%", maxWidth: 300 }}>
              <TextField
                name="mail"
                label="E-Mail"
                value={player.mail}
                onChange={handleChange}
                required
                fullWidth
                InputLabelProps={{ required: true }}
              />
            </Grid>
            <Grid item sx={{ width: "100%", maxWidth: 300 }}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Registrieren
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegisterPlayer;
