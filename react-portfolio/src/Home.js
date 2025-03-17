import React from "react";
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="title">Welcome to My Portfolio</h1>
        <p className="description">
          I am a passionate developer with a focus on building clean and
          modern web applications.
        </p>
        <a href="#projects" className="btn">Explore Projects</a>
      </div>
    </div>
  );
};

export default Home;