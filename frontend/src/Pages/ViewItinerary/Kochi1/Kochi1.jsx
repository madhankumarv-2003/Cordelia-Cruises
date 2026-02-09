import React from "react";
import { useNavigate } from "react-router-dom";
import kochi from "./Images/mumbai-mumbai-map-sep-desktop (1).webp";
import { FaShip, FaWalking, FaPencilAlt } from "react-icons/fa";

import Kochi1Slider from "./Kochi1Slider/Kochi1Slider";
import Inclusions from "./Inclusions/Inclusions";
import Itinerary from "./Itinerary/Itinerary";

import "./Kochi1.css";

const Kochi1 = () => {
  const navigate = useNavigate();

  const cruisedata = {
    title: "Mumbai - At Sea - Mumbai",
    duration: "2N/3D",
    embark: "Jan 24, 2026",
    disembark: "Jan 26, 2026",
    ports: ["Mumbai", "Goa", "Goa", "Mumbai"],
    price: "43,424",
  };

  return (
    <div>
      <img src={kochi} className="kochi-img" alt="Cruise Route" />

      <div className="cruisecard_container">
        {/* LEFT BLOCK */}
        <div className="cruisecard_left">
          <h2 className="cruisecard_title">
            {cruisedata.title}
            <span className="cruisecard_duration">
              {cruisedata.duration}
            </span>
          </h2>

          <div className="cruisecard_row">
            <div className="cruisecard_item">
              <FaShip className="card_icon" />
              <strong>Embarkation:</strong>&nbsp;
              <span>{cruisedata.embark}</span>
            </div>

            <div className="cruisecard_item">
              <FaWalking className="card_icon" />
              <strong>Disembarkation:</strong>&nbsp;
              <span>{cruisedata.disembark}</span>
            </div>
          </div>

          <p className="cruisecard_portsTitle">Visiting Ports:</p>
          <p className="cruisecard_ports">
            {cruisedata.ports.join(" | ")}
          </p>
        </div>

        {/* DIVIDER */}
        <div className="cruisecard_divider"></div>

        {/* RIGHT BLOCK */}
        <div className="cps_wrapper">
          <p className="cps_label">Starting From</p>
          <h2 className="cps_price">₹{cruisedata.price}</h2>
          <small className="cps_subtext">
            Excl. GST Per Person in Double Occupancy
          </small>
        </div>

        <div>
          <button
            className="cps_btnCabin"
            onClick={() => navigate("/find-cruise")}
          >
            View Cabins
          </button>

          <button
            className="cps_btnChange ms-3"
            onClick={() => navigate("/find-cruise")}
          >
            Change Itinerary
            <FaPencilAlt className="cps_changeIcon" />
          </button>

        </div>
      </div>

      <Kochi1Slider />
      <Itinerary />
      <Inclusions />
    </div>
  );
};

export default Kochi1;
