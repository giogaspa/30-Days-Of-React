import React from "react";
import ReactDOM from "react-dom";
import Ex1Lv2 from "./Ex1Lv2";
import Ex2Lv2 from "./Ex2Lv2";
import Ex3Lv2 from "./Ex3Lv2";

const App = () => {
  return (
    <div className="app">
      {/* <Ex1Lv2 /> */}
      {/* <Ex2Lv2 /> */}
      <Ex3Lv2 />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
