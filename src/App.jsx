import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import FraudAlert from "./components/FraudAlert/FraudAlert";
import ContactBar from "./components/ContactBar/ContactBar";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import Home from "./Home/Home";
import Blogs from "./Pages/Blogs/Blogs";
import Offers from "./Pages/Offers/Offers";
import CordeliaSky from "./Pages/CordeliaSky/CordeliaSky";
import WebCheckIn from "./Pages/WebCheckIn/WebCheckIn";
import FindCruise from "./Pages/Findcruise/Findcruise";
import Destinations from "./Pages/AllDestinations/Destinations";

import "./App.css";

function App() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (location.pathname !== "/") {
      setScrolled(false);
      return;
    }

    const handleScroll = () => {
      const y = window.scrollY || window.pageYOffset || 0;
      setScrolled(y > 150);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <>
      <div className="sticky-group">
        {location.pathname === "/" && <FraudAlert />}

        <ContactBar />
        <NavBar scrolled={scrolled} />
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/destinations" element={<Destinations/>} />
        <Route path="/CordeliaSky" element={<CordeliaSky />} />
        <Route path="/find-cruise" element={<FindCruise/>} />
        <Route path="/WebCheckIn" element={<WebCheckIn />} />
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
