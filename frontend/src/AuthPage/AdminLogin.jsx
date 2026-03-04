import React, { useState } from "react";
import "./AdminLogin.css";
import { useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import img from "./Images/Final_Home_Web_New_Banner.webp";

export default function AdminLogin() {
  const navigate = useNavigate();

  // STATE
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // REGEX
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/;

  // LOGIN LOGIC
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // EMAIL VALIDATION
    if (!emailRegex.test(email)) {
      setError("Enter a valid email address");
      return;
    }

    // PASSWORD VALIDATION
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 4 characters and include letters & numbers"
      );
      return;
    }

    // DEMO LOGIN CHECK
    if (email === "madhan29b@gmail.com" && password === "Madh@2727") {
        localStorage.setItem("token", "admin");
        alert("Login Successful");
        console.log("Login Success")
        navigate("/admin");
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div className="admin-login-page">

      {/* LEFT SIDE IMAGE */}
      <div className="admin-login-left">
        <img
          src={img}
          alt="Cruise Banner"
          className="admin-banner-image"
        />
      </div>

      {/* RIGHT SIDE LOGIN */}
      <div className="admin-login-right">

        <form className="admin-login-form" onSubmit={handleLogin}>
          <h2 className="admin-login-title">Admin Login</h2>

          <label>Email *</label>
          <input
            className="admin-login-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password *</label>
          <div className="admin-password-box">
            <input
              className="admin-login-input"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <span
              className="admin-password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* ERROR MESSAGE */}
          {error && <p className="admin-error">{error}</p>}

          <div className="admin-options">
            <a href="#" className="admin-forgot">
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="admin-login-btn">
            Login
          </button>
        </form>

        <p className="admin-support">
          For any issues, while registering please contact us at
          <br />
          <a href="#">022-65545206</a> /{" "}
          <a href="#">travelpartners@cordeliacruises.com</a>
        </p>

        <h3 className="admin-social-title">
          For latest updates and offers follow us on :
        </h3>

        <div className="admin-social-icons">
          <FaFacebookF />
          <FaInstagram />
          <FaXTwitter />
          <FaYoutube />
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  );
}