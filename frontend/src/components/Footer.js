import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import s1 from "../assets/sponsoren/s1.PNG";
import s2 from "../assets/sponsoren/s2.PNG";
import s3 from "../assets/sponsoren/s3.PNG";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#212121",
        color: "#ffffff",
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} justifyContent="center" textAlign="center">
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Infos
            </Typography>
            <Link href="/ligaordnung" color="inherit" underline="hover" display="block" margin={1}>
              Ligaordnung
            </Link>
            <Link href="/spielregeln" color="inherit" underline="hover" display="block" margin={1}>
              Spielregeln
            </Link>
            <Link href="/trainer-login" color="inherit" underline="hover" display="block" margin={1}>
              Trainer-Login
            </Link>
            <Link href="/schiedsrichter-login" color="inherit" underline="hover" display="block" margin={1}>
              Schiedsrichter-Login
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Folge uns
            </Typography>
            <IconButton
              href="https://facebook.com/iqra.kleinfeldliga/"
              target="_blank"
              rel="noopener"
              sx={{ color: "#ffffff" }}
            >
              <FacebookIcon fontSize="large" />
            </IconButton>
            <IconButton
              href="https://instagram.com/iqra_linz"
              target="_blank"
              rel="noopener"
              sx={{ color: "#ffffff" }}
            >
              <InstagramIcon fontSize="large" />
            </IconButton>
            <IconButton
              href="mailto:iqra.linz@hotmail.com"
              sx={{ color: "#ffffff" }}
            >
              <EmailIcon fontSize="large" />
            </IconButton>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Sponsoren
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <img src={s1} alt="Sponsor 1" style={{ maxHeight: 50 }} />
              <img src={s2} alt="Sponsor 2" style={{ maxHeight: 50 }} />
              <img src={s3} alt="Sponsor 3" style={{ maxHeight: 50 }} />
            </Box>
          </Grid>
        </Grid>

        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="gray">
            © 2025 Deine Liga. Alle Rechte vorbehalten.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
