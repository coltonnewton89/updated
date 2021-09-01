import React from "react";
import { Switch, Route, Redirect } from "react-router";
//components
import Cycle from "./pages/Cycle";
import Notifications from "./pages/Notifications";
import SocialMedia from "./pages/SocialMedia";

const Router = () => {  
  return (
    <Switch>
      <Route path="/Cycle" component={Cycle} />
      <Route path="/Notifications" component={Notifications} />
      <Route path="/SocialMedia" component={SocialMedia} />
      <Redirect from="/" to="/Cycle" /> 
    </Switch>
  );
};

export default Router;
