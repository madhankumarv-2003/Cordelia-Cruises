import React, { useState } from "react";
import arrow from './back-arrow-icon.svg';
import "./WebCheckIn.css";

const WebCheckIn = () => {
  const [formData, setFormData] = useState({
    bookingId: "",
    firstName: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Check-in Data:", formData);
    alert("Check-in Submitted");
  };

  return (
    <div className="checkin-page">
      {/* Header */}
      <div className="checkin-header">
        <img src={arrow} alt="back-arrow" className="back-arrow"/>
        <span>Web Check-in</span>
      </div>

      {/* Main Content */}
      <div className="checkin-container">
        {/* Left Form */}
        <form className="checkin-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="bookingId"
            placeholder="Booking Id"
            value={formData.bookingId}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <button type="submit">Check-In</button>
        </form>

        {/* Right Notes */}
        <div className="checkin-notes">
          <h3>Important Notes</h3>
          <ul>
            <li>
              Web Check In is mandatory for all the guests as per the regulatory
              compliance by the Government of India.
            </li>
            <li>
              Pregnant women are only allowed to sail if pregnant for 24
              completed weeks or less at the time of cruise disembarkation.
            </li>
            <li>
              The infant must have an ID with a photo, also authorization of
              either parent if travelling with only one parent.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WebCheckIn;
