import React from 'react';
import { useNavigate } from "react-router-dom"; // ใช้สำหรับเปลี่ยนเส้นทาง
import './Delivery.css'

function Delivery() {

  const navigate = useNavigate(); // Hook สำหรับนำทาง
  // ข้อมูลของรูปภาพ
  const images = [
    { id: 1, src: "/photo/delivery/01.jpg", alt: "Image 1" },
    { id: 2, src: "/photo/delivery/02.jpg", alt: "Image 2" },
    { id: 3, src: "/photo/delivery/03.jpg", alt: "Image 3" },
    { id: 4, src: "/photo/delivery/04.jpg", alt: "Image 4" },
    { id: 5, src: "/photo/delivery/05.jpg", alt: "Image 5" },
    { id: 6, src: "/photo/delivery/06.jpg", alt: "Image 6" },
    { id: 7, src: "/photo/delivery/07.jpg", alt: "Image 7" },
    { id: 8, src: "/photo/delivery/08.jpg", alt: "Image 8" },
    
    { id: 10, src: "/photo/delivery/010.jpg", alt: "Image 10" },
    { id: 11, src: "/photo/delivery/011.jpg", alt: "Image 11 "},
    { id: 12, src: "/photo/delivery/012.jpg", alt: "Image 12" },
    { id: 13, src: "/photo/delivery/013.jpg", alt: "Image 13" },
    { id: 14, src: "/photo/delivery/014.jpg", alt: "Image 14" },
    { id: 15, src: "/photo/delivery/015.jpg", alt: "Image 15" },
    { id: 16, src: "/photo/delivery/016.jpg", alt: "Image 16" },
    { id: 17, src: "/photo/delivery/017.jpg", alt: "Image 17" },
    { id: 18, src: "/photo/delivery/018.jpg", alt: "Image 18" },
    { id: 19, src: "/photo/delivery/019.jpg", alt: "Image 19" },
    { id: 20, src: "/photo/delivery/020.jpg", alt: "Image 20" },
    { id: 21, src: "/photo/delivery/021.jpg", alt: "Image 21" },
    { id: 22, src: "/photo/delivery/022.jpg", alt: "Image 22" },
    { id: 23, src: "/photo/delivery/023.jpg", alt: "Image 23" },
    { id: 24, src: "/photo/delivery/024.jpg", alt: "Image 24" },
  ];

  return (
    <div className="image-gallery-wrapper3">
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
      <h2 className="gallery-title3">Fast Delivery</h2>

      {/* หัวข้อ h3 */}
      <h3 className="gallery-subtitle3">ออกแบบ Application ด้วย Figma</h3>

      {/* แสดงภาพในคอลัมน์ */}
      <div className="image-gallery3">
        {images.map((image) => (
          <div className="image-item3" key={image.id}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Delivery;
