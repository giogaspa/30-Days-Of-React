import React from "react";
import { tenHighestPopulation } from "./data/ten_most_highest_populations";

export default () => {
  const maxPopulation = tenHighestPopulation[0].population;
  const countries = tenHighestPopulation.map((item) => {
    return {
      name: item.country,
      percentage: (item.population / maxPopulation) * 100,
      total: item.population,
    };
  });

  return (
    <div style={{ width: 700, margin: "0 auto", textAlign: "center" }}>
      <h2 style={{ fontWeight: "bold" }}>30 Days Of React</h2>
      <h3>World populations</h3>
      <p style={{ marginBottom: 20 }}>Ten most populated countries</p>
      <CountriesChart countries={countries} />
    </div>
  );
};

const CountriesChart = ({ countries }) => {
  return (
    <div>
      {countries.map(({ name, percentage, total }) => (
        <CountryRow
          name={name}
          percentage={percentage}
          total={total}
          key={name}
        />
      ))}
    </div>
  );
};

const CountryRow = ({ name, total, percentage }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", textAlign: "left" }}>
      <div
        style={{ flexBasis: 230, padding: 2, fontWeight: "bold", fontSize: 14 }}
      >
        {name.toUpperCase()}
      </div>
      <div style={{ flexBasis: 370, padding: 2 }}>
        <div
          style={{
            width: (370 * percentage) / 100,
            height: "100%",
            backgroundColor: "red",
            borderRadius: 2,
          }}
        ></div>
      </div>
      <div style={{ flexBasis: 50, padding: 2 }}>{total}</div>
    </div>
  );
};
