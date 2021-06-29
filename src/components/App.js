import React from "react";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Game from "./Game";
import MySkills from "../views/MySkills";
import About from "../views/About";
import MyPortfolio from "../views/MyPortfolio";
import Header from "../views/Header";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Navigation />
      <div className="container">
        <Switch>
          <Route path="/Game" exact component={Game} />
          <Route path="/skills" exact component={MySkills} />
          <Route path="/about" exact component={About} />
          {/* <Route path="/portfolio" exact component={MyPortfolio} /> */}
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
