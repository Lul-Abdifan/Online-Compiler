import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import "./DarkModeCom.css"; // Import your CSS file with the styles
import Navbar from "./Navbar";
import Edit from "./Edit";

export const DarkModeCom = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);

    // Toggle the class directly on the document.body element
    document.body.classList.toggle("dark-mode", isDarkMode);
    document.body.classList.toggle("light-mode", !isDarkMode);
  };

  return (
    <div>
      <DarkModeToggle
        onChange={toggleDarkMode}
        checked={isDarkMode}
        size={80}
      />
      
    </div>
  );
};
