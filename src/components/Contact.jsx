import React from "react";
import { FaPhone, FaEnvelope, FaGithub, FaFacebook, FaLine } from "react-icons/fa";
import "./contact.css"; // ใช้ CSS ที่จะสร้างต่อไปนี้

const contacts = [
  { icon: <FaPhone />, label: "เบอร์โทร", info: "096-1475075", link: "tel:0961475075", color: "#4CAF50" },
  { icon: <FaEnvelope />, label: "อีเมล", info: "minerdev1103@gmail.com", link: "mailto:minerdev1103@gmail.com", color: "#F44336" },
  { icon: <FaGithub />, label: "Github", info: "github.com/Minerdev1103", link: "https://github.com/Minerdev1103", color: "#333" },
  { icon: <FaFacebook />, label: "Facebook", info: "Sorayut  Thamsanong", link: "https://www.facebook.com/pporlove.nahird", color: "#1877F2" },
  { icon: <FaLine />, label: "Line", info: "0611172353", link: "https://line.me/ti/p/~0611172353", color: "#06C755" },
];

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">CONTACT</h2>
      <div className="contact-wrapper">
        {contacts.map((contact, index) => (
          <div className="contact-card" key={index}>
            <div className="card-inner">
              <div className="card-front" style={{ backgroundColor: contact.color }}>
                <div className="contact-img">{contact.icon}</div>
              </div>
              <div className="card-back">
                <h3>{contact.label}</h3>
                <p>{contact.info}</p>
                <a href={contact.link} target="_blank" rel="noopener noreferrer">Go to platform</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
