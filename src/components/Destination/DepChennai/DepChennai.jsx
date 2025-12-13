import React from "react";
import Slider from "react-slick";

import Img1 from "./Images/cordelia-singapore-destination-image-02_1.webp";
import Img2 from "./Images/cordelia-srilanka-destination-image.webp";
import Img3 from "./Images/cordelia-thailand-destination-image.webp";
import Img4 from "./Images/cordelia-malaysia-destination-image.webp";
import Img5 from "./Images/pondicherry-french-town-tour-04_1.webp";
import Img6 from "./Images/Vizag-VIZ03.webp";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "./DepChennai.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => (
  <div className="slick-custom-arrow slick-next" onClick={onClick}>
    <FiChevronRight size={18} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="slick-custom-arrow slick-prev" onClick={onClick}>
    <FiChevronLeft size={18} />
  </div>
);

export default function DepChennai() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const images = [
    {
      title: "Lakshadweep",
      description:
        "Pristine coral islands, lagoon beauty and a lot more, Lakshadweep is as serene as it gets.",
      button: true,
      image: Img1,
    },
    {
      title: "Goa",
      description:
        "Golden beaches, vibrant nightlife and stunning sunsets make Goa irresistible.",
      button: true,
      image: Img2,
    },
    {
      title: "Kochi",
      description:
        "A blend of nature, culture and history with serene backwaters & spice markets.",
      button: true,
      image: Img3,
    },
    {
      title: "Malaysia",
      description:
        "A cultural paradise with skyscrapers, rainforests and incredible cuisine.",
      button: true,
      image: Img4,
    },
    {
      title: "Singapore",
      description:
        "A futuristic city with gardens, skylines and world-famous attractions.",
      button: true,
      image: Img5,
    },
    {
      title: "Vizag",
      description:
        "Beautiful beaches, caves and hill views make Vizag a scenic coastal retreat.",
      button: true,
      image: Img6,
    },
  ];

  return (
    <div className="carousel-wrapper">
      <h5 className="sectionn-heading pb-3 ms-2">Departure from Chennai</h5>

      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} className="slide-card">
            <img src={item.image} alt={item.title} className="slick-img mb-4" />

            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.button && (
                <button className="explore-btn">Explore More</button>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
