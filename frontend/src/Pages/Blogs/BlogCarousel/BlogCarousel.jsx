import React, { useState, useEffect } from "react";

import img1 from "./images/Blog_Banner_Image_Desktop_1920x500_4103e885c3.jpg";
import img2 from "./images/1920x500_ddd0421129.jpg";
import img3 from "./images/Blog_Banner_Image_Desktop_1920x500_52763f7387.jpg";
import img4 from "./images/Blog_Banner_Image_Desktop_1920x500_d6770b2483.jpg";
import img5 from "./images/Blog_Banner_Image_Desktop_1920x500_fa269caf6c.jpg";

import "./BlogCarousel.css";

const slides = [
  {
    title: "Why Christmas Cruises Are the New Family Tradition",
    author: "Team Marketing",
    date: "November 12, 2025",
    desc:
      "Celebrate Christmas at sea with Cordelia Cruises. Enjoy family fun, festive dining, and unforgettable destinations.",
    image: img1,
  },
  {
    title: "Cordelia Sky: The New Chapter of Luxury Cruising in India",
    author: "Team Marketing",
    date: "November 12, 2025",
    desc:
      "Celebrate Christmas at sea with Cordelia Cruises. Enjoy family fun, festive dining, and unforgettable destinations.",
    image: img2,
  },
  {
    title: "Why Christmas Cruises Are the New Family Tradition",
    author: "Team Marketing",
    date: "November 12, 2025",
    desc:
      "Celebrate Christmas at sea with Cordelia Cruises. Enjoy family fun, festive dining, and unforgettable destinations.",
    image: img3,
  },
  {
    title: "Why Christmas Cruises Are the New Family Tradition",
    author: "Team Marketing",
    date: "November 12, 2025",
    desc:
      "Celebrate Christmas at sea with Cordelia Cruises. Enjoy family fun, festive dining, and unforgettable destinations.",
    image: img4,
  },
  {
    title: "Why Christmas Cruises Are the New Family Tradition",
    author: "Team Marketing",
    date: "November 12, 2025",
    desc:
      "Celebrate Christmas at sea with Cordelia Cruises. Enjoy family fun, festive dining, and unforgettable destinations.",
    image: img5,
  },
];

const BlogCarousel = () => {
  const [active, setActive] = useState(0);

  const nextSlide = () =>
    setActive((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setActive((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="blog-hero">
      {/* SLIDE TRACK */}
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${active * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="carousel-slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay" />

            <div className="hero-content">
              <h1>{slide.title}</h1>
              <p className="meta-desc">
                By <span>{slide.author}</span> | {slide.date}
              </p>
              <p className="description">{slide.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ARROWS */}
      <button className="arrow left" onClick={prevSlide}>
        <svg viewBox="0 0 24 24">
          <path
            d="M15 18l-6-6 6-6"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button className="arrow right" onClick={nextSlide}>
        <svg viewBox="0 0 24 24">
          <path
            d="M9 6l6 6-6 6"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* DOTS */}
      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogCarousel;
