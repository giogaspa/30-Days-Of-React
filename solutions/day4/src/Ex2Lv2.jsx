import React from "react";

import avatarImg from "./images/asabeneh.jpg";

const Ex2Lv2Main = () => {
  return (
    <div style={{ padding: 20 }}>
      <Avatar />
      <SkillsContainer />
      <JoinedData />
    </div>
  );
};

export default Ex2Lv2Main;

const Avatar = () => {
  const roleStyle = {
    fontSize: 12,
    marginBottom: 20,
  };

  const avatarImage = {
    borderRadius: "50%",
    height: 150,
    padding: 20,
  };

  return (
    <>
      <img src={avatarImg} style={avatarImage} alt="avatar" />
      <div style={titleSectionStyle}>Gioacchino Gasparella</div>
      <div style={roleStyle}>Junior Developer, Italy</div>
    </>
  );
};

const titleSectionStyle = {
  fontSize: 16,
  fontWeight: "bold",
  textTransform: "uppercase",
  marginBottom: 20,
};

const SkillsContainer = () => {
  const skillItemStyle = {
    backgroundColor: "#92bcc5",
    color: "#FFF",
    padding: 6,
    marginRight: 8,
    borderRadius: 4,
    fontSize: 12,
  };

  const skills = [
    "HTML",
    "CSS",
    "JS",
    "React",
    "Angular 2+",
    "Wordpress",
    "PHP",
    "MySQL",
  ];

  return (
    <div>
      <div style={titleSectionStyle}> SKILLS</div>
      <div>
        {skills.map((skill) => (
          <span style={skillItemStyle}>{skill}</span>
        ))}
      </div>
    </div>
  );
};

const JoinedData = () => {
  return (
    <div style={{ fontSize: 10, marginTop: 20 }}>Joined on Aug 30, 2020</div>
  );
};
