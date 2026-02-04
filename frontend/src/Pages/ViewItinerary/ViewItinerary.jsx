import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Kochi1 from "./Kochi1/Kochi1";

const itineraryMap = {
  1: Kochi1,
};

const ViewItinerary = () => {
  const { id } = useParams();
  const [showLogin, setShowLogin] = useState(false);

  const SelectedItinerary = itineraryMap[id];

  return (
    <>
      {SelectedItinerary ? (
        <SelectedItinerary openLogin={() => setShowLogin(true)} />
      ) : (
        <h2>Itinerary Not Found</h2>
      )}

      {showLogin && (
        <LoginModal closeModal={() => setShowLogin(false)} />
      )}
    </>
  );
};

export default ViewItinerary;
