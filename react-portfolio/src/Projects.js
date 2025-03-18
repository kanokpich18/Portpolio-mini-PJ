import React, { useState } from "react";
import './Projects.css';
import projectImage1 from './images/1.png';
import projectImage2 from './images/2.png';
import projectImage3 from './images/3.png';
import projectImage4 from './images/4.png';
import projectImage5 from './images/5.png';
import projectImage6 from './images/6.png';
import projectImage7 from './images/7.png';
import projectImage8 from './images/8.png';
import projectImage9 from './images/9.png';
import projectImage10 from './images/10.png';
import projectImage11 from './images/11.png';

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    { 
      title: "Project Mobile Application for food Calorie Detection and Analysis through Image Recognition and Barcode Scanning", 
      description: "A mobile application for food calorie detection and analysis using image recognition and barcode scanning. Users can take photos or scan barcodes to instantly receive detailed calorie and nutritional information. Ideal for individuals aiming to manage their diet and improve their health efficiently",  
      images: [projectImage3, projectImage4, projectImage1, projectImage5, projectImage6, projectImage7,projectImage2,projectImage8,projectImage9,projectImage10,projectImage11]
    },
  ];

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projects[0].images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? projects[0].images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="projects-container" id="projects">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="image-container">
              {project.images && project.images.length > 0 ? (
                <img src={project.images[currentImageIndex]} alt={project.title} className="project-image" />
              ) : (
                <p>No images available</p>
              )}
              <div className="image-arrows">
                <button onClick={handlePrevImage} className="arrow-btn">←</button>
                <button onClick={handleNextImage} className="arrow-btn">→</button>
              </div>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
