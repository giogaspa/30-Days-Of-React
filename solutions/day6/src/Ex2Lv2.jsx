import React from "react";
import { generateHexaColor } from "./utils";

export default () => {
  return (
    <div style={{ width: 580, margin: "0 auto", textAlign: "center" }}>
      <h2 style={{ fontWeight: "bold" }}>30 Days Of React</h2>
      <h3 style={{ marginBottom: 20 }}>Hexadecimal Colors</h3>
      <NumbersContainer />
    </div>
  );
};

const NumbersContainer = () => {
  const values = Array(32)
    .fill(1)
    .map(() => generateHexaColor());

  const numberComponentList = values.map((val) => (
    <NumberComponent hexValue={val} />
  ));

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {numberComponentList}
    </div>
  );
};

const NumberComponent = ({ hexValue }) => {
  const style = {
    width: 70,
    height: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #FFF",
    color: "#FFF",
    fontSize: 12,
    backgroundColor: hexValue,
  };
  return <div style={style}>{hexValue}</div>;
};
