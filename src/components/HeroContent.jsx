import React from "react";
import "./HeroContent.css"; // Import the CSS file for styling
import Navbar from "./Navbar";

const HeroContent = () => {

  const handleDownload = () => {
    const files = [
      "/PortfolioEng.pdf",  // path ตรงไปยังไฟล์ใน public
      "/PortfolioThai.pdf"
    ];
  
    files.forEach((file) => {
      const link = document.createElement("a");
      link.href = file;
      link.setAttribute("download", file.split("/").pop()); // ตั้งชื่อไฟล์ให้ตรงกับต้นฉบับ
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };
  

  return (
    
    <div className="hero-content">
      <h2 className="highlight1">Hello, I am</h2>
      <h1>Sorayut  Thamsanong</h1>
      <h2>And i'm a <span className="highlight">Frontend Developer</span></h2>
      <p>I am someone who loves and is passionate about coding. 
        I enjoy solving problems that arise as a way to enhance 
        my knowledge for both personal growth and the benefit of my organization.</p>

        <div class="buttons">
        <button class="btn-hover color-7" onClick={handleDownload}>Downlaod CV</button>
        </div>
    </div>
  );
};

export default HeroContent;
