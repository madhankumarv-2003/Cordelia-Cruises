import React from "react";
import Slider from "react-slick";

import Img1 from "./images/Goa_Find_a_cruise_Web.webp";
import Img2 from "./images/Lak_Find_a_cruise_Web.webp";
import Img3 from "./images/shutterstock_1289275390-min.jpg";
import Img4 from "./images/kochi-laksh-mumbai-itinerary-desktop-image-01.webp";
import Img5 from "./images/shutterstock_749994940-min.jpg";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      { breakpoint: 992, settings: { slidesToShow: 1 } },
      { breakpoint: 500, settings: { slidesToShow: 1 } }
    ]
  };

  const images = [
    {
      img: Img1,
      date: "DEC 15, 2025 - DEC 17, 2025",
      title: "Mumbai - At Sea - Goa (2N/3D)"
    },
    {
      img: Img2,
      date: "DEC 18, 2025 - DEC 21, 2025",
      title: "Mumbai - At Sea - Goa - Lakshadweep - At Sea - Mumbai(5N/6D)"
    },
    {
      img: Img3,
      date: "DEC 22, 2025 - DEC 27, 2025",
      title: "Mumbai - At Sea - Goa (2N/3D)"
    },
    {
      img: Img4,
      date: "DEC 28, 2025 - JAN 02, 2026",
      title: "Kochi - Lakshadweep - Mumbai (5N/6D)"
    },
    {
      img: Img5,
      date: "JAN 05, 2026 - JAN 07, 2026",
      title: "Mumbai - At Sea - Goa (2N/3D)"
    }
  ];

  return (
    <div className="itinerary-container mt-5">

      {/* HEADER */}
      <div className="itinerary-header">
        <div>
          <h2 className="itinerary-title">Explore 2026 Itineraries</h2>
        </div>
        <button className="view-all-btn">View All</button>
      </div>

      {/* SLIDER */}
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} className="slide-cardd mb-4">
            <div className="image-wrapper">
              <img src={item.img} className="slick-imgg" alt={item.title} />

              {/* OVERLAY CONTENT */}
              <div className="card-overlay">
                <span className="date-badge">{item.date}</span>
                <h3 className="card-title">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>

    </div>
  );
}
