import React from "react";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Details from "./Details";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/details">
          <Details />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
