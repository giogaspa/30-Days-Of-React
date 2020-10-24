import React from "react";
import { countriesData } from "./data/countries";

const cardStyle = {
  boxShadow: "0 0 10px #888888",
  padding: 20,
};

export class Ex2 extends React.Component {
  state = {
    currCountryIndex: 0,
  };

  changeCountry() {
    this.setState((prevState) => ({
      currCountryIndex:
        prevState.currCountryIndex !== countriesData.length - 1
          ? prevState.currCountryIndex + 1
          : 0,
    }));
  }

  render() {
    const {
      name,
      capital,
      population,
      flag,
      currency,
      languages,
    } = countriesData[this.state.currCountryIndex];

    return (
      <main
        style={{
          maxWidth: 600,
          margin: "0 auto",
        }}
      >
        <div style={cardStyle}>
          <div
            style={{
              width: 150,
              height: 100,
              margin: "20px auto",
            }}
          >
            <img
              src={flag}
              width="150"
              style={{
                boxShadow: "0 0 18px #888888",
              }}
            />
          </div>
          <div
            style={{
              textAlign: "center",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            {name}
          </div>
          <div>Capital: {capital}</div>
          <div>Language: {languages.join(", ")}</div>
          <div>Population: {population}</div>
          <div>Currency: {currency}</div>
        </div>
        <div style={{ textAlign: "center", margin: "20px auto" }}>
          <button onClick={this.changeCountry.bind(this)}>
            Change country
          </button>
        </div>
      </main>
    );
  }
}
