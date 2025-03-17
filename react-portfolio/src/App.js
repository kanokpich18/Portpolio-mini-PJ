import React, { useState } from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const App = () => {
  const [page, setPage] = useState("home");

  const pages = {
    about: <About />,
    projects: <Projects />,
    contact: <Contact />,
  };

  return (
    <div>
      <nav className="navbar">
        <button 
          onClick={() => setPage("about")}
          className={`navbar-button ${page === "about" ? "selected" : ""}`}
        >
          About
        </button>
        <button 
          onClick={() => setPage("projects")}
          className={`navbar-button ${page === "projects" ? "selected" : ""}`}
        >
          Projects
        </button>
        <button 
          onClick={() => setPage("contact")}
          className={`navbar-button ${page === "contact" ? "selected" : ""}`}
        >
          Contact
        </button>
      </nav>

      <div className="">
        {pages[page] || <About />}
      </div>
    </div>
  );
};

export default App;
