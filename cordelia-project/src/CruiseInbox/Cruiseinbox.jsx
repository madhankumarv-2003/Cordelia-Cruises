import React from "react";
import "./CruiseInbox.css";
import img from "./images/newsletter-image.webp"; 
import img1 from "./images/element-05.svg"

const CruiseInbox = () => {
  return (
    <section className="newsletter-container mt-5 ms-2">
      <div className="newsletter-left mt-4 ms-2 ps-2">
        <h2>
          Get Cruise Deals Directly <br /> In Your Inbox
        </h2>

        <p className="subtitle">
          Subscribe now and set sail on a journey of endless adventure with our exclusive cruise newsletter
        </p>

        <div className="newsletter-input-box">
          <input type="email" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="newsletter-right">
        <div>
          <img className="icon-news" src={img} style={{width:"330px",height:"380px"}}></img>
        </div>
      </div>
      <div className="overlay-imgg mt-5">
              <img src={img1} style={{width:"800px",height:"100px"}}></img>
            </div>
    </section>
  );
};

export default CruiseInbox;
