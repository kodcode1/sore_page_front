import React from "react";
import { IconButton, Tooltip, Avatar, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AccountCircle = () => {
  const navigate = useNavigate();
  const userStatus = useSelector((state) => state.user.status);

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    if (!userStatus) {
      setAnchorElUser(event.currentTarget);
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseUserMenu1 = () => {
    navigate("/signup");
  };
  const handleCloseUserMenu2 = () => {
    navigate("/signin");
  };
  const handleCloseUserMenu3 = () => {
    setAnchorElUser(null);
  };

  return (
    <IconButton size="large" color="primary">
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar src="/broken-image.jpg" />{" "}
        </IconButton>
      </Tooltip>

      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem
          onClick={() => {
            handleCloseUserMenu1();
          }}
        >
          Sign up
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleCloseUserMenu2();
          }}
        >
          Sign in
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleCloseUserMenu3();
          }}
        >
          MenuItem 3
        </MenuItem>
      </Menu>
    </IconButton>
  );
};

export default AccountCircle;
