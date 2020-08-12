import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import firebase from "../FireConfig";
import "../theme/MenuButton.css";
import { NavLink } from "react-router-dom";
import selfTeckLogo from '../imgs/teck.png';


//Menu Drawer Styles


export default function SwipeableTemporaryDrawer() {
  
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  //Menu Drawer
  const list = (anchor) => (
    <div 
      className='listDiv'
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <h3>Menu</h3>
        <NavLink
          exact
          to="/Cycle"
          className="menuNavLink"
          activeClassName="activeRoute"
          activeStyle={{ color: "#e56b6f" }}
        >
          <ListItem>
            Cycle
          </ListItem>
        </NavLink>

        <NavLink
          to="/Journal"
          className="navLink"
          activeClassName="activeRoute"
          activeStyle={{ color: "#e56b6f" }}
        >
          <ListItem>
            Journal
          </ListItem>
        </NavLink>

        <NavLink
          to="/Bilateral"
          className="navLink"
          activeClassName="activeRoute"
          activeStyle={{ color: "#e56b6f" }}
        >
          <ListItem>
            Bilateral
          </ListItem>
        </NavLink>

        <NavLink
          to="/Workshop"
          className="navLink"
          activeClassName="activeRoute"
          activeStyle={{ color: "#e56b6f" }}
        >
          <ListItem>
            Workshop
          </ListItem>
        </NavLink>

        <ListItem onClick={logOff}>Log Off</ListItem>
      </List>
      <img className='menuLogo' src={selfTeckLogo} alt="Self Teck logo"/>
    </div>
  );

  //Log Off function
  function logOff() {
    firebase.auth().signOut();
    alert("I should of signed off");
  }

  //Menu Button
  return (
    <div className="menuBtnContainer">
      {[""].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className="menuBtn" onClick={toggleDrawer(anchor, true)}>
            {anchor}
          </Button>
          <SwipeableDrawer
            anchor={"left"}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}


//Create link for chat
//create settings pop menu