import React from 'react';
import HeroContent from '../components/HeroContent';
import Navbar from '../components/Navbar';
import Rocket from '../components/Rocket';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import RainEffect from '../components/RainEffect';
import Contact from '../components/Contact';

const HomePage = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth Scroll
    }
  };

  return (
    <div>
      <RainEffect />
      <Navbar />
      <div id="home">
        <Rocket />
        <HeroContent scrollToAbout={() => scrollToSection("about")} /> {/* เลื่อนไปหน้า About */}
      </div>
      <div id="about">
        <About />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
