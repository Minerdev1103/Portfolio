import React from "react";
import { useNavigate } from "react-router-dom"; // ใช้เพื่อเปลี่ยนเส้นทาง
import "./Portfolio.css"; // นำเข้าไฟล์ CSS

const Portfolio = () => {
  const navigate = useNavigate(); // ใช้สำหรับเปลี่ยนเส้นทาง

  // ข้อมูลของการ์ดแต่ละใบ
  const cards = [
    { id: 1, title: "ออกแบบเเละพัฒนาเว็บไซต์", name: "Pi Securities", tag: "เว็บไซต์ หุ้น การเงิน", img: "/photo/pi.png", path: "/pi" },
    { id: 2, title: "ออกแบบเเละพัฒนาเว็บไซต์", name: "Klang Hospital", tag: "เว็บไซต์การจองห้องประชุม", img: "/photo/klang.png", path: "/klang" },
    { id: 3, title: "ออกแบบแอปพลิเคชั่น", name: "Fast Delivery", tag: "แอปพลิเคชั่น Food Delivery", img: "/photo/deli.png", path: "/delivery" },
    { id: 4, title: "ออกแบบเเอพพลิเคชั่น", name: "<H>Health", tag: "แอปพลิเคชั่นสุขภาพ", img: "/photo/health.png", path: "/health" },
  ];

  const images = [
    "/photo/cer/1.png",
    "/photo/cer/2.png",
    "/photo/cer/3.png",
    "/photo/cer/4.png",
    "/photo/cer/5.png",
  ];

  return (
    <section className="portfolio-section">
      <h2 className="section-title1">Portfolio</h2>
      <div className="card-container">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <div className="wrapper">
              <div className="card-image">
                <img src={card.img} alt={card.title} />
              </div>
              <div className="content">
                <p className="title price">{card.name}</p>
                <p className="title">{card.title}</p>
              </div>
              {/* ปุ่ม MORE ลิงก์ไปยัง path ของการ์ด */}
              <button className="card-btn" onClick={() => navigate(card.path)}>MORE</button>
            </div>
            <p className="tag">{card.tag}</p>
          </div>
        ))}
      </div>
      
      {/* Marquee เลื่อนภาพ */}
      <marquee className="image-marquee" scrollamount="5">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`marquee-image-${index}`} className="marquee-img" />
        ))}
      </marquee>
    </section>
  );
};

export default Portfolio;
