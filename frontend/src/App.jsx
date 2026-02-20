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
import CordeliaSun from "./Pages/CordeliaSun/CordeliaSun";
import CordeliaEmpress from "./Pages/CordeliaEmpress/CordeliaEmpress";
import FindCruise from "./Pages/Findcruise/Findcruise";
import Destinations from "./Pages/AllDestinations/Destinations";
import WebCheckIn from "./Pages/WebCheckIn/WebCheckIn";
import Bookings from "./Pages/MyBookings/Bookings";
import Profile from "./Pages/MyProfile/Profile";
import ViewItinerary from "./Pages/ViewItinerary/ViewItinerary";
import BookNow from "./Pages/BookNow/BookNow";
import AuthPage from "./AuthPage/AuthPage";

import "./App.css";

function App() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const isBookPage = location.pathname.startsWith("/book/");

  useEffect(() => {
    // ✅ Always scroll to top when route changes
    window.scrollTo(0, 0);

    // Home page scroll effect
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

        {!isBookPage && (
          <>
            <ContactBar />
            <NavBar scrolled={scrolled} />
          </>
        )}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/CordeliaSky" element={<CordeliaSky />} />
        <Route path="/CordeliaSun" element={<CordeliaSun />} />
        <Route path="/CordeliaEmpress" element={<CordeliaEmpress />} />
        <Route path="/find-cruise" element={<FindCruise />} />
        <Route path="/WebCheckIn" element={<WebCheckIn />} />
        <Route path="/my-profile" element={<Profile />} />
        <Route path="/manage-bookings" element={<Bookings />} />
        <Route path="/itinerary/:id" element={<ViewItinerary />} />
        <Route path="/book/:id" element={<BookNow />} />
      </Routes>

      {!isBookPage && <Footer />}
    </>
  );
}

export default App;
