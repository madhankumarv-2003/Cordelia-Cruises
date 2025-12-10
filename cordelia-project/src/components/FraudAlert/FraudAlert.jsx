import React, { useState } from "react";
import logo from "./Images/info_red_home.svg";
import "./FraudAlert.css";

const FraudAlert = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fraud-alert pt-2 py-1">
      <span className="icon">
        <img src={logo} alt="alert"/>
      </span>
      <span className="space">
        <strong>Fraud Alert:</strong> Beware of fake websites like cordeliacruise.in or{" "}
        cordeliacurise.com. Cordelia Cruises has no affiliation with
        these domains. We only use emails ending in{" "}
        <a href="mailto:info@cordeliacruises.com">@cordeliacruises.com</a>.
      </span>

      <button className="close-btn fs-10" onClick={() => setVisible(false)}>
        ✖
      </button>
    </div>
  );
};

export default FraudAlert;
