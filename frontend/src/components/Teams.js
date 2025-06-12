import React, { useEffect, useState } from "react";
import L1 from "../assets/logos/L1.PNG";
import L2 from "../assets/logos/L2.PNG";
import L3 from "../assets/logos/L3.PNG";
import L6 from "../assets/logos/L6.PNG";
import L8 from "../assets/logos/L8.PNG";
import L9 from "../assets/logos/L9.PNG";

import {
  Container,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";

const Mannschaften = () => {
  const [mannschaften, setMannschaften] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:7777/mannschaften")
      .then((res) => res.json())
      .then((data) => {
        setMannschaften(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fehler beim Laden der Mannschaften:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" align="center" sx={{ margin: 5 }} gutterBottom>
        Mannschaften
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        {mannschaften.map((team) => {
          const logoSrc = `/assets/logos/L${team.id}.PNG`;

          return (
            <Card
              key={team.id}
              sx={{
                width: "18%",
                minWidth: 180,
                textAlign: "center",
                backgroundColor: "#f5f5f5",
                borderRadius: 3,
                boxShadow: 3,
                ":hover": {
                  boxShadow: 6,
                  backgroundColor: "#e0e0e0",
                },
              }}
            >
              <CardContent>
                <img
                  src={logoSrc}
                  alt={`${team.name} Logo`}
                  style={{ width: "100%", height: 100, objectFit: "contain" }}
                />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#3f51b5", mt: 1 }}
                >
                  {team.name}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Container>
  );
};

export default Mannschaften;
