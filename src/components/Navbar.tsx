import { AppBar, Box, Toolbar, IconButton, Typography, MenuItem, Button, Badge } from "@mui/material";
import AccountCircleonect from "./AccountCircleIUserNotConect";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapStors from "./MapStors";
import AccountCircleIUserConect from "./AccountCircleIUserConect";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function Navbar() {
  const navigate = useNavigate();

  const [statusUser, setStatusUser] = useState(false);
  const userStatus = useSelector((state) => state.user.status);

  useEffect(() => {
    setStatusUser(userStatus);
  }, [userStatus]);
  return (
    <Box sx={{ flexGrow: 1, minHeight: "0px" }}>
      <AppBar position="static" sx={{ background: "white" }}>
        <Toolbar sx={{ background: "" }}>
          <Typography color="primary" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Web Store
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" color="primary" onClick={() => navigate("/mapStors")}>
              <Badge color="error">
                <LocationOnIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" color="primary" onClick={() => navigate("/cart")}>
              <Badge badgeContent={1} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" color="primary" onClick={() => navigate("/")}>
              <HomeIcon />
            </IconButton>
            {statusUser || <AccountCircleonect />}
            {statusUser && <AccountCircleIUserConect />}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
