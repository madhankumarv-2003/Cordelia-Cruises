import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaBed,
  FaUsers,
  FaShip,
  FaChevronRight
} from "react-icons/fa";
import "./BookingSummary.css";

export default function BookingSummary({ bookingData }) {
  const {
    bookingId = "C-JFUKQ97632",
    selectedCabin = {},
    cabins = [],
    totalGuests = 1,
    totalPrice = 58405,
  } = bookingData || {};

  const [isAgreed, setIsAgreed] = useState(false);

  if (!selectedCabin) return null;

  return (
    <div className="booking_container">

      {/* LEFT SIDE */}
      <div className="booking_left">

        <div className="booking_card">

          <p className="booking_id">
            Booking ID: <span>{bookingId}</span>
          </p>

          <h2>Mumbai - Mumbai (2N/3D)</h2>

          <div className="divider" />

          <div className="visiting_ports">
            <h4>Visiting Ports:</h4>
            <p>Mumbai | Mumbai</p>
          </div>

          <div className="divider" />

          <div className="info_row">
            <div>
              <FaCalendarAlt className="info_icon" />
              <div>
                <p>Sailing Dates</p>
                <strong>7th Feb 2026 - 9th Feb 2026</strong>
              </div>
            </div>

            <div>
              <FaBed className="info_icon" />
              <div>
                <p>Total Cabins</p>
                <strong>{cabins.length}</strong>
              </div>
            </div>

            <div>
              <FaUsers className="info_icon" />
              <div>
                <p>Total Guests</p>
                <strong>{totalGuests}</strong>
              </div>
            </div>

            <div>
              <FaShip className="info_icon" />
              <div>
                <p>Cruise</p>
                <strong>EMPRESS</strong>
              </div>
            </div>
          </div>
        </div>

        {/* CABIN CARD */}
        {cabins.map((cabin, index) => (
          <div key={cabin.id} className="cabin_card">

            <div className="cabin_left">
              <p>Cabin {index + 1}</p>
              <h3>{selectedCabin.title}</h3>
            </div>

            <div className="cabin_middle">
              <h4>
                <FaUsers className="guest_icon" /> Total Guests:{" "}
                {cabin.adults + cabin.children + cabin.infants}
              </h4>

              <div className="guest_row">
                <div>
                  <p>Adults</p>
                  <strong>{cabin.adults}</strong>
                </div>
                <div>
                  <p>Children</p>
                  <strong>{cabin.children}</strong>
                </div>
                <div>
                  <p>Infants</p>
                  <strong>{cabin.infants}</strong>
                </div>
              </div>
            </div>

            <div className="cabin_image">
              <img
                src={selectedCabin.image}
                alt="cabin"
              />
            </div>

          </div>
        ))}

      </div>

      {/* RIGHT SIDE */}
      <div className="booking_right">

        <div className="price_card">
          <div className="price_header">
            <h3>Price Details</h3>
            <span>View Price Breakup</span>
          </div>

          <div className="price_total">
            <p>Grand Total</p>
            <h2>₹ {totalPrice.toLocaleString()}</h2>
          </div>
        </div>

        <div className="agree_box">
          <input
            type="checkbox"
            checked={isAgreed}
            onChange={() => setIsAgreed(!isAgreed)}
          />
          <span>By clicking Agree and Continue, I hereby:</span>
          <FaChevronRight />
        </div>

        <button
          className="proceed_btn"
          disabled={!isAgreed}
        >
          Proceed
        </button>

      </div>
    </div>
  );
}
