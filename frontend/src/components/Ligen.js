import React from "react";
import { Box, Button } from "@mui/material";

const Liga = () => {
  return (
    <Box
      sx={{
        height: "80px",
        backgroundColor: "#f0f0f0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        sx={{
          borderRadius: "5px",
          mx: 1,
          backgroundColor: "#f0f0f0",
          color: "black",
          fontWeight: "bold",
          ":hover": {
                  boxShadow: 6,
                  backgroundColor: "#e0e0e0",
                },
        }}
      >
        1. LIGA
      </Button>
    </Box>
  );
};

export default Liga;
