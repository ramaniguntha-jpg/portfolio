import React from "react";
import "./skills.css";

const skillsData = [
  { name: "HTML", level: "90%" },
  { name: "CSS", level: "85%" },
  { name: "JavaScript", level: "80%" },
  { name: "React", level: "75%" },
  { name: "Git & GitHub", level: "70%" }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>

      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div className="skill" key={index}>
            <p>{skill.name}</p>

            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;