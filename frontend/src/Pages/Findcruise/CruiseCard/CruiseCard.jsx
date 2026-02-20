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

import img1 from "../../ViewItinerary/Kochi1/Images/mumbai-mumbai-map-sep-desktop (1).webp";
import img2 from "../../ViewItinerary/Kochi1/Images/mumbai-mumbai-map-sep-desktop (1).webp";
import img3 from "../../ViewItinerary/Kochi1/Images/mumbai-mumbai-map-sep-desktop (1).webp";
import img4 from "../../ViewItinerary/Kochi1/Images/mumbai-mumbai-map-sep-desktop (1).webp";
import img5 from "../../ViewItinerary/Kochi1/Images/mumbai-mumbai-map-sep-desktop (1).webp";
import img6 from "../../ViewItinerary/Kochi1/Images/mumbai-mumbai-map-sep-desktop (1).webp";
import img7 from "../../ViewItinerary/Kochi1/Images/mumbai-mumbai-map-sep-desktop (1).webp";
import img8 from "../../ViewItinerary/Kochi1/Images/mumbai-mumbai-map-sep-desktop (1).webp";
import img9 from "../../ViewItinerary/Kochi1/Images/mumbai-mumbai-map-sep-desktop (1).webp";
import img10 from "../../ViewItinerary/Kochi1/Images/mumbai-mumbai-map-sep-desktop (1).webp";
import img11 from "../../ViewItinerary/Kochi1/Images/mumbai-mumbai-map-sep-desktop (1).webp";
import img12 from "../../ViewItinerary/Kochi1/Images/mumbai-mumbai-map-sep-desktop (1).webp";

import promo1 from "./Images/SNPL_UCP_web.webp";
import promo2 from "./Images/FamilyFun_Upcoming.webp";
import promo3 from "./Images/WhySettle_Upcoming.webp";
import promo4 from "./Images/YourNext_Upcoming.webp";

