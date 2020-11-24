import React from "react";
import NavBar from "./navbar";
import MobileNavbar from "./MobileNavbar";
import Body from "./body";
import Resume from "./resume";
import Projects from "./projects";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <MobileNavbar />
        <div className="div-adjust">
          <Route exact path="/" render={() => <Body />} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
        </div>
      </div>
    </Router>
  );
}

export default App;
