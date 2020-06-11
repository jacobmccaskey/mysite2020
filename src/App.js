import React from "react";
import NavBar from "./navbar";
import Body from "./body";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <div className="div-adjust">
        <Body />
      </div>
    </div>
  );
}

export default App;
