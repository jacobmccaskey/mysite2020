import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// window.addEventListener("load", function () {
//   let lazy = document.getElementsByClassName("headshot");
//   for (let n = 0, len = lazy.length; n < len; n++) {
//     lazy[0].children[0].setAttribute("src", lazy[0].getAttribute("data-src"));
//     lazy[0].children[0].classList.add("no-blur");
//   }
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
