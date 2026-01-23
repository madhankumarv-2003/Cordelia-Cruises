import React, { useState, useRef, useEffect } from "react";
import { FaPhone, FaSlidersH } from "react-icons/fa";

import "./CruiseCard.css";

import call from "../../../components/ContactBar/images/call-new-icon.svg";
import Img1 from "./Images/WhySettle_Upcoming.webp";

const CruiseCard = () => {
  const [items] = useState([
    {
      id: 1,
      ship: "EMPRESS",
      title: "2-Night Mumbai Weekend Cruise",
      start: "Jan 24, 2026",
      end: "Jan 26, 2026",
      route: "Mumbai Round Trip",
      ports: "Mumbai • Mumbai",
      price: "₹46,184",
      viewing: 204,
      img: Img1
    },
    {
      id: 2,
      ship: "EMPRESS",
      title: "2-Night Mumbai Weekend Cruise",
      start: "Jan 24, 2026",
      end: "Jan 26, 2026",
      route: "Mumbai Round Trip",
      ports: "Mumbai • Mumbai",
      price: "₹46,184",
      viewing: 204,
      img: Img1
    }
  ]);

  const [sortOpen, setSortOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const sortRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setSortOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="crz-container">

      {/* LEFT PANEL */}
      <div className="crz-help-wrapper">
        <div className="crz-help-panel">
          <div className="crz-help-icon">
            <img src={call} style={{ width: 32, height: 32 }} alt="" />
          </div>
          <h3 className="crz-help-title">
            Your perfect cruise is<br />one call away.
          </h3>
          <p className="crz-help-sub">
            Get instant help from our<br />cruise specialist.
          </p>

          <button className="crz-help-call-btn">
            <FaPhone style={{ marginRight: 6 }} /> Call - 022-68811111
          </button>

          <button className="crz-help-outline-btn">Request a Callback</button>
        </div>
      </div>

      {/* RIGHT MAIN */}
      <div className="crz-main">

        <div className="crz-top-row">
          <h3 className="crz-results-title">
            Cruise Search Results <span>({items.length})</span>
          </h3>

          <div className="crz-top-actions">

            {/* SORT */}
            <div className="sort-dropdown" ref={sortRef}>
              <button className="crz-top-btn" onClick={() => setSortOpen(!sortOpen)}>
                <span className="txt-sort">Sort By</span>
                <span className="sort-bars-icon"><div></div></span>
              </button>

              {sortOpen && (
                <div className="sort-menu">
                  <div className="sort-item">Price Low to High</div>
                  <div className="sort-item">Price High to Low</div>
                  <div className="sort-item">Earliest Date</div>
                </div>
              )}
            </div>

            {/* FILTER BUTTON */}
            <button className="crz-top-btn" onClick={() => setOpenFilter(true)}>
              <span className="txt-filter">Filter By</span>
              <FaSlidersH className="crz-filter-icon" />
            </button>

          </div>
        </div>

        {/* CARDS */}
        {items.map(item => (
          <div className="crz-card" key={item.id}>
            <div className="crz-left">
              <span className="crz-tag">🛳️ {item.ship}</span>
              <img src={item.img} alt="" />
            </div>

            <div className="crz-mid">
              <h2 className="crz-title-txt">{item.title}</h2>
              <div className="crz-date-row">
                <span>{item.start}</span>
                <span className="crz-arrow">➜</span>
                <span>{item.end}</span>
                <span className="crz-arrow">➜</span>
                <span>{item.route}</span>
              </div>

              <hr className="crz-divider" />

              <p className="crz-ports"><strong>Ports:</strong> {item.ports}</p>

              <div className="crz-offers">
                <span className="crz-offers-link">Available Offers</span>
                <div className="crz-offer-item">
                  <span className="crz-offer-dot"></span> Kids Sail Free*
                </div>
              </div>
            </div>

            <div className="crz-right">
              <span className="crz-view-badge">{item.viewing} Viewing</span>
              <p className="crz-price-label">Starting From</p>
              <h2 className="crz-price-txt">{item.price}</h2>
              <p className="crz-price-sub">Excl. GST Per Person<br />in Double Occupancy</p>
              <button className="crz-btn-itinerary">View Itinerary</button>
              <button className="crz-btn-booknow">Book Now</button>
            </div>
          </div>
        ))}
      </div>

      {/* FILTER MODAL */}
      {openFilter && (
  <>
    <div className="filter-overlay" onClick={() => setOpenFilter(false)} />

    <div className="filter-modal">

      {/* HEADER */}
      <div className="filter-header-bar">
        <h2 className="filter-title">Filters</h2>
        <button className="filter-close" onClick={() => setOpenFilter(false)}>✕</button>
      </div>

      {/* TRIP TYPE */}
      <div className="filter-section">
        <p className="filter-label">Trip Type</p>
        <div className="filter-pills">
          <button className="pill pill-icon">➜ One Way</button>
          <button className="pill pill-icon">↺ Round Trip</button>
        </div>
      </div>

      {/* DEPARTURE PORT */}
      <div className="filter-section">
        <p className="filter-label">Departure Port</p>
        <div className="filter-pills">
          <button className="pill">Kochi</button>
          <button className="pill">Goa</button>
          <button className="pill">Mumbai</button>
          <button className="pill">Sydney</button>
          <button className="pill">Chennai</button>
          <button className="pill">Singapore</button>
          <button className="pill">Visakhapatnam</button>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="filter-footer-divider"></div>

      {/* FOOTER CTAS */}
      <div className="filter-footer">
        <button className="btn-reset">Reset All</button>
        <button className="btn-apply" onClick={() => setOpenFilter(false)}>Apply</button>
      </div>

    </div>
  </>
)}


    </div>
  );
};

export default CruiseCard;
