import React from "react";
import '../components/projects.css';

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>

      <div className="project-card">
        <h3>Portfolio Website</h3>
        <p>Built using React and CSS</p>
      </div>
        <div className="project-card">
        <h3>time table</h3>
        <p>Built using HTML and CSS</p>
      </div>

      <div className="project-card">
        <h3>Calculator App</h3>
        <p>Built using JavaScript</p>

      </div>
    </div>
  );
}

export default Projects;