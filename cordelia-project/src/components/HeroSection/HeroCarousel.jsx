import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroCarousel.css";

const HeroCarousel = () => {
  return (
    <Carousel interval={4500} indicators={true} className="custom-indicators">
      <Carousel.Item>
        <div className="carousel-slide slide1"></div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-slide slide2"></div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-slide slide3"></div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-slide slide4"></div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-slide slide5"></div>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroCarousel;
