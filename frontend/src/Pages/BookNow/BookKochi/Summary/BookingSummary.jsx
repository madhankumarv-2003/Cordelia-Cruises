import React, { useState } from "react";
import "./BookingSummary.css";

export default function BookingSummary({ booking }) {

  const [isNRI, setIsNRI] = useState(false);
  const [hasGST, setHasGST] = useState(false);

  if (!booking) return <h2>No Booking Data</h2>;

  const {
    selectedCabin,
    cabins = [],
    totalGuests = 0,
    totalPrice = 0,
    getDuration,
    cruise
  } = booking;

  return (
    <div className="booking-wrapper">

      {/* ================= LEFT SIDE ================= */}
      <div className="booking-left">

        {/* BOOKING CARD */}
        <div className="booking-card">
          <h4 className="booking-id">Booking ID: C-JLYF061946</h4>

          <p>
            {cruise?.ports?.replace(" • ", " - ")} ({getDuration?.()})
          </p>

          <hr />

          <h3>Visiting Ports:</h3>
          <p className="p1">{cruise?.ports?.replace(" • ", " | ")}</p>

          <hr />

          <div className="info-row">
            <div>
              <p className="label">Sailing Dates</p>
              <p>{cruise?.start} - {cruise?.end}</p>
            </div>

            <div>
              <p className="label">Total Cabins</p>
              <p>{cabins.length.toString().padStart(2, "0")}</p>
            </div>

            <div>
              <p className="label">Total Guests</p>
              <p>{totalGuests.toString().padStart(2, "0")}</p>
            </div>

            <div>
              <p className="label">Cruise</p>
              <p>EMPRESS</p>
            </div>
          </div>
        </div>

        {/* CABIN CARD */}
        <div className="cabin-card mt-4">
          <div className="cabin-left">
            <p>Cabin 01</p>
            <h3>{selectedCabin?.title}</h3>
          </div>

          <div className="cabin-middle">
            <h4>Total Guests: {totalGuests}</h4>

            <div className="guest-row">
              <div>
                <p>Adults</p>
                <strong>{cabins[0]?.adults || 0}</strong>
              </div>
              <div>
                <p>Children</p>
                <strong>{cabins[0]?.children || 0}</strong>
              </div>
              <div>
                <p>Infants</p>
                <strong>{cabins[0]?.infant || 0}</strong>
              </div>
            </div>
          </div>

          <div className="cabin-img">
            <img src={selectedCabin?.image} alt="cabin" />
          </div>
        </div>

        {/* APPLY COUPON */}
        <div className="simple-card mt-4">
          <h3>🎟️ Apply Coupon</h3>

          <div className="coupon-box">
            <input placeholder="Have a coupon code?" />
            <button>Apply</button>
          </div>
        </div>

        {/* BILLING DETAILS */}
        <div className="billing-card mt-4">
          <h3 className="billing-title">Billing Details</h3>

          <label className="check-row">
            <input
              type="checkbox"
              checked={isNRI}
              onChange={(e) => setIsNRI(e.target.checked)}
            />
            <span>I am a NRI</span>
          </label>

          <div className={`billing-grid ${isNRI ? "nri" : ""}`}>

            {!isNRI && <input placeholder="Pan Number" />}

            <input
              placeholder={
                isNRI
                  ? "Full Name as per Government ID"
                  : "Full Name as per Pan Card"
              }
              className={isNRI ? "full-width" : ""}
            />

            <input placeholder="Email" />

            <div className="phone-box">
              <select>
                <option>+91</option>
              </select>
              <input placeholder="Phone Number" />
            </div>

            <input placeholder="Address" />
            <input placeholder="Pincode" />

          </div>
        </div>

        {/* GST DETAILS */}
        <div className="gst-card mt-4">

          <label className="check-row gst-check">
            <input
              type="checkbox"
              checked={hasGST}
              onChange={(e) => setHasGST(e.target.checked)}
            />

            <span>
              I Have a GST Number
              <small>
                (Kindly submit GST details for seamless filing of your tax return)
              </small>
            </span>
          </label>

          {hasGST && (
            <div className="gst-content">
              <div className="gst-grid">
                <input placeholder="GSTIN" />
                <input placeholder="Name" />
              </div>

              <p className="gst-note">
                Note: GST Number once submitted will not be subject to change.
              </p>

            </div>
          )}

        </div>

      </div>
      {/* ===== END LEFT SIDE ===== */}


      {/* ================= RIGHT SIDE ================= */}
      <div className="booking-right">

        <div className="price-card">
          <h3>Price Details</h3>

          <div className="total-box">
            <span>Grand Total</span>
            <strong>₹ {totalPrice.toLocaleString()}</strong>
          </div>

          <p className="emi">
            No-Cost EMI starts at ₹ {(totalPrice / 9).toFixed(0)} /month
          </p>
        </div>

        <div className="agree-box">
          <input type="checkbox" />
          <span>By clicking Agree and Continue, I hereby:</span>
        </div>

        <button className="proceed-btn">Proceed</button>

      </div>

    </div>
  );
}