import React from "react";
import "./About.css";
import myImage from "./images/me.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <div className="about-image">
          <img src={myImage} alt="Profile" className="profile-img" />
        </div>

        <div className="about-text">
          <h1 className="name">KANOKPICH KOSAMET</h1>
          <h2 className="title">Electronic Engineering Student</h2>
          <p className="education">
            🎓 <strong>Bachelor of Electronic Engineering Technology</strong>  
            King Mongkut's University of Technology North Bangkok <br/>(2023 - Present)
          </p>
          <p className="education">
            🏫 <strong>Chanthaburi Technical College</strong> (Computer Technology) <br/>(2017 - 2023)
          </p>
        </div>
      </div>

      <div className="skill-card-container">
        <h2 className="title" style={{textAlign:'center'}}>Skill</h2>
        <div className="skill-container">
          <div className="skill-card skill-javascript">JavaScript</div>
          <div className="skill-card skill-react">React.js</div>
          <div className="skill-card skill-python">Python Basic</div>
          <div className="skill-card skill-html">HTML</div>
          <div className="skill-card skill-css">CSS</div>
          <div className="skill-card skill-mysql">MySQL</div>
        </div>
      </div>

      <div className="objective-card-container">
        <h2 className="title">Objective</h2>
        <div className="objective-card">
          <p>
          Study and seek opportunities to develop skills in both Frontend and Backend web development to use basic knowledge in web development. Want to learn new things and gain experience working as a team to produce qualitywork.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
