import React, { useState } from "react";
import {
  FaShip,
  FaFilter,
  FaSortAmountDown,
  FaCheckCircle,
} from "react-icons/fa";

import img1 from "./Images/SNPL_UCP_web.webp";

import Promo1 from "../CruiseCard/Images/SNPL_UCP_web.webp";
import Promo2 from "../CruiseCard/Images/FamilyFun_Upcoming.webp";
import Promo3 from "../CruiseCard/Images/WhySettle_Upcoming.webp";
import Promo4 from "../CruiseCard/Images/YourNext_Upcoming.webp";

import "./CruiseCard.css";

/* ================================
   CRUISE DATA
================================ */
const cruisesData = [
  {
    id: 1,
    image: img1,
    date: "07 Jan 2026 → 10 Jan 2026",
    tripType: "One Way Trip",
    title: "Kochi - Lakshadweep - Mumbai (3N/4D)",
    ports: ["Kochi", "Lakshadweep", "Mumbai"],
    ship: "EMPRESS",
    offers: [
      "Exclusive Value Fare",
      "2nd Guest Free",
      "Kids Sail Absolutely Free",
      "3rd / 4th Pax Free",
    ],
    shoreExcursion: true,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    date: "12 Jan 2026 → 15 Jan 2026",
    tripType: "Round Trip",
    title: "Mumbai - Goa - Mumbai (3N/4D)",
    ports: ["Mumbai", "Goa"],
    ship: "EMPRESS",
    offers: ["Kids Sail Free"],
    shoreExcursion: false,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    date: "20 Jan 2026 → 24 Jan 2026",
    tripType: "One Way Trip",
    title: "Chennai - Colombo (4N/5D)",
    ports: ["Chennai", "Colombo"],
    ship: "EMPRESS",
    offers: ["Early Bird Offer"],
    shoreExcursion: true,
  },
];

/* ================================
   PROMO BANNER
================================ */
const promoBanners = [Promo1, Promo2, Promo3, Promo4];

const PromoBanner = ({ image }) => (
  <div className="promo-banner full-width">
    <img src={image} alt="Promo" />
  </div>
);

const ShoreBadge = () => {
  return (
    <div className="shore-badge">
      Shore Excursions Available

      <span className="info-icon">i</span>

      <div className="shore-tooltip">
        <p>
          A shore excursion is a group tour or activity aimed at cruise
          travelers who can spend time in each port they're visiting.
        </p>
        <p>
          All shore excursions are available at an additional cost.
        </p>
      </div>
    </div>
  );
};

/* ================================
   MAIN COMPONENT
================================ */
export default function CruiseCard() {
  const [sortBy, setSortBy] = useState("title");
  const [filterShip, setFilterShip] = useState("ALL");

  const cruises = cruisesData
    .filter((c) => filterShip === "ALL" || c.ship === filterShip)
    .sort((a, b) =>
      sortBy === "title"
        ? a.title.localeCompare(b.title)
        : a.date.localeCompare(b.date)
    );

  return (
    <div className="cruise-results">
      {/* HEADER */}
      <div className="cruise-results__header">
        <h3>Cruise Search Results ({cruises.length})</h3>

        <div className="cruise-results__actions">
          <span onClick={() => setSortBy(sortBy === "title" ? "date" : "title")}>
            <FaSortAmountDown /> Sort
          </span>

          <span
            onClick={() =>
              setFilterShip(filterShip === "ALL" ? "EMPRESS" : "ALL")
            }
          >
            <FaFilter /> Filter
          </span>
        </div>
      </div>

      {/* CARDS */}
      {cruises.map((item, index) => (
        <React.Fragment key={item.id}>
          <div className="cruise-results__card">
            {/* IMAGE */}
            <div className="cruise-results__image">
              <img src={item.image} alt="Cruise" />

              {item.shoreExcursion && <ShoreBadge />}
            </div>

            {/* CONTENT */}
            <div className="cruise-results__content">
              <div className="cruise-results__top">
                <span className="cruise-results__date">
                  {item.date} → {item.tripType}
                </span>

                <span className="cruise-results__ship">
                  <FaShip /> {item.ship}
                </span>
              </div>

              <h4 className="cruise-results__title">{item.title}</h4>

              <div className="cruise-results__ports">
                <span>Visiting Ports</span>
                <p>{item.ports.join(" | ")}</p>
              </div>

              <div className="cruise-results__bottom">
                <div className="cruise-results__offers">
                  <span>Available Offers</span>
                  <ul>
                    {item.offers.map((offer, i) => (
                      <li key={i}>
                        <FaCheckCircle /> {offer}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="reveal-btn">Reveal Prices</button>
              </div>
            </div>
          </div>

          {/* PROMO AFTER EVERY 3 CARDS */}
          {(index + 1) % 3 === 0 && (
            <PromoBanner
              image={promoBanners[Math.floor(index / 3) % promoBanners.length]}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
