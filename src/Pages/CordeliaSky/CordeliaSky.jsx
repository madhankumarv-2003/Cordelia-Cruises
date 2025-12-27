import React, { useState } from "react";

import CarouselSky from "./CarouselSky/CarouselSky";
import SkySection from "./SkySection/SkySection";
import SkyItinenary from './SkyItinenary/SkyItinenary'
import GalleryModel from "../GalleryModel/GalleryModel";

const CordeliaSky = () => {
  const [openGallery, setOpenGallery] = useState(false);

  return (
    <div className="sky-wrapper">
      
      {/* Fixed Carousel */}
      <div className="carousel-fixed">
        <CarouselSky />
      </div>

      {/* Overlay Content */}
      <div className="overlay-bac">
        <SkySection onOpenGallery={() => setOpenGallery(true)} />
        <SkyItinenary />
      </div>

      {openGallery && (
        <GalleryModel onClose={() => setOpenGallery(false)} />
      )}

    </div>
  );
};

export default CordeliaSky;
