import React from "react";
import { Box, Typography } from "@mui/material";

const LigaNichtVorhanden = () => {
  return (
    <Box
      sx={{
        height: "80px",
        backgroundColor: "#f8d7da",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#721c24",
        fontWeight: "bold",
        fontSize: "1.2rem",
      }}
    >
      Liga noch nicht vorhanden
    </Box>
  );
};

export default LigaNichtVorhanden;
