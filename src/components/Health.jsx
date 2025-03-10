import React from 'react';
import { useNavigate } from "react-router-dom"; // ใช้สำหรับเปลี่ยนเส้นทาง
import './Health.css'; // นำเข้าไฟล์ CSS สำหรับจัดการรูปภาพ

function Health() {

  const navigate = useNavigate(); // Hook สำหรับนำทาง
  // ข้อมูลของรูปภาพ
  const images = [
    { id: 1, src: "/public/photo/health/1.png", alt: "Image 1" },
    { id: 2, src: "/public/photo/health/2.png", alt: "Image 2" },
    { id: 3, src: "/public/photo/health/3.png", alt: "Image 3" },
    { id: 4, src: "/public/photo/health/4.png", alt: "Image 4" },
    { id: 5, src: "/public/photo/health/5.png", alt: "Image 5" },
    
    { id: 7, src: "/public/photo/health/7.png", alt: "Image 7" },
    { id: 8, src: "/public/photo/health/8.png", alt: "Image 8" },
    { id: 9, src: "/public/photo/health/9.png", alt: "Image 9" },
    { id: 10, src: "/public/photo/health/10.png", alt: "Image 10" },
    { id: 11, src: "/public/photo/health/11.png", alt: "Image 11 "},
    { id: 12, src: "/public/photo/health/12.png", alt: "Image 12" },
    { id: 13, src: "/public/photo/health/13.png", alt: "Image 13" },
    { id: 14, src: "/public/photo/health/14.png", alt: "Image 14" },
    { id: 15, src: "/public/photo/health/15.png", alt: "Image 15" },
    { id: 16, src: "/public/photo/health/16.png", alt: "Image 16" },
  ];

  return (
    <div className="image-gallery-wrapper4">
      <div className="styled-wrapper">
        <button className="button" onClick={() => navigate(-1)}>
          <div className="button-box">
            <span className="button-elem">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="arrow-icon">
                <path fill="#FFD700" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
              </svg>
            </span>
            <span className="button-elem">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="arrow-icon">
                <path fill="white" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
              </svg>
            </span>
          </div>
        </button>
      </div>
      {/* หัวข้อ h2 */}
      <h2 className="gallery-title4">Health</h2>

      {/* หัวข้อ h3 */}
      <h3 className="gallery-subtitle4">ออกแบบ Application เพื่อสุขภาพ</h3>

      {/* แสดงภาพในคอลัมน์ */}
      <div className="image-gallery4">
        {images.map((image) => (
          <div className="image-item4" key={image.id}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Health;
