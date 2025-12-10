import React from "react";
import Slider from "react-slick";

import Img1 from "./images/shutterstock_749994940-min.jpg";
import Img2 from "./images/mumabi-kochi-itinerary-desktop-image-01.webp";
import Img3 from "./images/mumabi-kochi-laksh-mumbai-itinerary-desktop-image-01.webp";
import Img4 from "./images/kochi-laksh-mumbai-itinerary-desktop-image-01.webp";
import Img5 from "./images/shutterstock_749994940-min.jpg";

import img from "./images/element-03.webp"

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Itinenary.css";

const NextArrow = ({ onClick }) => (
  <div className="slick-custom-arrow slick-next" onClick={onClick}>
    <FiChevronRight size={15} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="slick-custom-arrow slick-prev" onClick={onClick}>
    <FiChevronLeft size={15} />
  </div>
);

export default function Itinenary() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 500, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  const images = [
      {
        img: Img1,
        date: "NOV 22, 2025 - NOV 24, 2025",
        title: "Mumbai - At Sea - Mumbai (2N/3D)",
        color: "#a428a6"
      },
      {
        img: Img2,
        date: "NOV 24, 2025 - NOV 26, 2025",
        title: "Mumbai - At Sea - Kochi (2N/3D)",
        color: "#db3a28"
      },
      {
        img: Img3,
        date: "NOV 24, 2025 - NOV 29, 2025",
        title: "Mumbai - At Sea - Kochi - Lakshadweep - At Sea - Mumbai (5N/6D)",
        color: "#c737c1"
      },
      {
        img: Img4,
        date: "NOV 24, 2025 - NOV 29, 2025",
        title: "Mumbai - At Sea - Kochi - Lakshadweep - At Sea - Mumbai (5N/6D)",
        color: "#c737c1"
      },
      {
        img: Img5,
        date: "NOV 24, 2025 - NOV 29, 2025",
        title: "Mumbai - At Sea - Kochi - Lakshadweep - At Sea - Mumbai (5N/6D)",
        color: "#c737c1"
      }
    ];

  return (
    <div className="itinerary-container mt-5">
      
      {/* HEADER SECTION */}
      <div className="itinerary-header">
        <div className="itinerary-left ms-2">
          <h2 className="itinerary-title">Explore Itineraries</h2>
          <p className="itinerary-filter">Filter by origin, destination →</p>
        </div>

        <button className="view-all-btn me-2">View All</button>
      </div>

      {/* SLIDER SECTION */}
      <div className="carousel-wrapperr col-md-12">
        <Slider {...settings}>
          {images.map((item, index) => (
            <div key={index} className="slide-cardd gap-4 mb-4">
              <img src={item.img} alt={item.title} className="slick-imgg" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="overlay-imgg">
        <img src={img} style={{width:"280px",height:"250px"}}></img>
      </div>
    </div>
  );
}
