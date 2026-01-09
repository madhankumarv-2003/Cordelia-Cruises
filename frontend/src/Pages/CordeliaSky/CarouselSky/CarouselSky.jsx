import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import img from "./images/ncl_Sky_Aerial_Miami_Website1.webp"
import img1 from "./images/ncl_Sky_Aerial_Miami_Website2.webp"

import './CarouselSky.css';

const CarouselSky = () => {
  return (
    <Carousel interval={4500} indicators={false} className="custom-indicators">
      <Carousel.Item>
         <img src={img} className="carousel-slidee"></img>
      </Carousel.Item>

      <Carousel.Item>
        <img src={img1} className="carousel-slidee"></img>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSky;
