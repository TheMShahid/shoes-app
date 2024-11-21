import React from "react";

import "../../global.css";
import "./skill.css";

const Skill = (props) => {
  return props.skillsData.map((skill) => (
    <div className="skill" key={skill.id}>
      <span className="skill-icon">
        <i className={skill.icon}></i>
      </span>
      <h4 className="skill-title">{skill.title}</h4>
      <p className="skill-text">{skill.text}</p>
    </div>
  ));
};

export default Skill;