const CruiseCard = ({ filters }) => {

  const navigate = useNavigate();

  const [items] = useState([
    {
      id: 1,
      ship: "EMPRESS",
      title: "2-Night Kochi Weekend Cruise",
      start: "Feb 07, 2026",
      end: "Feb 09, 2026",
      tripStart: "Wed, 05:00 PM",
      tripEnd: "Sat, 08:30 AM",
      route: "Kochi Round Trip",
      ports: "Kochi • Kochi",
      price: "₹24,900",
      viewing: 200,
      img: Img4,
      image: img1
    },
    {
      id: 2,
      ship: "SUN",
      title: "3-Night Mumbai to Goa Cruise",
      start: "Feb 14, 2026",
      end: "Feb 17, 2026",
      tripStart: "Wed, 05:00 PM",
      tripEnd: "Sat, 08:30 AM",
      route: "Mumbai Round Trip",
      ports: "Mumbai • Goa",
      price: "₹39,499",
      viewing: 312,
      img: Img1,
      image: img2
    },
    {
      id: 3,
      ship: "EMPRESS",
      title: "4-Night Goa to Mumbai Cruise",
      start: "Mar 03, 2026",
      end: "Mar 07, 2026",
      tripStart: "Wed, 05:00 PM",
      tripEnd: "Sat, 08:30 AM",
      route: "Mumbai One Way Trip",
      ports: "Goa • Mumbai",
      price: "₹41,999",
      viewing: 276,
      img: Img5,
      image: img3
    },
    {
      id: 4,
      ship: "SKY",
      title: "3-Night Chennai Weekend Cruise",
      start: "Mar 21, 2026",
      end: "Mar 24, 2026",
      tripStart: "Wed, 05:00 PM",
      tripEnd: "Sat, 08:30 AM",
      route: "Chennai Round Trip",
      ports: "Chennai • Chennai",
      price: "₹34,500",
      viewing: 201,
      img: Img3,
      image: img4
    },
    {
      id: 5,
      ship: "SUN",
      title: "5-Night Mumbai to Lakshadweep Cruise",
      start: "Apr 12, 2026",
      end: "Apr 17, 2026",
      tripStart: "Wed, 05:00 PM",
      tripEnd: "Sat, 08:30 AM",
      route: "Goa One Way Trip",
      ports: "Mumbai • Lakshadweep",
      price: "₹56,800",
      viewing: 414,
      img: Img6,
      image: img5
    },
    {
      id: 6,
      ship: "EMPRESS",
      title: "3-Night Lakshadweep Return Cruise",
      start: "Apr 17, 2026",
      end: "Apr 20, 2026",
      tripStart: "Wed, 05:00 PM",
      tripEnd: "Sat, 08:30 AM",
      route: "Mumbai Round Trip",
      ports: "Lakshadweep • Mumbai",
      price: "₹48,200",
      viewing: 297,
      img: Img7,
      image: img6
    },
    {
      id: 7,
      ship: "SUN",
      title: "7-Night Mumbai to Colombo Cruise",
      start: "May 01, 2026",
      end: "May 08, 2026",
      tripStart: "Wed, 05:00 PM",
      tripEnd: "Sat, 08:30 AM",
      route: "Kochi One Way Trip",
      ports: "Mumbai • Colombo",
      price: "₹78,300",
      viewing: 359,
      img: Img8,
      image: img7
    },
    {
      id: 8,
      ship: "EMPRESS",
      title: "7-Night Colombo Return Cruise",
      start: "May 08, 2026",
      end: "May 15, 2026",
      tripStart: "Wed, 05:00 PM",
      tripEnd: "Sat, 08:30 AM",
      route: "Colombo → Mumbai",
      ports: "Colombo • Mumbai",
      price: "₹83,700",
      viewing: 421,
      img: Img9,
      image: img8
    },
    {
      id: 9,
      ship: "SUN",
      title: "4-Night Singapore to Chennai Cruise",
      start: "Jun 04, 2026",
      end: "Jun 08, 2026",
      tripStart: "Wed, 05:00 PM",
      tripEnd: "Sat, 08:30 AM",
      route: "Singapore → Chennai",
      ports: "Singapore • Chennai",
      price: "₹65,900",
      viewing: 312,
      img: Img10,
      image: img9
    },
    {
      id: 10,
      ship: "EMPRESS",
      title: "4-Night Chennai Return Cruise",
      start: "Jun 08, 2026",
      end: "Jun 12, 2026",
      tripStart: "Wed, 05:00 PM",
      tripEnd: "Sat, 08:30 AM",
      route: "Chennai Round Trip",
      ports: "Chennai • Chennai",
      price: "₹51,499",
      viewing: 249,
      img: Img2,
      image: img10
    },
    {
      id: 11,
      ship: "SKY",
      title: "6-Night Singapore to Visakhapatnam Cruise",
      start: "Jul 10, 2026",
      end: "Jul 16, 2026",
      tripStart: "Wed, 05:00 PM",
      tripEnd: "Sat, 08:30 AM", 
      route: "Singapore → Visakhapatnam",
      ports: "Singapore • Visakhapatnam",
      price: "₹92,800",
      viewing: 501,
      img: Img12,
      image: img11
    },
    {
      id: 12,
      ship: "SKY",
      title: "3-Night Visakhapatnam Return Cruise",
      start: "Jul 16, 2026",
      end: "Jul 19, 2026",
      tripStart: "Wed, 05:00 PM",
      tripEnd: "Sat, 08:30 AM",
      route: "Visakhapatnam Round Trip",
      ports: "Visakhapatnam • Visakhapatnam",
      price: "₹37,300",
      viewing: 195,
      img: Img11,
      image: img12
    }
  ]);

  const promoImages = [promo1, promo2, promo3, promo4];
  
  const [openFilter, setOpenFilter] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [selectedDeparture, setSelectedDeparture] = useState(null);
  const sortRef = useRef(null);
  const [filteredItems, setFilteredItems] = useState([]);

useEffect(() => {
  let filtered = [...items];

  // Destination filter
  if (filters.destination) {
    filtered = filtered.filter(item =>
      item.ports.toLowerCase().includes(filters.destination.toLowerCase())
    );
  }

  // Cruise name filter
  if (filters.cruise) {
    filtered = filtered.filter(item =>
      item.ship === filters.cruise
    );
  }

  // Nights filter (based on title)
  if (filters.nights) {
    filtered = filtered.filter(item =>
      item.title.includes(`${filters.nights}-Night`)
    );
  }

  // Month + Year filter
  if (filters.month && filters.year) {
    filtered = filtered.filter(item => {
      const date = new Date(item.start);
      const itemMonth = date.toLocaleString("default", { month: "short" });
      const itemYear = date.getFullYear();
      return (
        itemMonth === filters.month &&
        itemYear === filters.year
      );
    });
  }

  setFilteredItems(filtered);

}, [filters, items]);


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
                 <span className="crz-arrow">
                  {(() => {
                    const routeText = (item.route || "").toLowerCase().trim();

                    if (routeText.includes("round trip")) {
                      return <TbArrowsExchange size={20} />;
                    }

                    if (routeText.includes("one way")) {
                      return  <span className="crz-arrow">➜</span>;
                    }
                  })()}
                </span>
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
                  onClick={() =>
                    navigate(`/itinerary/${item.id}`, {
                      state: { selectedCruise: item }
                    })
                  }
                >
                  View Itinerary
                </button>

                <button
                  className="crz-btn-booknow mb-2"
                  onClick={() => {
                    localStorage.setItem("selectedCruise", JSON.stringify(item));

                    navigate(`/book/${item.id}`, {
                      state: { selectedCruise: item } 
                    });
                  }}
                >
                  Book Now
                </button>
              
              </div>
            </div>
            
            {(index + 1) % 3 === 0 && (
              <div className="promo-strip">
                <img
                  src={
                    promoImages[
                      (Math.floor((index + 1) / 3) - 1) % promoImages.length
                    ]
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
