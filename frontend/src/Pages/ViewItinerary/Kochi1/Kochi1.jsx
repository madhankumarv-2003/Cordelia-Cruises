import React from "react";
import { useNavigate } from "react-router-dom";

import { FaShip, FaWalking, FaPencilAlt } from "react-icons/fa";

import Kochi1Slider from "./Kochi1Slider/Kochi1Slider";
import Inclusions from "./Inclusions/Inclusions";
import Itinerary from "./Itinerary/Itinerary";

import "./Kochi1.css";

const Kochi1 = ({ cruise }) => {
  const navigate = useNavigate();

  const goToBook = (item) => {
    localStorage.setItem("selectedCruise", JSON.stringify(item));

    navigate(`/book/${item.id}`, {
      state: { selectedCruise: item }
    });
  };

  if (!cruise) {
    return <h2 style={{ padding: "50px" }}>Cruise Not Found</h2>;
  }

  return (
    <div>
      <img
        src={cruise.image}
        className="kochi-img"
        alt={cruise.title}
      />

      <div className="cruisecard_container">

        {/* LEFT BLOCK */}
        <div className="cruisecard_left">

          <h2 className="cruisecard_title">
            {cruise.title}
          </h2>

          <div className="cruisecard_row">

            <div className="cruisecard_item">
              <FaShip className="card_icon" />
              <strong>Embarkation:</strong>&nbsp;
              <span>{cruise.start}</span>
            </div>

            <div className="cruisecard_item">
              <FaWalking className="card_icon" />
              <strong>Disembarkation:</strong>&nbsp;
              <span>{cruise.end}</span>
            </div>

          </div>

          <p className="cruisecard_portsTitle">Visiting Ports:</p>
          <p className="cruisecard_ports">
            {cruise.ports}
          </p>

        </div>

        {/* DIVIDER */}
        <div className="cruisecard_divider"></div>

        {/* RIGHT BLOCK */}
        <div className="cps_wrapper">
          <p className="cps_label">Starting From</p>
          <h2 className="cps_price">{cruise.price}</h2>
          <small className="cps_subtext">
            Excl. GST Per Person in Double Occupancy
          </small>
        </div>

        <div>
          <button
            className="cps_btnCabin"
            onClick={() => goToBook(cruise)}
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

      <Kochi1Slider cruise={cruise} />
      <Itinerary cruise={cruise} />
      <Inclusions cruise={cruise} />

    </div>
  );
};

export default Kochi1;