import React from "react";
import { useParams } from "react-router-dom";

import BookKochi from "./BookKochi/BookKochi";
// import Itinerary2 from "../itineraries/Itinerary2";
// import Itinerary3 from "../itineraries/Itinerary3";
// import Itinerary4 from "../itineraries/Itinerary4";
// import Itinerary5 from "../itineraries/Itinerary5";
// import Itinerary6 from "../itineraries/Itinerary6";
// import Itinerary7 from "../itineraries/Itinerary7";
// import Itinerary8 from "../itineraries/Itinerary8";
// import Itinerary9 from "../itineraries/Itinerary9";
// import Itinerary10 from "../itineraries/Itinerary10";
// import Itinerary11 from "../itineraries/Itinerary11";
// import Itinerary12 from "../itineraries/Itinerary12";

const itineraryMap = {
  1: BookKochi,
};

const BookNow = () => {
  const { id } = useParams();
  const SelectedItinerary = itineraryMap[id];

  return SelectedItinerary ? <SelectedItinerary /> : <h2>Itinerary Not Found</h2>;
};

export default BookNow;
