import React from "react";

import CarouselSky from "./CarouselSky/CarouselSky";
import SkySection from "./SkySection/SkySection";
import Itinenary from "../../components/Itineraries/Itinenary/Itinenary";

const CordeliaSky = () => {
  return (
    <div className="sky-wrapper">
      {/* Fixed Carousel */}
      <div className="carousel-fixed">
        <CarouselSky />
      </div>
      {/* Itinerary Overlay */}
      <div className="itinerary-overlay">
        <SkySection/>
        <Itinenary/>
        
      </div>
    </div>
  );
};

export default CordeliaSky;
