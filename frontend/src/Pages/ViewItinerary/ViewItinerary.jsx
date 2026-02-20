import React from "react";
import { useParams, useLocation } from "react-router-dom";

import Kochi1 from "./Kochi1/Kochi1";

const ViewItinerary = () => {
  const { id } = useParams();
  const location = useLocation();

  const cruise =
    location.state?.selectedCruise ||
    JSON.parse(localStorage.getItem("selectedCruise"));

  return (
    <>
      <Kochi1 id={id} cruise={cruise} />
    </>
  );
};

export default ViewItinerary;