import React, { useState } from "react";
import { FaSortAmountDown, FaFilter } from "react-icons/fa";

export default function CruiseResults() {
  const initialData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      dateFrom: "07 Jan 2026",
      dateTo: "10 Jan 2026",
      tripType: "One Way Trip",
      title: "Kochi - Lakshadweep - At Sea - Mumbai",
      nights: 3,
      days: 4,
      ports: ["Kochi", "Lakshadweep", "Mumbai"],
      ship: "EMPRESS",
      offers: [
        "Exclusive Value Fare",
        "2nd Guest Free",
        "Kids Sail Absolutely Free",
        "3rd/4th Pax Free",
      ],
      price: 25000,
    },
  ];

  const [data, setData] = useState(initialData);

  const sortByPrice = () => {
    setData([...data].sort((a, b) => a.price - b.price));
  };

  const filterByNights = () => {
    setData(initialData.filter((c) => c.nights <= 3));
  };

  return (
    <>
      {/* ================= UI ================= */}
      <div className="container">
        <div className="toolbar">
          <h3>Cruise Search Results (25)</h3>
          <div className="toolbar-actions">
            <button onClick={sortByPrice}>
              <FaSortAmountDown /> Sort By
            </button>
            <button onClick={filterByNights}>
              <FaFilter /> Filter By
            </button>
          </div>
        </div>

        {data.map((cruise) => (
          <div className="cruise-card" key={cruise.id}>
            <div className="card-image">
              <img src={cruise.image} alt="Cruise" />
              <span className="image-badge">
                Shore Excursions Available
              </span>
            </div>

            <div className="card-content">
              <div className="card-header">
                <span className="date">
                  {cruise.dateFrom} → {cruise.dateTo} | {cruise.tripType}
                </span>
                <span className="ship">{cruise.ship}</span>
              </div>

              <h4>
                {cruise.title} ({cruise.nights}N/{cruise.days}D)
              </h4>

              <p className="ports">
                <strong>Visiting Ports</strong><br />
                {cruise.ports.join(" | ")}
              </p>

              <div className="offers">
                {cruise.offers.map((o, i) => (
                  <span key={i}>✔ {o}</span>
                ))}
              </div>

              <button className="price-btn">Reveal Prices</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
