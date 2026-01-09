import React, { useState } from "react";
import "./Login.css";

const Login = ({ onClose }) => {
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    if (!phone || phone.length < 10) {
      alert("Enter a valid phone number");
      return;
    }
    console.log("OTP sent to:", phone);
  };

  return (
    <div className="modal-overlay">
      <div className="login-modal">
        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>×</button>

        {/* Logo */}
        <div className="logo">
          <span className="logo-icon">C</span>
        </div>

        <h2>Login/Register</h2>

        <p className="subtitle">
          You will receive a 4-digit code for your mobile number verification.
        </p>

        {/* Phone Input */}
        <div className="phone-input">
          <select>
            <option value="+91">+91</option>
          </select>
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* Button */}
        <button className="continue-btn" onClick={handleSubmit}>
          Continue
        </button>

        {/* Footer Text */}
        <p className="terms">
          By entering the OTP and clicking continue, I confirm that I have read,
          understood and agree with the{" "}
          <span>Terms and Conditions</span> and <span>Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
