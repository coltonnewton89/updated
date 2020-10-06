import React from "react";
import { Switch, Route, Redirect } from "react-router";
//components
import Cycle from "./pages/Cycle";
import Journal from "./pages/Journal";
import Bilateral from "./pages/Bilateral";
import Workshop from "./pages/Workshop";
import Notifications from "./pages/Notifications";
import ResetPassword from "./pages/ResetPassword";
import DeleteUser from "./pages/DeleteUser";

const Router = () => {
  return (
    <Switch>
      <Route path="/Cycle" component={Cycle} />
      <Route path="/Journal" component={Journal} />
      <Route path="/Bilateral" component={Bilateral} />
      <Route path="/Workshop" component={Workshop} />
      <Route path="/Notifications" component={Notifications} />
      <Route path="/Reset" component={ResetPassword} />
      <Route path="/DeleteUser" component={DeleteUser} />
      <Redirect from="/" to="/Cycle" />
    </Switch>
  );
};

export default Router;
