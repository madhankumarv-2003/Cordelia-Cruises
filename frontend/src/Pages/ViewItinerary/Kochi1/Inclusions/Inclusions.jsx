import React from "react";

import {FaChevronRight } from "react-icons/fa";
import Tick from "./itinerary-tick-icon.svg";
import "./Inclusions.css";

const nights = ["3 Night"];

const shows = [
  { name: "Indian Cinemagic", values: [true] },
  { name: "Balle Balle", values: [true] },
  { name: "Burlesque Show*", values: [true ] },
  { name: "Romance In Bollywood", values: [false ] },
  { name: "Magician’s Cut", values: [true ] },
  { name: "Magical Evening*", values: [false ] },
  { name: "Magical Workshop*", values: [true ] },
];

const Inclusions = () => {
  return (
    <section className="ci_container">
      {/* LEFT CARD */}
      <div className="ci_left">
        <h3 className="ci_title">Inclusions</h3>
        <hr></hr>

        <ul className="ci_list">
          <li><img src={Tick} className="tick" />  Inclusive of all meals at Food Court & Starlight Restaurant</li>
          <li><img src={Tick} className="tick" />  Jain food available at Starlight</li>
          <li><img src={Tick} className="tick" />  All inclusive unlimited beverage package</li>
        </ul>

        <p className="ci_note italic">Note: Regular beverage package included.*</p>
        <a href="#" className="ci_link">
          View Inclusions & Exclusions <FaChevronRight />
        </a>
      </div>

      {/* RIGHT TABLE */}
      <div className="ci_right">
        {/* HEADER */}
        <div
          className="ci_tableHeader"
          style={{
            gridTemplateColumns: `1fr repeat(${nights.length}, 190px)`,
          }}
        >
          <div className="ci_headerLeft">Entertainment Shows</div>

          {nights.map((night, i) => (
            <div className="ci_headerCol" key={i}>
              {night}
            </div>
          ))}
        </div>

        {/* ROWS */}
        {shows.map((show, i) => (
          <div
            className="ci_row"
            key={i}
            style={{
              gridTemplateColumns: `1fr repeat(${nights.length}, 200px)`,
            }}
          >
            <div className="ci_showName">{show.name}</div>

            {show.values.map((val, j) => (
              <div
                key={j}
                className={`ci_icon ${val ? "ci_yes" : "ci_no"}`}
              >
                {val ? <img src={Tick} className="tick" /> : "✕"}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Inclusions;
