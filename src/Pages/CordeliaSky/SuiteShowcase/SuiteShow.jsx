import React from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Img1 from "./Images/owners-suite-balcony-web-image-01.webp";
import Img2 from "./Images/owners-suite-balcony-web-image-01.webp";
import Img3 from "./Images/owners-suite-balcony-web-image-01.webp";

import "./SuiteShow.css";
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


export default function SuiteShow() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    // centerMode: true,
    // centerPadding: "180px",
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  const data = [
    {
      img: Img1,
      title: "Chairman's Suite",
      desc:
        "The Chairman’s Suite offers a private bedroom, spacious living and dining areas, and a luxurious bath with a whirlpool tub. Step out onto your large balcony with a private hot tub and soak in spectacular sea views — every moment here is designed to impress.",
      features: [
        "Private Balcony",
        "Sofa Seating",
        "Bathroom, Vanity Area",
        "Hairdryer",
        "Intercom",
        "Television",
      ],
    },
    {
      img: Img2,
      title: "Chairman's Suite",
      desc:
        "The Chairman’s Suite offers a private bedroom, spacious living and dining areas, and a luxurious bath with a whirlpool tub. Step out onto your large balcony with a private hot tub and soak in spectacular sea views — every moment here is designed to impress.",
      features: [
        "Private Balcony",
        "Sofa Seating",
        "Bathroom, Vanity Area",
        "Hairdryer",
        "Intercom",
        "Television",
      ],
    },
    {
      img: Img3,
      title: "Chairman's Suite",
      desc:
        "The Chairman’s Suite offers a private bedroom, spacious living and dining areas, and a luxurious bath with a whirlpool tub. Step out onto your large balcony with a private hot tub and soak in spectacular sea views — every moment here is designed to impress.",
      features: [
        "Private Balcony",
        "Sofa Seating",
        "Bathroom, Vanity Area",
        "Hairdryer",
        "Intercom",
        "Television",
      ],
    }
  ];

  return (
    <div className="suite-slider-wrapper">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="slide-wrap">
            <div className={`suite-card ${item.title ? "full" : "image-only"}`}>
              <div className="suite-image">
                <img src={item.img} alt="" />
              </div>

              {item.title && (
                <div className="suite-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>

                  <div className="features">
                    {item.features.map((f, i) => (
                      <span key={i} className="feature-pill">{f}</span>
                    ))}
                  </div>

                  <button className="view-btn">View All</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
