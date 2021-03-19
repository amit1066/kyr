import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../views/home";
import Contact from "../views/contact";

const RootRouter = () => {
  return (
    <Router basename={'/sandbox/Player'}>
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default RootRouter;
