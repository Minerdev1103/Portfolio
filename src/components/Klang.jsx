import React from 'react';
import { useNavigate } from "react-router-dom"; // ใช้สำหรับเปลี่ยนเส้นทาง
import './Klang.css'; // นำเข้าไฟล์ CSS สำหรับจัดการรูปภาพ

function Klang() {

  const navigate = useNavigate(); // Hook สำหรับนำทาง
  // ข้อมูลของรูปภาพ
  const images = [
    { id: 1, src: "../../public/photo/klang/1.png", alt: "Image 1" },
    { id: 2, src: "../../public/photo/klang/2.png", alt: "Image 2" },
    { id: 3, src: "../../public/photo/klang/3.png", alt: "Image 3" },
    { id: 4, src: "../../public/photo/klang/4.png", alt: "Image 4" },
    { id: 5, src: "../../public/photo/klang/5.png", alt: "Image 5" },
    { id: 6, src: "../../public/photo/klang/6.png", alt: "Image 6" },
    { id: 7, src: "../../public/photo/klang/7.png", alt: "Image 7" },
    { id: 8, src: "../../public/photo/klang/8.png", alt: "Image 8" },
    { id: 9, src: "../../public/photo/klang/9.png", alt: "Image 9" },
    { id: 10, src: "../../public/photo/klang/10.png", alt: "Image 10" },
  
  ];

  return (
    <div className="image-gallery-wrapper">
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
      <h2 className="gallery-title2">Klang Hospital</h2>

      {/* หัวข้อ h3 */}
      <h3 className="gallery-subtitle">ออกแบบเเละพัฒนาเว็บไซต์การจองห้องประชุมโรงพยาบาลกลาง</h3>

      {/* แสดงภาพในคอลัมน์ */}
      <div className="image-gallery">
        {images.map((image) => (
          <div className="image-item" key={image.id}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Klang;
