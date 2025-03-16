import React from "react";
import './Projects.css';

const Projects = () => {
  const projects = [
    { title: "Project 1", description: "Description of Project 1", link: "#" },
    { title: "Project 2", description: "Description of Project 2", link: "#" },
  ];

  return (
    <div className="projects-container" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="btn">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
