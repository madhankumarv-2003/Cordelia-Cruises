import React from "react";

import CarouselSky from "../CordeliaSky/CarouselSky/CarouselSky";
import SkySection from "../CordeliaSky/SkySection/SkySection";
import SkyItinenary from '../CordeliaSky/SkyItinenary/SkyItinenary';
import SuiteShow from "../CordeliaSky/SuiteShowcase/SuiteShow";
import ExploreSea from "../CordeliaSky/ExploreSea/ExlporeSea";
import SubscribeSection from "../CordeliaSky/SubscribeSection/SubscribeSection";
import ExploreShips from '../CordeliaSky/ExploreShips/ExploreShips';
import PhotoGallery from "../CordeliaSky/PhotoGallery/PhotoGallery";

const CordeliaEmpress = () => {
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
        <SkyItinenary />
        <ExploreSea/>
        <PhotoGallery/>
        <SubscribeSection/>
        <ExploreShips/>

      </div>
    </div>
  );
};

export default CordeliaEmpress;
