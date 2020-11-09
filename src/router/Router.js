import React from "react";
import { Switch, Route } from "react-router-dom";

// PAGES
import Home from "../views/Home";

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default Router;
