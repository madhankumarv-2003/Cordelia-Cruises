import React from "react";

import CarouselSky from "./CarouselSky/CarouselSky";
import SkySection from "./SkySection/SkySection";
import SkyItinenary from './SkyItinenary/SkyItinenary';
import SuiteShow from "./SuiteShowcase/SuiteShow";
import AboutSky from "./AboutSky/AboutSky";
import ExploreSea from "./ExploreSea/ExlporeSea";
import SubscribeSection from "./SubscribeSection/SubscribeSection";
import ExploreShips from './ExploreShips/ExploreShips';

const CordeliaSky = () => {
  return (
    <div className="sky-wrapper">
      
      {/* Fixed Carousel */}
      <div className="carousel-fixed">
        <CarouselSky />
      </div>

      {/* Overlay Content */}
      <div className="overlay-bac">
        <SkySection />
        <SuiteShow />
        <AboutSky />
        <SkyItinenary />
        <ExploreSea/>
        <SubscribeSection/>
        <ExploreShips/>

      </div>
    </div>
  );
};

export default CordeliaSky;
