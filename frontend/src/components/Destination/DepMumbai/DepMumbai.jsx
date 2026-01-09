import React from "react";

import Image1 from "./Images/lakshadweep-image.webp"
import Image2 from "./Images/goa-image.webp"
import Image3 from "./Images/kochi-image.webp"
import "./DepMumbai.css";

const destinations = [
  {
    title: "Lakshadweep",
    description:
      "Pristine coral islands, lagoon beauty and a lot more, Lakshadweep is as serene as it gets.",
    button: true,
    image: Image1,
  },
  {
    title: "Goa",
    description: "Pristine coral islands, lagoon beauty and a lot more, Lakshadweep is as serene as it gets.",
    button: true,
    image: Image2,
  },
  {
    title: "Kochi",
    description: "Pristine coral islands, lagoon beauty and a lot more, Lakshadweep is as serene as it gets.",
    button: true,
    image: Image3,
  }
];

const DepMumbai = () => {
  return (
    <div>
    <section className="mt-5 ms-4">
        <div className="mt-4">
          <div className="des-align ps-5 ms-5">
            <h2 className="des-title">Destinations</h2>
            <p className="des-description">
              Discover the breathtaking beauty of both Domestic and International destinations with Cordelia Cruises
            </p>
          </div>
        </div>
      </section>
    <div className="container px-3">
      <h5 className="sectionn-heading ms-0">Departure from Mumbai</h5>
      <div className="row mt-3">
        {destinations.map((item, index) => (
          <div key={index} className="col-md-4">
            <div className="destination-card">
              <img src={item.image} alt={item.title} className="destination-img" />
              <div className="overlay">
                <div className="card-content">
                  <h3 className="mb-3">{item.title}</h3>
                  {item.description && <p>{item.description}</p>}
                  {item.button && (
                    <button className="explore-btn">Explore More</button>
                  )}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default DepMumbai;
