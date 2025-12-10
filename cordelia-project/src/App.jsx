import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FraudAlert from "./components/FraudAlert/FraudAlert";
import ContactBar from "./components/ContactBar/ContactBar";
import NavBar from "./components/NavBar/NavBar";
import HeroCarousel from "./components/HeroSection/HeroCarousel";

import Blogs from "./Pages/Blogs";
import Offers from "./Pages/Offers";
import MeetTheFleet from "./OurShip/MeetTheFleet";
import FleetCard from "./OurShip/FleetCard";

import DepMumbai from "./Destination/DepMumbai/DepMumbai";
import DepChennai from "./Destination/DepChennai/DepChennai";

import Itinenary from "./Itineraries/Itinenary/Itinenary";
import Voyage from "./Itineraries/Voyage/Voyage";
import CruiseInbox from "./CruiseInbox/Cruiseinbox";
import Testimonials from "./Testimonials/Testimonials";
import RequestCall from "./RequestCall/RequestCall";
import Awards from "./Awards/Awards";
import DownloadApp from "./Download/DownloadApp";
import SafetyProtocols from "./SafetyProtocols/SafetyProtocols";

import Footer from "./Footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <div className="sticky-group">
          <FraudAlert />
          <ContactBar />
          <NavBar />
      </div>

      <Routes>
        <Route path="/" element={<HeroCarousel />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>
      
      <MeetTheFleet />
      <FleetCard />
      <DepMumbai />
      <DepChennai/>
      <Itinenary/>
      <Voyage />
      <CruiseInbox/>
      <Testimonials/>
      <RequestCall/>
      <Awards/>
      <DownloadApp/>
      <SafetyProtocols />
    </>
  );
}

export default App;
