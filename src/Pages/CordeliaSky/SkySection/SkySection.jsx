import React from "react";
import "./SkySection.css";

import img1 from "./Images/sky-cruise-pickle-ball-popup-image.webp";
import img2 from "./images/sky-cagneys-web.webp";
import img3 from "./images/sky-sugarcane-bar-web.webp";
import img4 from "./images/new-cruise-game-arcade-pop-up-image-web.webp";

const highlights = [
  { count: "15+", title: "Activities", img: img1 },
  { count: "11", title: "Dining Venues", img: img2 },
  { count: "11", title: "Bars & Lounges", img: img3 },
  { count: "5+", title: "Entertainment", img: img4 },
];

const SkySection = ({ onOpenGallery }) => {
  return (
    <section className="sky-section">
      
      {/* ===== TEXT SECTION ===== */}
      <div className="sky-intro">
        <div className="sky-container">
          <div className="sky-left">
            <h2>
              Come aboard Sky:
              <br />
              A celebration at sea
            </h2>
          </div>

          <div className="sky-right">
            <p>
              Set sail on the Sky, where modern comfort meets vibrant
              entertainment. Enjoy exquisite dining, a relaxing spa, and a
              fitness centre.
            </p>
          </div>
        </div>
      </div>

      {/* ===== HIGHLIGHTS GRID ===== */}
      <div className="sky-highlights">
        <div className="highlight-grid">
          {highlights.map((item, index) => (
            <div
              className="highlight-card"
              key={index}
              onClick={onOpenGallery}   // 🔥 CLICK HERE
            >
              <img src={item.img} alt={item.title} />
              <div className="highlight-overlay">
                <h3>{item.count}</h3>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default SkySection;
