import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";
import img from "./images/cordelia-new-white-logo.svg";
import seawave from "../SafetyProtocols/images/footer-wave-desktop.svg";

import "./Footer.css";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (    
    <div>
    <img src={seawave} className="footer-wave"></img>
    <footer className="footer">
      <div className="footer-left">
        <img src={img}></img>
        <p className="footer-text py-4">
          Cordelia Cruises by Waterways Leisure Tourism Limited 
          (Formerly known as Waterways Leisure Tourism Private Limited) is India’s 
          premium cruise line. True to its name, Cordelia aspires to promote and 
          drive the cruise culture in India through experiences that are stylish, 
          luxurious and most importantly, inherently Indian.
        </p>

        {/* Social Icons */}
        <div className="footer-social">
          <FaLinkedinIn/>
          <FaInstagram />
          <FaXTwitter />
           <FaFacebookF />
          <FaYoutube />
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Book Now:</h4>
          <p className="pb-4"><FaPhoneAlt /> 022-68811111</p>

          <h4>Group Travel Desk:</h4>
          <p><FaPhoneAlt /> 022-65554206</p>
          <p6>(Mon to Fri - 10 AM to 7 PM)<br></br> (Only for our Travel Partners)</p6>
          <p className="pb-4"><FaEnvelope /> travelops@cordeliacruises.com</p>

          <h4>Customer Support:</h4>
          <p><FaPhoneAlt /> 022-68811190</p>
          <p6>(Mon to Fri - 9 AM to 8 PM)<br></br> (Sat / Sun and Public Holidays - 10 AM to 7 PM)</p6>
          <p className="pt-4"><FaEnvelope /> info@cordeliacruises.com</p>
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
            <li>Valet Services Mumbai</li>
            <li>Ports</li>
            <li>Website T&C</li>
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
          <li>Terms and Conditions</li>
          <li>Passenger Cruise Ticket Contract</li>
          <li>Cruise SOP</li>
          <li>Investor Relation</li>
          <li>User Agreement - Visa</li>
          <li>Privacy Policy - Visa</li>
          <li>Disclaimer Against Frauds</li>
          <li>No Sail Policy</li>
        </ul>
      </div>
    </footer>
    <div className="copy-right d-flex align-items-center justify-content-center p-3">© 2022 Cordelia Cruises All Rights Reserved</div>
    </div>
  );
};

export default Footer;
