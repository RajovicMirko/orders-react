import React from "react";
import { Switch, Route } from "react-router-dom";

// PAGES
import Home from "views/Home";
import Partners from "views/Partners";
import Orders from "views/Orders";

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/orders" component={Orders} />
      <Route path="/partners" component={Partners} />
    </Switch>
  );
}

export default Router;
