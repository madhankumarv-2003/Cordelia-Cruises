import React from "react";
import { useLocation } from "react-router-dom";
import Kochi1 from "./BookKochi/BookKochi";

const ViewItinerary = () => {

  const location = useLocation();

  const cruise =
    location.state?.selectedCruise ||
    JSON.parse(localStorage.getItem("selectedCruise"));

  if (!cruise) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h2>No Cruise Selected</h2>
      </div>
    );
  }

  return <Kochi1 cruise={cruise} />;
};

export default ViewItinerary;
