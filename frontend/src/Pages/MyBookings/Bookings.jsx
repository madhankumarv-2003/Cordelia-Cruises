import React, { useState } from "react";
import "./Bookings.css";

const Bookings = () => {
  const [tab, setTab] = useState("upcoming");

  return (
    <div className="bookings-wrapper">
      {/* Banner */}
      <div className="bookings-banner">
        <h1>My Bookings</h1>
      </div>

      {/* Tabs */}
      <div className="bookings-tabs">
        <button
          className={tab === "upcoming" ? "active" : ""}
          onClick={() => setTab("upcoming")}
        >
          Upcoming
        </button>
        <button
          className={tab === "completed" ? "active" : ""}
          onClick={() => setTab("completed")}
        >
          Completed
        </button>
        <button
          className={tab === "cancelled" ? "active" : ""}
          onClick={() => setTab("cancelled")}
        >
          Cancelled
        </button>
      </div>

      {/* Content */}
      <div className="bookings-content">
        {tab === "upcoming" && <p>Your Upcoming Bookings (00)</p>}
        {tab === "completed" && <p>Your Completed Bookings (00)</p>}
        {tab === "cancelled" && <p>Your Cancelled Bookings (00)</p>}
      </div>
    </div>
  );
};

export default Bookings;
