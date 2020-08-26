import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import firebase from "../FireConfig";
import "../theme/MenuButton.css";
import { NavLink } from "react-router-dom";
import selfTeckLogo from "../imgs/teck.png";
import cycleBtn from "../menuImgs/cycleBtn.png";
import journalBtn from "../menuImgs/journalBtn.png";
import messengerBtn from "../menuImgs/messengerBtn.png";
import workshopBtn from "../menuImgs/workshopBtn.png";
import bilateralBtn from "../menuImgs/bilateralBtn.png";
import logOut from "../menuImgs/logOut.png";

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
      className="listDiv"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className="menuRow">
          <NavLink
            exact
            to="/Cycle"
            className="menuNavLink"
            activeClassName="activeRoute"
            activeStyle={{ color: "#e56b6f" }}
          >
            <div className="menuIconDiv">
              <img className="menuIcon" src={cycleBtn} />
              <p>Cycle</p>
            </div>
          </NavLink>

          <NavLink
            to="/Workshop"
            className="navLink"
            activeClassName="activeRoute"
            activeStyle={{ color: "#e56b6f" }}
          >
            <div className="menuIconDiv">
              <img className="menuIcon" src={workshopBtn} />
              <p>Workshop</p>
            </div>
          </NavLink>
        </div>

        <div className="menuRow">
          <NavLink
            to="/Journal"
            className="navLink"
            activeClassName="activeRoute"
            activeStyle={{ color: "#e56b6f" }}
          >
            <div className="menuIconDiv">
              <img className="menuIcon" src={journalBtn} />
              <p>Journal</p>
            </div>
          </NavLink>

          <NavLink
            to="/Messenger"
            className="navLink"
            activeClassName="activeRoute"
            activeStyle={{ color: "#e56b6f" }}
          >
            <div className="menuIconDiv">
              <img className="menuIcon" src={messengerBtn} />
              <p>Messenger</p>
            </div>
          </NavLink>
        </div>

        <div className="menuRow">
          <NavLink
            to="/Bilateral"
            className="navLink"
            activeClassName="activeRoute"
            activeStyle={{ color: "#e56b6f" }}
          >
            <div className="menuIconDiv">
              <img className="menuIcon" src={bilateralBtn} />
              <p>Bilateral</p>
            </div>
          </NavLink>
        </div>

        <img className="menuLogo" src={selfTeckLogo} alt="Self Teck logo" />

        <div className="logOffDiv">
          <img src={logOut} />
          <ListItem onClick={logOff} className="logOutItem">
            Log Off
          </ListItem>
        </div>
      </List>
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
