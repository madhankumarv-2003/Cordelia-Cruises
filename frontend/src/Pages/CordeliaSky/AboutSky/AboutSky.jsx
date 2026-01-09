import React, { useState, useEffect } from "react";

import img1 from "./Images/Final_Empress_Sky_Gym_Web.webp";
import img2 from "./Images/Final_Sky_Dining_Venues_Web.webp";
import img3 from "./Images/Final_Sky_Main_Game_of_skills_Web.webp";
import img4 from "./Images/Sky-Cordelia+Academy.webp";
import img5 from "./Images/Sky_Main_Gaming_Arcade_Web.webp";

const slides = [
  { image: img4},
  { image: img1},
  { image: img5},
  { image: img2},
  { image: img3},
];

const AboutSky = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ===== HEADING ===== */}
      <div className="about-heading">
        <h2>Fun ahoy! Endless adventure starts here.</h2>
        <p>
          From poolside chills to showtime thrills, there’s something for
          everyone!
        </p>
      </div>

      {/* ===== SLIDER ===== */}
      <div className="slider-wrapper">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <img src={slide.image} alt={slide.title} />
              <div className="slide-overlay">
                <h3>{slide.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutSky;
