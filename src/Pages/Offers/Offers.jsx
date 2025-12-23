import React from "react";
import "./Offers.css";

import Banner from "./images/year-end-sale-offer-page-desktop-banner.webp";
import logo from "./images/offers-new-icon.svg";
import img1 from "./images/exclusive-value-fare-offer-image.webp";
import img2 from "./images/companion-sail-free-offer-image.webp";
import img3 from "./images/cordelia-early-bird-offer-oct.webp";
import img4 from "./images/UnlimitedBeverage.webp";
import img5 from "./images/Book_now_pay_later_.webp";
import img6 from "./images/KidsSailFree_offer.webp";
import Tick from "./images/tick-icon.svg";

const offerCards = [
  {
    image: img1,
    title: "Enjoy Exclusive Prices",
    subtitle: "Sail more, spend less",
    points: [
      "Applicable on select sailings and cabin categories",
      "Kids sail free on select sailings",
      "This offer cannot be combined with any other existing promotion",
    ],
  },
  {
    image: img2,
    title: "Companion Sails Free",
    subtitle: "Cruise for two, pay for one",
    points: [
      "Offer valid on select sailings and cabin categories",
      "Taxes, fees & port charges apply",
      "This offer cannot be combined with any other existing promotion",
    ],
  },
  {
    image: img3,
    title: "Early Bird Offer",
    subtitle: "Book early & save more",
    points: [
      "Applicable on select sailings",
      "Limited-time availability",
      "This offer cannot be combined with any other existing promotion",
    ],
  },
  {
    image: img4,
    title: "Unlimited Beverages",
    subtitle: "Sip without limits",
    points: [
      "Unlimited beverages onboard",
      "Valid on select sailings",
      "Terms & conditions apply",
    ],
  },
  {
    image: img5,
    title: "Book Now Pay Later",
    subtitle: "Flexible payment options",
    points: [
      "Pay closer to sailing date",
      "Available on select departures",
      "Terms & conditions apply",
    ],
  },
  {
    image: img6,
    title: "Kids Sail Free",
    subtitle: "Family-friendly savings",
    points: [
      "Kids sail free on select sailings",
      "Cabin category restrictions apply",
      "Limited-time offer",
    ],
  },
];

const Offers = () => {
  return (
    <div className="deals-container">
      {/* 🔷 Banner */}
      <div
        className="deals-banner"
        style={{ backgroundImage: `url(${Banner})` }}
      />

      {/* 🔷 Heading */}
      <div className="deals-content">
        <h2>Cruise Deals Worth Dropping Anchor For</h2>
        <p>
          Discover exclusive fares, seasonal discounts, and limited-time deals
          designed to make your next cruise even more rewarding.
        </p>
      </div>

      {/* 🔷 Offer Cards */}
      <div className="offers-wrapper mb-5">
        {offerCards.map((offer, index) => (
          <div className="offer-card" key={index}>
            <div
              className="offer-image"
              style={{ backgroundImage: `url(${offer.image})` }}
            />

            <div className="offer-body">
              <div className="offer-header">
                <img src={logo} alt="Offer logo" className="offer-logo" />
                <h3 className="offer-title">{offer.title}</h3>
              </div>
              <p className="offer-subtitle mt-1 ms-4">{offer.subtitle}</p>

              <ul className="offer-list mt-2">
                {offer.points.map((point, i) => (
                  <li key={i}>
                    <img src={Tick} alt="tick" className="tick-icon" />
                    {point}
                  </li>
                ))}
              </ul>

              <button className="offer-btn">Find a Cruise</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
