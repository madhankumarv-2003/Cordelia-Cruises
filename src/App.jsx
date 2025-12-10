import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FraudAlert from "./components/FraudAlert/FraudAlert";
import ContactBar from "./components/ContactBar/ContactBar";
import NavBar from "./components/NavBar/NavBar";
import HeroCarousel from "./components/HeroSection/HeroCarousel";

import MeetTheFleet from "./components//OurShip/MeetTheFleet";
import FleetCard from "./components/OurShip/FleetCard";
import DepMumbai from "./components/Destination/DepMumbai/DepMumbai";
import DepChennai from "./components/Destination/DepChennai/DepChennai";
import Itinenary from "./components/Itineraries/Itinenary/Itinenary";
import Voyage from "./components/Itineraries/Voyage/Voyage";
import CruiseInbox from "./components/CruiseInbox/Cruiseinbox";
import Testimonials from "./components/Testimonials/Testimonials";
import RequestCall from "./components/RequestCall/RequestCall";
import Awards from "./components/Awards/Awards";
import DownloadApp from "./components/Download/DownloadApp";
import SafetyProtocols from "./components/SafetyProtocols/SafetyProtocols";
import Footer from "./components/Footer/Footer";

import Blogs from "./Pages/Blogs";
import Offers from "./Pages/Offers";

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
      <Footer/>
    </>
  );
}

export default App;
