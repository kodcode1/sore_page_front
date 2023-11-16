import React from "react";
import { IconButton, Tooltip, Avatar, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AccountCircle = () => {
  const navigate = useNavigate();
  const userStatus = useSelector((state) => state.user.status);

  // console.log(userStatus);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    if(userStatus){
      setAnchorElUser(event.currentTarget);
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseUserMenu1 = () => {
    navigate("/");
  };
  const handleCloseUserMenu2 = () => {
    navigate("/cart");
  };
  const handleCloseUserMenu3 = () => {
    setAnchorElUser(null);
  };

  return (
    <IconButton size="large" color="primary">
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
          MenuItem 1
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleCloseUserMenu2();
          }}
        >
          MenuItem 2
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
