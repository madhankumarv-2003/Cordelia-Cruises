import React from "react";
import "./RequestCall.css";
import CallbackImg from "./images/call-back-desktop-image.webp"; // change to your image path

const RequestCall = () => {
  return (
    <div className="callback-container mt-5">
      <div className="callback-left">
        <img src={CallbackImg} alt="Call Support" />
      </div>

      <div className="callback-right mt-2">
        <h2>Request a call back</h2>

        <div className="input-group">
          <input type="text" placeholder="Full Name" />
        </div>

        <div className="phone-group">
          <select>
            <option>+91</option>
            <option>+1</option>
            <option>+44</option>
          </select>
          <input type="text" placeholder="Phone Number" />
        </div>

        <button className="submit-btn">Submit</button>
      </div>
    </div>
  );
};

export default RequestCall;
