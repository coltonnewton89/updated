import React from "react";
import SimpleMenu from "../components/SimpleMenu";
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
import workshopBtn from "../menuImgs/workshopBtn.png";
import bilateralBtn from "../menuImgs/bilateralBtn.png";
import wrench from "../menuImgs/wrench.png";
import logOut from "../menuImgs/logOut.png";

//Menu Drawer Styles

export default function SwipeableTemporaryDrawer(props) {
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
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <NavLink
          onClick={toggleDrawer(anchor, false)}
          to="/Cycle"
          className="menuNavLink"
          style={{ color: "#F1FAEE" }}
          activeStyle={{ color: "#e56b6f" }}
        >
          <div className="menuIconDiv">
            <img className="menuIcon" src={cycleBtn} />
            <p className="navP">Cycle</p>
          </div>
        </NavLink>

        <NavLink
          onClick={toggleDrawer(anchor, false)}
          to="/Workshop"
          className="navLink"
          activeStyle={{ color: "#e56b6f" }}
        >
          <div className="menuIconDiv">
            <img className="menuIcon" src={workshopBtn} />
            <p className="navP">Workshop</p>
          </div>
        </NavLink>

        <NavLink
          onClick={toggleDrawer(anchor, false)}
          to="/Journal"
          className="navLink"
          activeStyle={{ color: "#e56b6f" }}
        >
          <div className="menuIconDiv">
            <img className="menuIcon" src={journalBtn} />
            <p className="navP">Journal</p>
          </div>
        </NavLink>

        <NavLink
          onClick={toggleDrawer(anchor, false)}
          to="/Bilateral"
          className="navLink"
          activeStyle={{ color: "#e56b6f" }}
        >
          <div className="menuIconDiv">
            <img className="menuIcon" src={bilateralBtn} />
            <p className="navP">Bilateral</p>
          </div>
        </NavLink>

        <div className="menuIconDiv">
          <img className="menuIcon" src={wrench} />
          <SimpleMenu />
        </div>

        <div className='menuLogo'></div>

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
