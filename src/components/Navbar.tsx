import { AppBar, Box, Toolbar, IconButton, Typography, MenuItem, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1, minHeight: "0px" }}>
      <AppBar position="static" sx={{ background: "white" }}>
        <Toolbar sx={{ background: "" }}>
          <Typography color="primary" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Web Store
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" color="primary" onClick={() => navigate("/")}>
              <ShoppingCartIcon />
            </IconButton>
            <IconButton size="large" color="primary" onClick={() => navigate("/")}>
              <HomeIcon />
            </IconButton>
            <IconButton size="large" color="primary" onClick={() => navigate("/")}>
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
