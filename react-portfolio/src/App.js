import React, { useState } from "react";


// Import ไฟล์จาก src/ โดยตรง
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const App = () => {
  const [page, setPage] = useState("home");

  // ใช้ Object Mapping แทน switch-case
  const pages = {
    home: <Home />,
    about: <About />,
    projects: <Projects />,
    contact: <Contact />,
  };

  return (
    <div>
      {/* Navbar แบบใช้ State */}
      <nav className="p-4 shadow-md flex space-x-4">
        <button onClick={() => setPage("home")} className="text-blue-500 hover:underline">Home</button>
        <button onClick={() => setPage("about")} className="text-blue-500 hover:underline">About</button>
        <button onClick={() => setPage("projects")} className="text-blue-500 hover:underline">Projects</button>
        <button onClick={() => setPage("contact")} className="text-blue-500 hover:underline">Contact</button>
      </nav>

      {/* Render หน้าตาม state */}
      <div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6">
        {pages[page] || <Home />}
      </div>
    </div>
  );
};

export default App;
