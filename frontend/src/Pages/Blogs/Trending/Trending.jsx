import React from "react";

import bigImg from "./Images/Feature_Image_460x316_058fc7c81e.jpg";
import img1 from "./Images/Feature_Image_460x316_89fb7dd65e.jpg";
import img2 from "./Images/Feature_Image_460x316_5d30a1c2c9.jpg";
import img3 from "./Images/460x316_78bcb50d18.jpg";

import "./Trending.css";

const Trending = () => {
  return (
    <section className="trending">
      <h2 className="trending-heading">Trending</h2>

      <div className="trending-wrapper">
        {/* LEFT BIG CARD */}
        <div className="trending-left">
          <div className="left-card">
            <img src={bigImg} alt="Why Christmas Cruises" />

            <div className="left-content">
              <span className="meta">
                Team Marketing<span className="meta-date"> | November 12, 2025</span>
              </span>


              <h3>
                Why Christmas Cruises Are the
                New Family Tradition
              </h3>

              <p>
                Why stay home when you can wake up to a beautiful
                sunrise over the Arabian Sea? When you celebrate
                Christmas with us, you leave behind the stress of
                cooking, cleaning and hosting. Instead, you step
                aboard a world where festive décor, gourmet feasts,
                and dazzling entertainment await.
              </p>

              <a href="/" className="read-more">
                Read more →
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT LIST */}
        <div className="trending-right">
          <TrendingItem
            img={img1}
            title="Best Cruise Experiences for Honeymooners in 2026"
            desc="There is something magical about gliding across the sea with the person you love..."
            date="November 24, 2025"
          />

          <TrendingItem
            img={img2}
            title="Aboard the Empress: Cordelia Cruises’ Signature"
            desc="If you've ever dreamed of sailing on a luxury cruise without leaving Indian shores..."
            date="September 08, 2025"
          />

          <TrendingItem
            img={img3}
            title="Mumbai to Lakshadweep Cruise: First-Timer’s Guide"
            desc="Dreaming of turquoise waters, powdery white beaches, and the most luxurious cruise..."
            date="July 23, 2025"
          />
        </div>
      </div>
    </section>
  );
};

const TrendingItem = ({ img, title, desc, date }) => (
  <div className="right-item">
    <img src={img} alt={title} />

    <div className="right-content">
      <span className="author">Team Marketing</span>
      <h4>{title}</h4>
      <p>{desc}</p>
      <a href="/">Read more →</a>
      <span className="date">{date}</span>
    </div>
  </div>
);

export default Trending;
