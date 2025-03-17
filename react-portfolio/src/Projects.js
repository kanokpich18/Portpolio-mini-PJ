import React from "react";
import './Projects.css';
import projectImage1 from './images/1.png';
import projectImage2 from './images/2.png';

const Projects = () => {
  const projects = [
    { 
      title: "Project Mobile Application for food Calorie Detection and Analysis through Image Recognition and Barcode Scanning", 
      description: " A mobile application for food calorie detection and analysis using image recognition and barcode scanning. Users can take photos or scan barcodes to instantly receive detailed calorie and nutritional information. Ideal for individuals aiming to manage their diet and improve their health efficiently ",  
      image: projectImage1 
    },
    { 
      title: "Project Mobile Application for food Calorie Detection and Analysis through Image Recognition and Barcode Scanning", 
      description: "Used Flutter to develop a mobile application. Built a website using Python, HTML, and JavaScript. Utilized Firebase as the backend for data storage and management ",  
      image: projectImage2 
    },
   
  ];

  return (
    <div className="projects-container" id="projects">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
             <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
