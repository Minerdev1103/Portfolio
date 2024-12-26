import React from 'react';
import HeroContent from '../components/HeroContent';
import Navbar from '../components/Navbar';
import Rocket from '../components/Rocket';


const HomePage = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth Scroll
    }
  };

  return (
    <div>
      <Navbar />
      <div id="home">
        <Rocket />
        <HeroContent scrollToAbout={() => scrollToSection("about")} /> {/* เลื่อนไปหน้า About */}
      </div>
      
    </div>
  );
};

export default HomePage;
