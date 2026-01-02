import React from "react";

import vid from './Images/destination-bg-video-web.mp4'
import "./ExploreSea.css";

const ExploreSea = () => {
  return (
    <section className="hero">
      {/* Background */}
      <video
          className="hero-bg"
          src={vid}
          autoPlay
          muted
          loop
          playsInline
      />

      {/* Dark Overlay */}
      <div className="hero-overlay">
        {/* INNER BORDER BOX */}
        <div className="hero-inner-border">
          <h1>Where will the sea take you?</h1>
          <p>Explore the hottest destinations to cruise to!</p>

          <button className="hero-btn">Explore More</button>
        </div>
      </div>
    </section>
  );
};

export default ExploreSea;
