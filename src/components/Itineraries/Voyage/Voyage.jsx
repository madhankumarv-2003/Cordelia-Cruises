import React from "react";

import Image1 from "./images/empress-cruise-rock-climb-popup-image.webp";
import Image2 from "./images/Food-beverages-image.webp";
import Image3 from "./images/entertainment-image.webp";

import "./Voyage.css";

const destinations = [
  {
    title: "Entertainment",
    shows: "15+",
    image: Image3,
  },
  {
    title: "Dining Venues",
    shows: "10+",
    image: Image2,
  },
  {
    title: "Activities",
    shows: "18+",
    image: Image1,
  }
];

const Voyage = () => {
  return (
    <div className="container mt-5">
      <section>
        <div className="row me-5">
          <div className="align col-12 text-start">
            <h2 className="voy-title">A Voyage Beyond An Ordinary Cruise</h2>
            <p className="voy-description">
              Indulge in lavish accommodations, exciting entertainment, exquisite dining, and much more.
            </p>
          </div>
        </div>
      </section>

      <div className="row mt-3">
        {destinations.map((item, index) => (
          <div key={index} className="col-md-4">
            <div className="destinationn-card">
              <img src={item.image} alt={item.title} className="destinationn-img" />

              {/* Correct overlay name */}
              <div className="overlay-voy"></div>

              <div className="card-content" style={{ fontFamily: "Playfair Display, serif"}}>
                <h1>{item.shows}</h1>
                <h3>{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Voyage;
