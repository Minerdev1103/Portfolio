import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React, { useEffect } from "react";

const Rocket = () => {
  useEffect(() => {
    let scene, camera, renderer, rocket, flameParticles;

    const createScene = () => {
      const canvasContainer = document.getElementById("rocketCanvas");
      if (!canvasContainer) {
        console.error("Canvas container not found!");
        return;
      }

      const WIDTH = window.innerWidth;
      const HEIGHT = window.innerHeight;

      scene = new THREE.Scene();
      scene.fog = new THREE.Fog(0x5d0361, 10, 1500);

      camera = new THREE.PerspectiveCamera(60, WIDTH / HEIGHT, 1, 10000);
      camera.position.set(0, -10, 500);

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(WIDTH, HEIGHT);
      renderer.shadowMap.enabled = true;

      canvasContainer.appendChild(renderer.domElement);

      window.addEventListener("resize", () => {
        const WIDTH = window.innerWidth;
        const HEIGHT = window.innerHeight;
        renderer.setSize(WIDTH, HEIGHT);
        camera.aspect = WIDTH / HEIGHT;
        camera.updateProjectionMatrix();
      });

      const loader = new GLTFLoader();
      loader.load(
        "/src/assets/rocket.gltf",
        (gltf) => {
          rocket = gltf.scene;
          rocket.position.y = 50;
          scene.add(rocket);

          // สร้างเอฟเฟกต์ไอพ่นหลังจากโหลดจรวดเสร็จ
          createFlameEffect();
        },
        undefined,
        (error) => {
          console.error("Error loading model:", error);
        }
      );
    };

    const createLights = () => {
      const ambientLight = new THREE.HemisphereLight(0x404040, 0x404040, 1);
      const directionalLight = new THREE.DirectionalLight(0xdfebff, 1);
      directionalLight.position.set(-300, 0, 600);

      const pointLight = new THREE.PointLight(0xa11148, 2, 1000, 2);
      pointLight.position.set(200, -100, 50);

      scene.add(ambientLight, directionalLight, pointLight);
    };

    const createFlameEffect = () => {
        const particleCount = 1000; // จำนวนอนุภาค
        const particleGeometry = new THREE.BufferGeometry();
        const positions = [];
        const colors = [];
        const opacities = [];
      
        for (let i = 0; i < particleCount; i++) {
          // สร้างตำแหน่งอนุภาคแบบกรวย
          const radius = Math.random() * 20; // ระยะจากจุดศูนย์กลาง
          const angle = Math.random() * Math.PI * 2; // มุมกระจายในแนวนอน
          const y = -Math.random() * 50; // กระจายลงตามแกน Y
      
          const x = radius * Math.cos(angle); // คำนวณตำแหน่ง X
          const z = radius * Math.sin(angle); // คำนวณตำแหน่ง Z
      
          positions.push(x, y, z);
      
          colors.push(1.0, 0.5 + Math.random() * 0.5, 0); // สีเหลืองถึงส้ม
          opacities.push(1); // ความโปร่งใสเริ่มต้น
        }
      
        particleGeometry.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(positions, 3)
        );
        particleGeometry.setAttribute(
          "color",
          new THREE.Float32BufferAttribute(colors, 3)
        );
        particleGeometry.setAttribute(
          "opacity",
          new THREE.Float32BufferAttribute(opacities, 1)
        );
      
        const particleMaterial = new THREE.PointsMaterial({
          size: 5,
          vertexColors: true,
          blending: THREE.AdditiveBlending,
          transparent: true,
        });
      
        flameParticles = new THREE.Points(particleGeometry, particleMaterial);
        flameParticles.position.set(0, -50, 0); // ตำแหน่งเริ่มต้นของไอพ่น
        scene.add(flameParticles);
      };
      
      const animateFlameEffect = () => {
        if (!flameParticles) return;
      
        const positions = flameParticles.geometry.attributes.position.array;
        const opacities = flameParticles.geometry.attributes.opacity.array;
      
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] -= Math.random() * 9.5; // เคลื่อนที่ลงในแกน Y
          positions[i] *= 1.06; // กระจายออกในแกน X
          positions[i + 2] *= 3.06; // กระจายออกในแกน Z
          opacities[i / 3] -= 0.02; // ลดความโปร่งใส
      
          // รีเซ็ตอนุภาคเมื่อหลุดจากขอบเขตหรือหายไป
          if (positions[i + 1] < -60 || opacities[i / 3] <= 0) {
            const radius = Math.random() * 20;
            const angle = Math.random() * Math.PI * 2;
            const y = 0;
      
            positions[i] = radius * Math.cos(angle);
            positions[i + 1] = y;
            positions[i + 2] = radius * Math.sin(angle);
            opacities[i / 3] = 1;
          }
        }
      
        flameParticles.geometry.attributes.position.needsUpdate = true;
        flameParticles.geometry.attributes.opacity.needsUpdate = true;
      };
      
      const animateRocket = () => {
        const targetRocketRotation = Math.PI * 2;
        const animationDuration = 2000;
      
        const loop = () => {
          const t = (Date.now() % animationDuration) / animationDuration;
      
          renderer.render(scene, camera);
      
          if (rocket) {
            rocket.rotation.y = t * targetRocketRotation; // หมุนจรวด
            rocket.position.y = 50 + Math.sin(t * Math.PI * 2) * 10; // ขยับขึ้นลง
          }
      
          animateFlameEffect();
      
          requestAnimationFrame(loop);
        };
      

      loop();
    };

    const canvasExists = document.getElementById("rocketCanvas");
    if (canvasExists) {
      createScene();
      createLights();
      animateRocket();
    }

    return () => {
      const canvas = document.querySelector("#rocketCanvas canvas");
      if (canvas) canvas.remove();
    };
  }, []);

  return (
    <div
      id="rocketCanvas"
      style={{
        position: "absolute",
        top: "70%",
        left: "27%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        height: "100vh",
      }}
    ></div>
  );
};

export default Rocket;
