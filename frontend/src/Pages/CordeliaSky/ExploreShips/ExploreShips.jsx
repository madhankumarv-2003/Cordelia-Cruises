import React from "react";
import "./ExploreShips.css";

import sunImg from "./Images/Sun_Aerial_Melbourne_comp_web.webp";
import empressImg from "./Images/empress-page-empress-other-fleet-web.jpg";

const ExploreShips = () => {
  return (
    <section className="explore-ships">
      <h2>Explore Our Other Ships</h2>
      <p>
        Embark on new horizons with our cruises, each offering something
        special.
      </p>

      <div className="ships-grid">
        {/* SUN */}
        <div className="ship-card">
          <img src={sunImg} alt="Sun Ship" />
          <div className="ship-overlay">
            <h3>Sun</h3>
          </div>
        </div>

        {/* EMPRESS */}
        <div className="ship-card">
          <img src={empressImg} alt="Empress Ship" />
          <div className="ship-overlay">
            <h3>Empress</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreShips;
