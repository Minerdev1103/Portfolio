import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">&lt;/&gt;
      </div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <a href="#home" className="menu-item">Home</a>
        <a href="#about" className="menu-item">About</a>
        <a href="#portfolio" className="menu-item">Portfolio</a>
        <a href="#contact" className="menu-item">Contact</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "rotate" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
