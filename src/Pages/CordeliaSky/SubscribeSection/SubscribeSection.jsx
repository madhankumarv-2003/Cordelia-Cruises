import React from "react";
import "./SubscribeSection.css";

import leftImg from "./Images/Empress_Pool_Offer.webp";
import rightImg from "./Images/Empress_Bar+Offer.webp";

const SubscribeSection = () => {
  return (
    <section className="subscribe-section">
      {/* LEFT IMAGE */}
      <div className="subscribe-image left">
        <img src={leftImg} alt="Cruise Pool" />
      </div>

      {/* CENTER OVERLAY */}
      <div className="subscribe-content">
        <h2>
          To Get Cruise Deals
          <br />
          Alerts
        </h2>

        <p>
          Subscribe now and set sail on a
          <br />
          journey of endless adventure
          <br />
          with our exclusive cruise
          <br />
          newsletter
        </p>

        <div className="subscribe-form">
          <input type="email" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="subscribe-image right">
        <img src={rightImg} alt="Cruise Drinks" />
      </div>
    </section>
  );
};

export default SubscribeSection;
