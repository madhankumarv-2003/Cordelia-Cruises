import React from "react";
import "./FeaturedNews.css";

import img1 from "../images/news1.jpg";
import img2 from "../images/news2.jpg";
import img3 from "../images/news3.jpg";

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
                <span className="author">{item.author}</span> |{" "}
                <span className="date">{item.date}</span>
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
    </section>
  );
};

export default FeaturedNews;
