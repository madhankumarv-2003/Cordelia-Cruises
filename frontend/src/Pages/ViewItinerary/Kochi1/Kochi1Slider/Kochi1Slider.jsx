import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import img1 from "../Images/all-inclusive-beverage-highlight-mobile.webp";
import img2 from "../Images/disco-night-highlight-mobile.webp";
import img3 from "../Images/entertainment-highlight-mobile.webp";
import img4 from "../Images/video-arcade-highlight-mobile.webp";
import img5 from "../Images/rock-climb-highlight-mobile.webp";
import img6 from "../Images/shopping-highlight-mobile.webp";
import img7 from "../Images/swimming-pool-highlight-mobile.webp";

import "./Kochi1Slider.css";

const cruiseImages = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
  { id: 4, src: img4 },
  { id: 5, src: img5 },
  { id: 6, src: img6 },
  { id: 7, src: img7 },
];

const Kochi1Slider = () => {
  return (
    <div className="cruiseHighlight_container">
      <h2 className="cruiseHighlight_title">Your Cruise Highlight</h2>

      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={16}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="cruiseHighlight_swiper"
      >
        {cruiseImages.map((item) => (
          <SwiperSlide key={item.id} className="cruiseHighlight_slide">
            <div className="cruiseHighlight_card">
              <img src={item.src} alt="Cruise Highlight" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Kochi1Slider;
