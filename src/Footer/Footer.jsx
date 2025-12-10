import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (    
    <footer className="footer">
      <div className="footer-left">
        <h3 className="footer-title">Cordelia Cruises</h3>
        <p className="footer-text">
          Cordelia Cruises by Waterways Leisure Tourism Limited is India’s premium cruise line.
          Cordelia aspires to promote and drive the cruise culture in India through stylish,
          luxurious and inherently Indian experiences.
        </p>

        {/* Social Icons */}
        <div className="footer-social">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Book Now:</h4>
          <p><FaPhoneAlt /> 022-68811111</p>

          <h4>Group Travel Desk:</h4>
          <p><FaPhoneAlt /> 022-65554206</p>
          <p><FaEnvelope /> travelops@cordeliacruises.com</p>

          <h4>Customer Support:</h4>
          <p><FaPhoneAlt /> 022-68811190</p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="footer-links">
        <h3>Links</h3>
        <ul>
          <li>Group Booking Quotation</li>
          <li>Group Booking Form</li>
          <li>Agent Login</li>
          <li>About Us</li>
          <li>Ports</li>
          <li>Careers</li>
          <li>Blogs</li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="footer-policy">
        <h3>Privacy & Policy</h3>
        <ul>
          <li>Privacy Policy</li>
          <li>Onboard Policy</li>
          <li>Healthy Waves Policy</li>
          <li>Clean Waves Policy</li>
          <li>FAQ</li>
          <li>Terms & Conditions</li>
          <li>Passenger Cruise Ticket Contract</li>
          <li>Cruise SOP</li>
          <li>User Agreement - Visa</li>
          <li>No Sail Policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
