import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./FilterBox.css";

const destinations = [
  "Chennai","Colombo","Goa","Hambantota","Jaffna","Kochi",
  "Kuala Lumpur","Lakshadweep","Langkawi","Male","Mumbai",
  "Phuket","Puducherry","Singapore","Sydney","Trincomalee","Visakhapatnam",
];

const months = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec",
];

const nightsList = [2, 3, 4, 5, 6, 7, 10, 34];

const cruises = ["SKY", "SUN", "EMPRESS"];

const FilterBox = () => {
  const [open, setOpen] = useState(null);

  const [destination, setDestination] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState(2026);
  const [nights, setNights] = useState(null);
  const [cruise, setCruise] = useState("");

  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const formatMonth = () =>
    `${String(months.indexOf(month) + 1).padStart(2, "0")}-${year}`;

  return (
    <section className="explore-cruise">
      <h2>Explore Cruise Holidays</h2>

      <div className="filter-box" ref={wrapperRef}>

        {/* DESTINATION */}
        <div className="filter-item">
          <label>Select Destination</label>
          <div
            className="custom-select"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(open === "dest" ? null : "dest");
            }}
          >
            <span>{destination || "Where to?"}</span>
            <FaChevronDown className="dropdown-icon" />
          </div>

          {open === "dest" && (
            <div className="destination-panel">
              <h4>Which destination would you like to cruise to?</h4>

              <div className="destination-grid">
                {destinations.map((city) => (
                  <button
                    key={city}
                    className={`destination-chip ${destination === city ? "active" : ""}`}
                    onClick={() => setDestination(city)}
                  >
                    {city}
                  </button>
                ))}
              </div>

              <div className="panel-actions">
                <button className="reset-btn" onClick={() => setDestination("")}>
                  RESET
                </button>
                <button className="done-btn" onClick={() => setOpen(null)}>
                  DONE
                </button>
              </div>
            </div>
          )}
        </div>

        {/* MONTH */}
        <div className="filter-item">
          <label>Select Month</label>
          <div
            className="custom-select"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(open === "month" ? null : "month");
            }}
          >
            <span>{month ? formatMonth() : "Travel Month"}</span>
            <FaChevronDown className="dropdown-icon" />
          </div>

          {open === "month" && (
            <div className="destination-panel">
              <h4>Which month would you prefer?</h4>

              <div className="year-switch">
                <button onClick={() => setYear(y => y - 1)}>‹</button>
                <span>{year}</span>
                <button onClick={() => setYear(y => y + 1)}>›</button>
              </div>

              <div className="month-grid">
                {months.map((m) => (
                  <button
                    key={m}
                    className={`destination-chip ${month === m ? "active" : ""}`}
                    onClick={() => setMonth(m)}
                  >
                    {m}
                  </button>
                ))}
              </div>

              <div className="panel-actions">
                <button
                  className="reset-btn"
                  onClick={() => {
                    setMonth("");
                    setYear(2026);
                  }}
                >
                  RESET
                </button>
                <button className="done-btn" onClick={() => setOpen(null)}>
                  DONE
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="filter-item">
          <label>Select Night</label>
          <div
            className="custom-select"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(open === "nights" ? null : "nights");
            }}
          >
            <span>{nights ? `${nights}N` : "Nights"}</span>
            <FaChevronDown className="dropdown-icon" />
          </div>

          {open === "nights" && (
            <div className="destination-panel">
              <h4>How many nights would you like to cruise with us?</h4>

              <div className="month-grid">
                {nightsList.map((n) => (
                  <button
                    key={n}
                    className={`destination-chip ${nights === n ? "active" : ""}`}
                    onClick={() => setNights(n)}
                  >
                    {n} Nights
                  </button>
                ))}
              </div>

              <div className="panel-actions">
                <button className="reset-btn" onClick={() => setNights(null)}>
                  RESET
                </button>
                <button className="done-btn" onClick={() => setOpen(null)}>
                  DONE
                </button>
              </div>
            </div>
          )}
        </div>

        {/* CRUISE */}
        <div className="filter-item">
          <label>Select Cruise</label>
          <div
            className="custom-select"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(open === "cruise" ? null : "cruise");
            }}
          >
            <span>{cruise || "Cruise name?"}</span>
          </div>

          {open === "cruise" && (
            <div className="destination-panel">
              <h4>Choose your cruise</h4>

              <div className="destination-grid">
                {cruises.map((c) => (
                  <button
                    key={c}
                    className={`destination-chip ${cruise === c ? "active" : ""}`}
                    onClick={() => setCruise(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>

              <div className="panel-actions">
                <button className="reset-btn" onClick={() => setCruise("")}>
                  RESET
                </button>
                <button className="done-btn" onClick={() => setOpen(null)}>
                  DONE
                </button>
              </div>
            </div>
          )}
        </div>

        <button className="apply-bttn">Apply</button>
      </div>

      {/* SELECTED TAGS */}
      <div className="selected-filters">
        {(destination || month || nights || cruise) && (
          <button
            className="clear-all-btn"
            onClick={() => {
              setDestination("");
              setMonth("");
              setYear(2026);
              setNights(null);
              setCruise("");
            }}
          >
            Clear All ×
          </button>
        )}

        {destination && (
          <span className="filter-tag">
            {destination}
            <button onClick={() => setDestination("")}>×</button>
          </span>
        )}

        {month && (
          <span className="filter-tag">
            {formatMonth()}
            <button onClick={() => setMonth("")}>×</button>
          </span>
        )}

        {nights && (
          <span className="filter-tag">
            {nights} Nights
            <button className="close-btn" onClick={() => setNights(null)}>×</button>
          </span>
        )}

        {cruise && (
          <span className="filter-tag">
            {cruise}
            <button onClick={() => setCruise("")}>×</button>
          </span>
        )}
      </div>
    </section>
  );
};

export default FilterBox;
