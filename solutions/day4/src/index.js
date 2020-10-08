// index.js
import React from "react";
import ReactDOM from "react-dom";
/* import Ex1Lv2Main from "./Ex1Lv2";
import Ex2Lv2Main from "./Ex2Lv2"; */
import Ex4Lv2Main from "./Ex4Lv2";

// The App, or the parent or the container component
const App = () => (
  <div className="app">
    {/* <Ex1Lv2Main /> */}
    {/* <Ex2Lv2Main /> */}
    <Ex4Lv2Main />
  </div>
);

const rootElement = document.getElementById("root");
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement);
