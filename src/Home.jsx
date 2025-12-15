import React from "react";

import HeroCarousel from "./components/HeroSection";
import MeetTheFleet from "../../components/OurShip/MeetTheFleet";
import FleetCard from "../../components/OurShip/FleetCard";
import DepMumbai from "../../components/Destination/DepMumbai/DepMumbai";
import DepChennai from "../../components/Destination/DepChennai/DepChennai";
import Itinenary from "../../components/Itineraries/Itinenary/Itinenary";
import Voyage from "../../components/Itineraries/Voyage/Voyage";
import CruiseInbox from "../../components/CruiseInbox/Cruiseinbox";
import Testimonials from "../../components/Testimonials/Testimonials";
import RequestCall from "../../components/RequestCall/RequestCall";
import Awards from "../../components/Awards/Awards";
import DownloadApp from "../../components/Download/DownloadApp";
import SafetyProtocols from "../../components/SafetyProtocols/SafetyProtocols";

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <MeetTheFleet />
      <FleetCard />
      <DepMumbai />
      <DepChennai />
      <Itinenary />
      <Voyage />
      <CruiseInbox />
      <Testimonials />
      <RequestCall />
      <Awards />
      <DownloadApp />
      <SafetyProtocols />
    </>
  );
};

export default Home;
