import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import logo from "../assets/wappen/Logo.jpg";

const pages = [
  "News",
  "Teams",
  "Tabelle",
  "Spielplan",
  "Spielerstatistik",
  "Sperren",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar(props) {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    navigate(`/${page.toLowerCase()}`);
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
       <Toolbar disableGutters sx={{ position: "relative", width: "100%" }}>
  {/* Left side: Logo + Title */}
  <Box sx={{ display: "flex", alignItems: "center" }}>
    <img src={logo} alt="Logo" style={{ height: 40 }} />
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="Kleinfeldliga"
      sx={{
        ml: 1,
        display: { xs: "none", md: "flex" },
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".1rem",
        color: "brown",
        textDecoration: "none",
      }}
    >
      Kleinfeldliga
    </Typography>
  </Box>

  {/* Centered navigation */}
  <Box
    sx={{
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      display: { xs: "none", md: "flex" },
    }}
  >
    {pages.map((page) => (
      <Button
        key={page}
        onClick={() => handleCloseNavMenu(page)}
        sx={{ my: 2, color: "white", display: "block" }}
      >
        {page}
      </Button>
    ))}
  </Box>

  {/* Right side: User Avatar */}
  <Box sx={{ marginLeft: "auto", display: "flex" }}>
    <Tooltip title="Open settings">
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar alt="User" src="/static/images/avatar/2.jpg" />
      </IconButton>
    </Tooltip>
  </Box>
</Toolbar>

      </Container>
      {props.children}
    </AppBar>
  );
}
export default Navbar;