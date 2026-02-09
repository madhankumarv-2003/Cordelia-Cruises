import React, { useState, useRef, useEffect } from "react";
import { FaSlidersH } from "react-icons/fa";
import { TbArrowsExchange } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

import "./CruiseCard.css";

import call from "../../../components/ContactBar/images/call-new-icon.svg";
import shiplogo from "./Images/cruise-itinerary-tag-white-icon.svg";

import Img1 from "../../AllDestinations/Images/chennai-1-mobile.webp";
import Img2 from "../../AllDestinations/Images/cordelia-pondicherry-destination-image-02.webp";
import Img3 from "../../AllDestinations/Images/kochi-1-mobile.webp";
import Img4 from "../../AllDestinations/Images/mumbai-3-mobile.webp";
import Img5 from "../../AllDestinations/Images/goa-2-mobile.webp";
import Img6 from "../../AllDestinations/Images/lakshadweep-1-mobile.webp";
import Img7 from "../../AllDestinations/Images/mumbai-1-mobile.webp";
import Img8 from "../../AllDestinations/Images/mumbai-3-mobile.webp";
import Img9 from "../../AllDestinations/Images/mumbai-2-mobile.webp";
import Img10 from "../../AllDestinations/Images/cordelia-visakhapatnam-destination-image.webp";
import Img11 from "../../AllDestinations/Images/kochi-2-mobile.webp";
import Img12 from "../../AllDestinations/Images/kochi-3-mobile.webp";

import promo1 from "./Images/SNPL_UCP_web.webp";
import promo2 from "./Images/FamilyFun_Upcoming.webp";
import promo3 from "./Images/WhySettle_Upcoming.webp";
import promo4 from "./Images/YourNext_Upcoming.webp";

