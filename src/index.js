import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

if ("serviceWorker" in navigator) {
  //   navigator.serviceWorker
  //     .register("./sw.js")
  //     .then(function(registration) {
  //       // Registration was successful
  //       console.log(
  //         "ServiceWorker registration successful with scope: ",
  //         registration.scope
  //       );
  //     })
  //     .catch(function(err) {
  //       // registration failed :(
  //       console.log("ServiceWorker registration failed: ", err);
  //     });
}
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
