import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { NavLink } from "react-router-dom";

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorRp, setAnchorRp] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ color: "#F1FAEE" }}
      >
        <p>Account Settings</p>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Change Notification Timing</MenuItem>
        <NavLink
          to="/Reset"
          style={{ color: "#F1FAEE" }}
          activeStyle={{ color: "#e56b6f" }}
        >
          <MenuItem onClick={handleClose}>Reset Password</MenuItem>
        </NavLink>

        <MenuItem onClick={handleClose}>Delete Account</MenuItem>
      </Menu>
    </div>
  );
}
