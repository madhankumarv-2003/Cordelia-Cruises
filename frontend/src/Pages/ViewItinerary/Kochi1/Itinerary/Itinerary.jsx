import React, { useState } from "react";
import "./Itinerary.css";

/* ================= SHORE EXCURSIONS ================= */
const excursionsDay2 = [
  {
    id: 1,
    title: "GOA BEACH ADVENTURER",
    desc:
      "Hit the Goan waves! Spend a thrilling day at either Baina or Bogmalo Beach, enjoying water sports like parasailing, jet skiing, and banana rides.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: 2,
    title: "COLVA BEACH ADVENTURE",
    desc:
      "Bask in the sun-kissed shores of Colva Beach, Goa’s paradise for relaxation and adventure.",
    img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
  },
  {
    id: 3,
    title: "FONTAINHAS HERITAGE WALK",
    desc:
      "Explore Panjim’s colorful Latin Quarter and immerse yourself in Goa’s Portuguese past.",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
  },
  {
    id: 4,
    title: "FONTAINHAS HERITAGE WALK",
    desc:
      "Explore Panjim’s colorful Latin Quarter and immerse yourself in Goa’s Portuguese past.",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
  },
];

/* ================= ITINERARY ================= */
const itineraryData = [
  {
    day: 1,
    title: "Mumbai Port",
    subtitle: "Welcome aboard",
    description:
      "Just as you step aboard the Empress — the top cruise in India — also known as 'A City on the Sea,' you'll be greeted with a warm welcome. Once settled, dive right in and explore the many offerings lined up for you aboard our cruise ship.",
  },
  {
    day: 2,
    title: "Goa Port",
    subtitle: "Arrive in Goa at 3:00 PM | Evening & Overnight Stay",
    description:
      "Begin your day in a luxurious room, primed for exploration. Relish Pan-Asian and Indian dishes, catch blockbuster entertainment, and relax with beverages at the open bar. Cordelia Cruises ensures endless excitement.",
  },
  {
    day: 3,
    title: "Mumbai Port",
    subtitle: "Disembark",
    description:
      "Discover Kochi, Kerala’s vibrant commercial hub, and immerse yourself in its rich cultural and historical tapestry. Visit Mattancherry Palace, Fort Cochin, and St. Francis Church. Savor traditional cuisine with a local family, stroll through the heritage zone, and learn fishing net techniques. Enjoy a coffee break in Killian, a motor launch ride, and explore the synagogue, Dutch Palace, and Jew Town.",
  },
  {
    day: 4,
    title: "Mumbai Port",
    subtitle: "Disembark",
    description:
      "Discover Kochi, Kerala’s vibrant commercial hub, and immerse yourself in its rich cultural and historical tapestry. Visit Mattancherry Palace, Fort Cochin, and St. Francis Church. Savor traditional cuisine with a local family, stroll through the heritage zone, and learn fishing net techniques. Enjoy a coffee break in Killian, a motor launch ride, and explore the synagogue, Dutch Palace, and Jew Town.",
  },
];

const Itinerary = () => {
  const [showAll, setShowAll] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const visibleCards = 3;
  const maxIndex = excursionsDay2.length - visibleCards;

  const nextSlide = () => {
    if (slideIndex < maxIndex) setSlideIndex(slideIndex + 1);
  };

  const prevSlide = () => {
    if (slideIndex > 0) setSlideIndex(slideIndex - 1);
  };

  const visibleItinerary = showAll
    ? itineraryData
    : itineraryData.slice(0);

  return (
    <div className="ci-wrapper">
      <div className="ci-cardContainer">

        {/* HEADER */}
        <div className="ci-header">
          <h2>Itinerary</h2>
          <p>Day wise details of your package</p>
        </div>

        <div className="ci-divider"></div>

        {/* ITINERARY DAYS */}
        {visibleItinerary.map((item) => (
          <div key={item.day} className="ci-dayRow">
            <div className="ci-dayBadge">
              <span>Day</span>
              <strong>{item.day}</strong>
            </div>

            <div className="itinerary-content">
              <h3>{item.title}</h3>
              <p className="itinerary-subtitle">{item.subtitle}</p>
              
              <p className="itinerary-desc">{item.description}</p>

              {/* SHORE EXCURSIONS */}
              {showAll && item.day === 3  && (
                <div className="ci-excursions">
                  <h4>Shore Excursions</h4>

                  <div className="ci-carousel">
                    <button className="ci-nav left" onClick={prevSlide}>‹</button>

                    <div className="ci-trackWrapper">
                      <div
                        className="ci-track"
                        style={{
                          transform: `translateX(-${slideIndex * 33.33}%)`,
                        }}
                      >
                        {excursionsDay2.map((ex) => (
                          <div key={ex.id} className="ci-card">
                            <div className="ci-cardImage">
                              <img src={ex.img} alt={ex.title} />
                            </div>
                            <div className="ci-cardBody">
                              <h5>{ex.title}</h5>
                              <p>{ex.desc}</p>
                              <span className="ci-readMore">Read More</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="ci-nav right" onClick={nextSlide}>›</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* TOGGLE */}
        <div className="ci-footerToggle">
          <button onClick={() => setShowAll(!showAll)}>
            {showAll ? "Hide Itinerary ›" : "View Full Itinerary ›"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Itinerary;
