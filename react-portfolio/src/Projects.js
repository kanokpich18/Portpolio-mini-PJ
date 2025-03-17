import React, { useState, useEffect } from "react";
import './Projects.css';
import projectImage1 from './images/1.png';
import projectImage2 from './images/2.png';
import projectImage3 from './images/3.png';
import projectImage4 from './images/4.png';
import projectImage5 from './images/5.png';
import projectImage6 from './images/6.png';
import projectImage7 from './images/7.png';

const Projects = () => {
  // สร้าง state สำหรับการติดตามตำแหน่งของภาพสำหรับแต่ละโปรเจกต์
  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    new Array(2).fill(0) // ปรับให้เป็นจำนวนโปรเจกต์ที่มีใน array (2 ในที่นี้)
  );

  const projects = [
    { 
      title: "Project Mobile Application for food Calorie Detection and Analysis through Image Recognition and Barcode Scanning", 
      description: " A mobile application for food calorie detection and analysis using image recognition and barcode scanning. Users can take photos or scan barcodes to instantly receive detailed calorie and nutritional information. Ideal for individuals aiming to manage their diet and improve their health efficiently ",  
      images: [projectImage3, projectImage4, projectImage1,projectImage5,projectImage6,projectImage7] 
    },
    { 
      title: "Project Mobile Application for food Calorie Detection and Analysis through Image Recognition and Barcode Scanning", 
      description: "Used Flutter to develop a mobile application. Built a website using Python, HTML, and JavaScript. Utilized Firebase as the backend for data storage and management ",  
      images: [projectImage2] 
    },
  ];

  // เลื่อนภาพโดยอัตโนมัติ
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndexes((prevIndexes) => 
        prevIndexes.map((index, i) => (index + 1) % projects[i].images.length)
      );
    }, 3000); // 3000ms = 3 วินาที

    return () => clearInterval(interval); // ลบ interval เมื่อคอมโพเนนต์ unmount
  }, []);

  return (
    <div className="projects-container" id="projects">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="image-container">
              <img
                src={project.images[currentImageIndexes[index]]}
                alt={project.title}
                className="project-image"
              />
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
