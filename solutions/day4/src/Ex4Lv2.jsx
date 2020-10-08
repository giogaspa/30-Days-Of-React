import React from "react";
import { hexaColor } from "./utils";

const Ex4Lv2Main = () => {
  const randomColors = new Array(5).fill(null).map(() => hexaColor());
  console.log(randomColors);

  return (
    <div style={{ padding: 20, width: 500, margin: "0 auto" }}>
      {randomColors.map((color) => (
        <div
          style={{
            backgroundColor: color,
            textAlign: "center",
            fontSize: 12,
            fontWeight: "bold",
            color: "#FFF",
            padding: "20px 0",
            borderRadius: 2,
            marginBottom: 1,
          }}
          key={color}
        >
          {color}
        </div>
      ))}
    </div>
  );
};

export default Ex4Lv2Main;
