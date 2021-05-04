import React from "react";
import { Redirect, Route, Switch } from "react-router";
import PlayGround from "../Containers/PlayGround";
import Showcase from "../Containers/Showcase";

const AppRoute = () => {
  return (
    <Switch>
      <Route path="/playground" component={PlayGround} />
      <Route path="/showcase" component={Showcase} />
      <Redirect to="/showcase" />
    </Switch>
  );
};

export default AppRoute;
