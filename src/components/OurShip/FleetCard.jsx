import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "./images/element-02.webp"

import sky1 from "./images/OurCruise_Sky1.webp";
import sky2 from "./images/OurCruise_Sky2.webp";
import sky3 from "./images/OurCruise_Sky3.webp";
import sky4 from "./images/OurCruise_Sky4.webp";

import sun1 from "./images/Final_OurCruise_Sun1.webp";
import sun2 from "./images/Final_OurCruise_Sun2.webp";
import sun3 from "./images/Final_OurCruise_Sun3.webp";
import sun4 from "./images/Final_OurCruise_Sun4.webp";

import emp1 from "./images/our-fleet-empress-cruise-mobile-01.webp";
import emp2 from "./images/our-fleet-empress-cruise-mobile-02.webp";
import emp3 from "./images/our-fleet-empress-cruise-mobile-03.webp";
import emp4 from "./images/our-fleet-empress-cruise-mobile-04.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "./FleetCard.css";

  const cruiseData = [
  {
    title: "CORDELIA SKY",
    description:
      "Welcome aboard Sky, where energy and elegance combine. From vibrant entertainment to stunning open decks, adventure and indulgence await at every turn..",
    image: [sky1, sky2, sky3, sky4],
  },

  {
    title: "CORDELIA SUN",
    description:
      "Welcome aboard Sun, where relaxation meets excitement. Enjoy vibrant entertainment, stunning ocean views, and delicious cuisine, all while soaking in the sun and embracing adventure at every turn..",
    image: [sun1, sun2, sun3, sun4],
  },

  {
    title: "CORDELIA EMPRESS",
    description:
      "Step aboard Empress, where elegance meets comfort. Enjoy breathtaking sky decks, spacious lounges, and world-class hospitality, making every moment unforgettable.",
    image: [emp1, emp2, emp3, emp4],
  },
];


const FleetCard = () => {
  return (
    <div className="col-md-12 cruise-container">
      {cruiseData.map((item, index) => (
        <div key={index} className="cruise-card">
          <div>
            <Carousel
              controls
              indicators
              className="fleet-carousel"
              prevIcon={<FiChevronLeft size={28} className="chevron-icon" />}
              nextIcon={<FiChevronRight size={28} className="chevron-icon" />}
            >
              {item.image.map((img, i) => (
                <Carousel.Item key={i}>
                  <img
                    src={img}
                    alt={`${item.title} ${i + 1}`}
                    className="cruise-image"
                  />
                </Carousel.Item>
              ))}
            </Carousel>

          </div>

          {/* ---- CARD CONTENT ---- */}
          <div className="cruise-content">
            <h2 className="cruise-title">{item.title}</h2>
            <p className="cruise-desc">{item.description}</p>
            <button className="explore-btn">Explore More</button>
          </div>

        </div>
      ))}
      <div className="overlay-img mt-5">
        <img src={img} style={{width:"280px",height:"280px"}}></img>
      </div>
      <section className="des-section container dep-container ms-2">
        <div className="row">
          <div className="col-10 fleet">
            <h2 className="des-title">Destinations</h2>
            <p className="des-description">
              Discover the breathtaking beauty of both Domestic and International destinations with Cordelia Cruises
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FleetCard;
