import React from "react";
import Skill from "../skill/skill";

import "../../global.css";
import "./skills-list.css";

class SkillsList extends React.Component {
  constructor() {
    super();

    this.state = {
      skillsData: [
        {
          id: 1,
          icon: "fas fa-mug-hot",
          title: "made in us",
          text: "lorem ipsum dolor sit am liber tempor inc tempor",
        },

        {
          id: 2,
          icon: "fas fa-glass-cheers",
          title: "relaxation",
          text: "lorem ipsum dolor sit am liber tempor inc tempor",
        },
        {
          id: 3,
          icon: "fas fa-bomb",
          title: "energy",
          text: "lorem ipsum dolor sit am liber tempor inc tempor",
        },
        {
          id: 4,
          icon: "fas fa-mortar-pestle",
          title: "family recipe",
          text: "lorem ipsum dolor sit am liber tempor inc tempor",
        },
      ],
    };
  }

  render() {
    return (
      <section className="skills clearfix">
        <Skill
          key={this.state.skillsData.id}
          skillsData={this.state.skillsData}
        />
      </section>
    );
  }
}

export default SkillsList;
