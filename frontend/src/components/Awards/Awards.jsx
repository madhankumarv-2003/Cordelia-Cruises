import React from "react";
import "./Awards.css";

import Award1 from "./images/Bestcruise.svg";
import Award2 from "./images/Excellence.svg";
import Award3 from "./images/Highsea.svg";
import Award4 from "./images/Iconicholoday.svg";
import Award5 from "./images/Maritime.svg";
import Award6 from "./images/Iconic-wedding-corporate-award-logo-v2.svg";
import img from "./images/great-place-to-work-logo.svg"

const Awards = () => {
  const awards = [
    {
      img: Award1,
    },
    {
      img: Award2,
    },
    {
      img: Award3,
    },
    {
      img: Award4,
    },
    {
      img: Award5,
    }
  ];

  return (
    <div className="mt-5 py-5">
    <div className="awards-section">
      <h2>Awards & Recognitions</h2>

      <div className="awards-list mt-0 gap-2">
        <img className="award-border" src={img} style={{width:"135px"}}></img>
        <img src={Award6} className="ms-1" style={{width:"160px"}}></img>
        {awards.map((item, index) => (
          <div className="award-card ms-2" key={index}>
            <img src={item.img} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Awards;
