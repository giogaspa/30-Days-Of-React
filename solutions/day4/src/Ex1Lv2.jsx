import React from "react";

import reactLogo from "./images/react_logo.png";
import html5Logo from "./images/html_logo.png";
import css3Logo from "./images/css_logo.png";
import jsLogo from "./images/js_logo.png";

export const Ex1Lv2Main = () => {
  return (
    <React.Fragment>
      <Header />
      <IconsContent />
    </React.Fragment>
  );
};

const Header = () => {
  const style = {
    fontWeight: "bold",
    fontSize: "20px",
    textAlign: "center",
  };
  return <h1 style={style}>Front End Technologies</h1>;
};

const IconsContent = () => {
  const technologies = [
    { name: "HTML5", src: html5Logo },
    { name: "CSS3", src: css3Logo },
    { name: "JS", src: jsLogo },
    { name: "React", src: reactLogo },
  ];
  const rowStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const imgStyle = {
    width: 100,
    height: 100,
    margin: 20,
  };

  return (
    <div style={rowStyle}>
      {technologies.map((technology) => (
        <img
          src={technology.src}
          alt={technology.name}
          key={technology.name}
          style={imgStyle}
        />
      ))}
    </div>
  );
};
