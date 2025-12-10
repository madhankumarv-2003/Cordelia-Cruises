import React from "react";

import image1 from "./images/fresh-filtered-air.svg"
import image2 from "./images/completely-sanitized.svg"
import image3 from "./images/elevated-protocols.svg"

import "./SafetyProtocols.css";

const SafetyProtocols = () => {
  const protocols = [
    {
      icon: image1, // Replace with separate icons if needed
      title: "100% Fresh and Filtered Air",
    },
    {
      icon: image2,
      title: "Completely Sanitized",
    },
    {
      icon: image3,
      title: "Elevated Health Protocols",
    },
  ];

  return (
    <div className="safety-container">
      <h2 className="safety-title me-5">Safety Protocols</h2>
      <div className="safety-items">
        {protocols.map((item, index) => (
          <div className="safety-card" key={index}>
            <img src={item.icon} alt="icon" className="safety-icon" />
            <span className="safety-text">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SafetyProtocols;
