import React from "react";
import './Home.css';
import myImage2 from "./images/2.gif";



const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
      <span class="gif-container">
          <img src={myImage2} />
      </span>
        <h1 className="title">Welcome to My Portfolio</h1>
  
      </div>
    </div>
  );
};

export default Home;

