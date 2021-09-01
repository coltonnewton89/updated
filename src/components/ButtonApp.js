import React, { useState } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import scrollUp from '../imgs/scrollUp.gif'
import '../theme/ButtonApp.css'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [toggle, setToggle] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    if(toggle == false){
      setToggle(true);
    }else{
      setToggle(false)
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem className='myListItem'>
          <NavLink
          className='noFocus'
          to="/Notifications"
          style={{ color: "#F1FAEE" }}
        >
          Notifications
        </NavLink>
          </ListItem>
      <Divider />
          <ListItem className='myListItem'>
          <NavLink
          className='noFocus'
          to="/SocialMedia"
          style={{ color: "#F1FAEE" }}
          >
            Social Media
          </NavLink>
          </ListItem>
      </List>
    </div>
  );

  return (
    <div className='myDrawer'>
      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          {
            toggle ? (<img src={scrollUp} alt="scroll up button" className='showMenuExit' onClick={toggleDrawer(anchor, true)}/>) :
            (<img src={scrollUp} alt="scroll up button" className='showMenuEnter' onClick={toggleDrawer(anchor, true)}/>)
          }
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}