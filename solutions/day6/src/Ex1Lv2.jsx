import React from "react";

export default () => {
  return (
    <div style={{ width: 580, margin: "0 auto", textAlign: "center" }}>
      <h2 style={{ fontWeight: "bold" }}>30 Days Of React</h2>
      <h3 style={{ marginBottom: 20 }}>Number Generator</h3>
      <NumbersContainer />
    </div>
  );
};

const NumbersContainer = () => {
  const values = Array(32)
    .fill(1)
    .map((value, index) => value * index);

  const numberComponentList = values.map((val) => (
    <NumberComponent value={val} />
  ));

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {numberComponentList}
    </div>
  );
};

const NumberComponent = ({ value }) => {
  const defaultStyle = {
    width: 70,
    height: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #FFF",
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  };

  let style = { ...defaultStyle };
  if (isPrime(value)) {
    style = { ...style, backgroundColor: "#FD5E53" };
  } else if (value % 2 === 0) {
    style = { ...style, backgroundColor: "#21BF73" };
  } else {
    style = { ...style, backgroundColor: "#FDDB3A" };
  }

  return <div style={style}>{value}</div>;
};

const isPrime = (num) => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};