const CruiseCard = () => {
  const navigate = useNavigate();

  const [items] = useState([
    {
      id: 1,
      ship: "EMPRESS",
      title: "2-Night Kochi Weekend Cruise",
      start: "Feb 07, 2026",
      end: "Feb 09, 2026",
      route: "Kochi Round Trip",
      ports: "Kochi • Kochi",
      price: "₹24,900",
      viewing: 200,
      img: Img4
    },
    {
      id: 2,
      ship: "SUN",
      title: "3-Night Mumbai to Goa Cruise",
      start: "Feb 14, 2026",
      end: "Feb 17, 2026",
      route: "Mumbai → Goa",
      ports: "Mumbai • Goa",
      price: "₹39,499",
      viewing: 312,
      img: Img1
    },
    {
      id: 3,
      ship: "EMPRESS",
      title: "4-Night Goa to Mumbai Cruise",
      start: "Mar 03, 2026",
      end: "Mar 07, 2026",
      route: "Goa → Mumbai",
      ports: "Goa • Mumbai",
      price: "₹41,999",
      viewing: 276,
      img: Img5
    },
    {
      id: 4,
      ship: "SKY",
      title: "3-Night Chennai Weekend Cruise",
      start: "Mar 21, 2026",
      end: "Mar 24, 2026",
      route: "Chennai Round Trip",
      ports: "Chennai • Chennai",
      price: "₹34,500",
      viewing: 201,
      img: Img3
    },
    {
      id: 5,
      ship: "EMPRESS",
      title: "5-Night Mumbai to Lakshadweep Cruise",
      start: "Apr 12, 2026",
      end: "Apr 17, 2026",
      route: "Mumbai → Lakshadweep",
      ports: "Mumbai • Lakshadweep",
      price: "₹56,800",
      viewing: 414,
      img: Img6
    },
    {
      id: 6,
      ship: "EMPRESS",
      title: "3-Night Lakshadweep Return Cruise",
      start: "Apr 17, 2026",
      end: "Apr 20, 2026",
      route: "Lakshadweep → Mumbai",
      ports: "Lakshadweep • Mumbai",
      price: "₹48,200",
      viewing: 297,
      img: Img7
    },
    {
      id: 7,
      ship: "EMPRESS",
      title: "7-Night Mumbai to Colombo Cruise",
      start: "May 01, 2026",
      end: "May 08, 2026",
      route: "Mumbai → Colombo",
      ports: "Mumbai • Colombo",
      price: "₹78,300",
      viewing: 359,
      img: Img8
    },
    {
      id: 8,
      ship: "EMPRESS",
      title: "7-Night Colombo Return Cruise",
      start: "May 08, 2026",
      end: "May 15, 2026",
      route: "Colombo → Mumbai",
      ports: "Colombo • Mumbai",
      price: "₹83,700",
      viewing: 421,
      img: Img9
    },
    {
      id: 9,
      ship: "EMPRESS",
      title: "4-Night Singapore to Chennai Cruise",
      start: "Jun 04, 2026",
      end: "Jun 08, 2026",
      route: "Singapore → Chennai",
      ports: "Singapore • Chennai",
      price: "₹65,900",
      viewing: 312,
      img: Img10
    },
    {
      id: 10,
      ship: "EMPRESS",
      title: "4-Night Chennai Return Cruise",
      start: "Jun 08, 2026",
      end: "Jun 12, 2026",
      route: "Chennai Round Trip",
      ports: "Chennai • Chennai",
      price: "₹51,499",
      viewing: 249,
      img: Img2
    },
    {
      id: 11,
      ship: "EMPRESS",
      title: "6-Night Singapore to Visakhapatnam Cruise",
      start: "Jul 10, 2026",
      end: "Jul 16, 2026",
      route: "Singapore → Visakhapatnam",
      ports: "Singapore • Visakhapatnam",
      price: "₹92,800",
      viewing: 501,
      img: Img12
    },
    {
      id: 12,
      ship: "EMPRESS",
      title: "3-Night Visakhapatnam Return Cruise",
      start: "Jul 16, 2026",
      end: "Jul 19, 2026",
      route: "Visakhapatnam Round Trip",
      ports: "Visakhapatnam • Visakhapatnam",
      price: "₹37,300",
      viewing: 195,
      img: Img11
    }
  ]);

  const [filteredItems, setFilteredItems] = useState(items);
  const [openFilter, setOpenFilter] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [selectedDeparture, setSelectedDeparture] = useState(null);
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

  const applySort = (type) => {
    let sorted = [...filteredItems];
    const getPrice = (p) => Number(p.replace(/[₹,]/g, ""));

    if (type === "low") sorted.sort((a, b) => getPrice(a.price) - getPrice(b.price));
    if (type === "high") sorted.sort((a, b) => getPrice(b.price) - getPrice(a.price));
    if (type === "early") sorted.sort((a, b) => new Date(a.start) - new Date(b.start));

    setFilteredItems(sorted);
    setSortOpen(false);
  };

  const applyFilter = () => {
    let filtered = [...items];

    if (selectedTrip) {
      if (selectedTrip === "One Way") {
        filtered = filtered.filter(i => !i.route.toLowerCase().includes("round"));
      } else {
        filtered = filtered.filter(i => i.route.toLowerCase().includes("round"));
      }
    }

    if (selectedDeparture) {
      filtered = filtered.filter(i =>
        i.route.toLowerCase().includes(selectedDeparture.toLowerCase())
      );
    }

    setFilteredItems(filtered);
    setOpenFilter(false);
  };

  const resetFilter = () => {
    setSelectedTrip(null);
    setSelectedDeparture(null);
    setFilteredItems(items);
  };

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
            <img src={call} style={{ width: 20, height: 20 }} alt="" /> Call - 022-68811111
          </button>
          <button className="crz-help-outline-btn">Request a Callback</button>
        </div>
      </div>

      {/* RIGHT MAIN */}
      <div className="crz-main">

        <div className="crz-top-row">
          <h3 className="crz-results-title">
            Cruise Search Results <span>({filteredItems.length})</span>
          </h3>
          <div className="crz-top-actions">

            <div className="sort-dropdown" ref={sortRef}>
              <button className="crz-top-btn" onClick={() => setSortOpen(!sortOpen)}>
                <span className="txt-sort">Sort By</span>
                <span className="sort-bars-icon"><div></div></span>
              </button>

              {sortOpen && (
                <div className="sort-menu">
                  <div className="sort-item" onClick={() => applySort("low")}>Price Low to High</div>
                  <div className="sort-item" onClick={() => applySort("high")}>Price High to Low</div>
                  <div className="sort-item" onClick={() => applySort("early")}>Earliest Date</div>
                </div>
              )}
            </div>

            <button className="crz-top-btn" onClick={() => setOpenFilter(true)}>
              <span className="txt-filter">Filter By</span>
              <FaSlidersH className="crz-filter-icon" />
            </button>
          </div>
        </div>

        {/* CARD + BANNER LOGIC */}
        {filteredItems.map((item, index) => (
          <React.Fragment key={item.id}>
            <div className="crz-card">
              <div className="crz-left">
                <span className="crz-tag"><img src={shiplogo} style={{ width: 15, height: 15 }}></img>{item.ship}</span>
                <img src={item.img} alt="" />
              </div>
              <div className="crz-mid">
                <h2 className="crz-title-txt">{item.title}</h2>
                <div className="crz-date-row">
                  <span>{item.start}</span>
                  <span className="crz-arrow">➜</span>
                  <span>{item.end}</span>
                  <span className="crz-arrow"> <TbArrowsExchange size={18}/></span>
                  <span>{item.route}</span>
                </div>
                <hr className="crz-divider" />
                <p className="crz-ports"><strong>Ports:</strong> {item.ports}</p>
                <hr className="crz-divider" />
                <div className="crz-offers">
                  <span className="crz-offers-link">Available Offers</span>
                  <div className="crz-offer-item"><span className="crz-offer-dot"></span> Kids Sail Free*</div>
                </div>
              </div>
              <div className="crz-right mt-2">
                <span className="crz-view-badge">{item.viewing} Viewing</span>
                <p className="crz-price-label">Starting From</p>
                <h2 className="crz-price-txt">{item.price}</h2>
                <p className="crz-price-sub">Excl. GST Per Person<br />in Double Occupancy</p>

                {/* ROUTING HERE */}
                <button
                  className="crz-btn-itinerary"
                  onClick={() => navigate(`/itinerary/${item.id}`)}
                >
                  View Itinerary
                </button>


                <button
                  className="crz-btn-booknow mb-2"
                  onClick={() =>
                    navigate(`/book/${item.id}`, {
                      state: { selectedCruise: item }
                    })
                  }
                >
                  Book Now
                </button>

              </div>
            </div>

            {(index + 1) % 3 === 0 && (
              <div className="promo-strip">
                <img
                  src={
                    (index + 1 === 3 && promo1) ||
                    (index + 1 === 6 && promo2) ||
                    (index + 1 === 9 && promo3) ||
                    (index + 1 === 12 && promo4) ||
                    null
                  }
                  alt="Promo Banner"
                />
              </div>
            )}
          </React.Fragment>
        ))}

      </div>

      {/* FILTER MODAL */}
      {openFilter && (
        <>
          <div className="filter-overlay" onClick={() => setOpenFilter(false)} />
          <div className="filter-modal">
            <div className="filter-header-bar">
              <h2 className="filter-title">Filters</h2>
              <button className="filter-close" onClick={() => setOpenFilter(false)}>✕</button>
            </div>

            <div className="filter-section">
              <p className="filter-label">Trip Type</p>
              <div className="filter-pills">
                <button className={`pill ${selectedTrip === "One Way" ? "active" : ""}`} onClick={() => setSelectedTrip("One Way")}>➜ One Way</button>
                <button className={`pill ${selectedTrip === "Round Trip" ? "active" : ""}`} onClick={() => setSelectedTrip("Round Trip")}>
                  <TbArrowsExchange size={18}/> Round Trip</button>
              </div>
            </div>

            <div className="filter-section">
              <p className="filter-label">Departure Port</p>
              <div className="filter-pills">
                {["Kochi","Goa","Mumbai","Sydney","Chennai","Singapore","Visakhapatnam"]
                  .map(port => (
                    <button key={port} className={`pill ${selectedDeparture === port ? "active" : ""}`} onClick={() => setSelectedDeparture(port)}>{port}</button>
                  ))}
              </div>
            </div>

            <div className="filter-footer-divider"></div>
            <div className="filter-footer">
              <button className="btn-reset" onClick={resetFilter}>Reset All</button>
              <button className="btn-apply" onClick={applyFilter}>Apply</button>
            </div>

          </div>
        </>
      )}
    </div>
  );
};

export default CruiseCard;
