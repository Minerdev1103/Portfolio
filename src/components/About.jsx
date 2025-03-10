import React from "react";
import Marquee from "react-fast-marquee";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiVite, SiFigma } from "react-icons/si";
import "./About.css"; // สไตล์เฉพาะสำหรับ About

const About = () => {
  const icons = [
    <FaHtml5 className="tech-icon text-orange-500" />,
    <FaCss3Alt className="tech-icon text-blue-500" />,
    <FaJs className="tech-icon text-yellow-500" />,
    <FaReact className="tech-icon text-cyan-500" />,
    <FaNodeJs className="tech-icon text-green-500" />,
    <FaGithub className="tech-icon text-gray-800" />,
    <SiVite className="tech-icon text-purple-500" />,
    <SiFigma className="tech-icon text-pink-500" />,
  ];

  return (
    <section id="about" className="about-section" style={{ backgroundColor: "#454545", height: "100vh", borderRadius: "50px", }}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img
              src="/photo/profile.jpg"
              alt="Your Name"
            />
          </div>
          <div className="about-text">
            <p>
              Hello! My name is <strong>Sorayut Thamsanong</strong>. I’m a
              passionate Frontend Developer who loves building beautiful and
              functional web experiences. I enjoy solving complex problems and
              continuously learning new technologies to grow both personally
              and professionally.
            </p>
            <p>
              When I’m not coding, I enjoy spending time exploring new places,
              learning about design trends, and contributing to open-source
              projects.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>

         

            {/* Marquee แถวล่างเลื่อนไปทางซ้าย */}
            <Marquee className="marquee" speed={50} gradient={false} direction="right">
              {icons.map((icon, index) => (
                <div key={index} className="marquee-item">{icon}</div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
