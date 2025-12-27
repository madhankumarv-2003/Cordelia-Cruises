import React from "react";
import "./FeaturedNews.css";

import img1 from "./Images/Latest_Article_Section_460x316_bdce7be6e6.jpg";
import img2 from "./Images/Image_562x368_aa1a96fe3f.jpg";
import img3 from "./Images/460x316_c8ddb20f0a.jpg";
import img4 from "./Images/460x316_99ed597b60.png";
import img5 from "./Images/460x316_68f169e9ee.jpg";

const newsData = [
  {
    image: img1,
    author: "Team Marketing",
    date: "July 23, 2025",
    title: "Your Guide to On-Board Entertainment on Indian Cruises",
    desc:
      "Cruising isn’t just about gliding through turquoise waters and admiring scenic coastlines—it’s about the experience. An...",
  },
  {
    image: img2,
    author: "Team Marketing",
    date: "July 23, 2025",
    title: "Cruise Vacation In India: Top 3 Destinations For Trip",
    desc:
      "When was the last time you escaped the everyday grind, felt the ocean breeze on your face, and let the rhythmic waves...",
  },
  {
    image: img3,
    author: "Team Marketing",
    date: "October 23, 2025",
    title:
      "Introducing the Malé – Colombo Cruise: A Tropical Experience on The Empress",
    desc:
      "There is something magical about watching Kochi’s coastline fade into the horizon as The Empress sets sail. The...",
  },
  {
    image: img4,
    author: "Team Marketing",
    date: "October 23, 2025",
    title:
      "Introducing the Malé – Colombo Cruise: A Tropical Experience on The Empress",
    desc:
      "There is something magical about watching Kochi’s coastline fade into the horizon as The Empress sets sail. The...",
  },
  {
    image: img5,
    author: "Team Marketing",
    date: "October 23, 2025",
    title:
      "Introducing the Malé – Colombo Cruise: A Tropical Experience on The Empress",
    desc:
      "There is something magical about watching Kochi’s coastline fade into the horizon as The Empress sets sail. The...",
  },
];

const FeaturedNews = () => {
  return (
    <section className="featured-news">
      <h2 className="section-title">Featured News</h2>

      <div className="news-grid">
        {newsData.map((item, index) => (
          <div className="news-card" key={index}>
            <img src={item.image} alt={item.title} />

            <div className="news-content">
              <span className="meta">
                <span className="author">{item.author}</span> {" "}
                <span className="date">| {item.date}</span>
              </span>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              <a href="#" className="read-more">
                Learn more <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="btn-wrapper">
        <button className="view-more-btn mt-5">View More</button>
      </div>
    </section>
  );
};

export default FeaturedNews;
