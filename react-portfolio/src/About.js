import React from "react";
import './About.css';
import myImage from './images/me.jpg';

const About = () => {
  return (
      <div>
        <div className="about-image ">
        <img
            src={myImage}  
            alt="me.jpg"
            className="profile-img"
          />
        </div>
        <div className="about-text">
          <h2 className="section-title">About Me</h2>
          <p className="about-container">
            EDUCATION<br/>
        Bachelor of electronic engineering technology King Mongkut's University of Technology North Bangkok<br/>
        2023- Present<br/>
        Chanthaburi Technical<br/>
        College(computer technology)<br/>
        2017 - 2023
          </p>
          <p className="bio">
            When I'm not coding, you can find me exploring new technologies,
            working on personal projects, or enjoying outdoor activities like
            hiking and photography.
          </p>
        </div>
      </div>
    
  );
};

export default About;