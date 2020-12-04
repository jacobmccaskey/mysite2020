import React from "react";
import NavBar from "./navbar";
import MobileNavbar from "./MobileNavbar";
import Body from "./body";
import Resume from "./resume";
import Projects from "./projects";
import ScrollRestore from "./ScrollRestore";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollRestore />
      <div className="app">
        <NavBar />
        <MobileNavbar />
        <div className="div-adjust">
          <Route exact path="/" render={() => <Projects />} />
          <Route path="/about" component={Body} />
          <Route path="/resume" component={Resume} />
        </div>
      </div>
    </Router>
  );
}

export default App;
