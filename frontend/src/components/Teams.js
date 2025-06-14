import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";

import L1 from "../assets/logos/L1.PNG";
import L2 from "../assets/logos/L2.PNG";
import L3 from "../assets/logos/L3.PNG";
import L4 from "../assets/logos/L4.PNG";
import L5 from "../assets/logos/L5.PNG";
import L6 from "../assets/logos/L6.PNG";
import L7 from "../assets/logos/L7.PNG";
import L8 from "../assets/logos/L8.PNG";
import L9 from "../assets/logos/L9.PNG";
import L10 from "../assets/logos/L10.PNG";

const logoMap = {
  1: L1,
  2: L2,
  3: L3,
  4: L4,
  5: L5,
  6: L6,
  7: L7,
  8: L8,
  9: L9,
  10: L10,
};

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
      <Typography variant="h4" align="center" sx={{ margin: 5 }} gutterBottom>
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
          const logoSrc = logoMap[team.id];

          return (
            <Card
              key={team.id}
              sx={{
                width: "15%",
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
                  style={{
                    width: "100%",
                    height: 100,
                    objectFit: "contain",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "black", mt: 1 }}
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
