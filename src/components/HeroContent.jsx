import React from "react";
import "./HeroContent.css"; // Import the CSS file for styling
import Navbar from "./Navbar";

const HeroContent = () => {
  return (
    
    <div className="hero-content">
      <h2 className="highlight1">Hello, I am</h2>
      <h1>Sorayut  Thamsanong</h1>
      <h2>And i'm a <span className="highlight">Frontend Developer</span></h2>
      <p>I am someone who loves and is passionate about coding. 
        I enjoy solving problems that arise as a way to enhance 
        my knowledge for both personal growth and the benefit of my organization.</p>

        <div class="buttons">
        <button class="btn-hover color-7">Downlaod CV</button>
        </div>
    </div>
  );
};

export default HeroContent;
