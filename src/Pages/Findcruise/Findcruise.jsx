import React from "react";
import "./FindCruise.css";
import cruiseImg from "../Offers/images/Book_now_pay_later_.webp";

const FindCruise = () => {
  return (
    <div className="cruise-page">

      {/* TITLE */}
      <h2 className="page-title">Explore Cruise Holidays</h2>

      {/* SEARCH BAR */}
      <div className="search-bar">
        <div className="search-item">
          <label>Select Destination</label>
          <select>
            <option>Where to?</option>
            <option>Kochi</option>
            <option>Mumbai</option>
            <option>Lakshadweep</option>
          </select>
        </div>

        <div className="divider" />

        <div className="search-item">
          <label>Select Month</label>
          <select>
            <option>Travel month?</option>
            <option>December</option>
            <option>January</option>
          </select>
        </div>

        <div className="divider" />

        <div className="search-item">
          <label>Select Night</label>
          <select>
            <option>Nights?</option>
            <option>3 Nights</option>
            <option>4 Nights</option>
          </select>
        </div>

        <div className="divider" />

        <div className="search-item">
          <label>Select Cruise</label>
          <select>
            <option>Cruise name?</option>
            <option>Empress</option>
          </select>
        </div>

        <button className="apply-btn">Apply</button>
      </div>

      {/* RESULT HEADER */}
      <div className="result-header">
        <h4>Cruise Search Results (25)</h4>
        <div className="actions">
          <span>Sort By</span>
          <span>Filter By</span>
        </div>
      </div>

      {/* RESULT CARD */}
      <div className="result-card">
        <div className="image-box">
          <img src={cruiseImg} alt="Cruise" />
          <span className="badge">Shore Excursions Available</span>
        </div>

        <div className="content-box">
          <p className="date">
            24 Dec 2025 → 27 Dec 2025 <span>| One Way Trip</span>
          </p>

          <h3>Kochi - Lakshadweep - At Sea - Mumbai (3N/4D)</h3>

          <p className="ports">
            Visiting Ports<br />
            <strong>Kochi | Lakshadweep | Mumbai</strong>
          </p>

          <div className="offers">
            <p>Available Offers</p>
            <ul>
              <li>Kids Sail Free</li>
              <li>Cabin Upgrade</li>
            </ul>
          </div>
        </div>

        <div className="action-box">
          <span className="ship">EMPRESS</span>
          <button className="price-btn">Reveal Prices</button>
        </div>
      </div>
    </div>
  );
};

export default FindCruise;
