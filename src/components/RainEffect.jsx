import React, { useEffect, useRef } from "react";
import "./RainEffect.css";

const RainEffect = () => {
  const frontRowRef = useRef(null);
  const backRowRef = useRef(null);

  const makeItRain = () => {
    const frontRow = frontRowRef.current;
    const backRow = backRowRef.current;

    if (frontRow && backRow) {
      frontRow.innerHTML = "";
      backRow.innerHTML = "";

      let increment = 0;
      let drops = "";
      let backDrops = "";

      while (increment < 100) {
        const randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
        const randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
        increment += randoFiver;

        drops += `<div class="drop" style="left: ${increment}%; bottom: ${
          randoFiver + randoFiver - 1 + 100
        }%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;">
          <div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
          <div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
        </div>`;

        backDrops += `<div class="drop" style="right: ${increment}%; bottom: ${
          randoFiver + randoFiver - 1 + 100
        }%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;">
          <div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
          <div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
        </div>`;
      }

      frontRow.innerHTML = drops;
      backRow.innerHTML = backDrops;
    }
  };

  useEffect(() => {
    makeItRain();
  }, []); // ทำงานแค่ครั้งเดียวตอนโหลด

  return (
    <div className="rain-effect">
      <div ref={frontRowRef} className="rain front-row"></div>
      <div ref={backRowRef} className="rain back-row"></div>
    </div>
  );
};

export default RainEffect;
