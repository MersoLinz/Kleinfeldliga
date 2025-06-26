import React, { useState } from "react";
import {
  TextField,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import RegisterButton from "./Buttons/RegisterButton";

const RegisterPlayer = () => {
  const [player, setPlayer] = useState({
    vorname: "",
    nachname: "",
    geburtsjahr: null,
    email: "",
    mannschaft_id: "",
  });

  const handleChange = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    const year = date ? date.getFullYear() : "";
    setPlayer({ ...player, geburtsjahr: year });
  };

  const resetForm = () => {
    setPlayer({
      vorname: "",
      nachname: "",
      geburtsjahr: null,
      email: "",
      mannschaft_id: "",
    });
  };

  return (
    <Card sx={{ width: "100%", maxWidth: 320, margin: "auto", marginTop: 5 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Neuen Spieler registrieren
        </Typography>
        <Grid container spacing={2} direction="column" alignItems="center">
          <Grid item sx={{ width: "100%", maxWidth: 300 }}>
            <TextField
              name="vorname"
              label="Vorname"
              value={player.vorname}
              onChange={handleChange}
              required
              fullWidth
              InputLabelProps={{ required: true }}
            />
          </Grid>
          <Grid item sx={{ width: "100%", maxWidth: 300 }}>
            <TextField
              name="nachname"
              label="Nachname"
              value={player.nachname}
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
                value={player.geburtsjahr ? new Date(player.geburtsjahr, 0) : null}
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
              name="email"
              label="E-Mail"
              value={player.email}
              onChange={handleChange}
              required
              fullWidth
              InputLabelProps={{ required: true }}
            />
          </Grid>
          <Grid item sx={{ width: "100%", maxWidth: 300 }}>
            <TextField
              name="mannschaft_id"
              label="Mannschaft ID"
              value={player.mannschaft_id}
              onChange={handleChange}
              required
              fullWidth
              InputLabelProps={{ required: true }}
            />
          </Grid>
          <Grid item sx={{ width: "100%", maxWidth: 300 }}>
            <RegisterButton player={player} onSuccess={resetForm} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default RegisterPlayer;
