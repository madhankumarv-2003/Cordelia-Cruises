import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FraudAlert from "./components/FraudAlert/FraudAlert";
import ContactBar from "./components/ContactBar/ContactBar";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import Home from "./Home";
import Blogs from "./Pages/Blogs/Blogs";
import Offers from "./Pages/Offers/Offers";

import "./App.css";

function App() {
  return (
    <Router>
      {/* Sticky Header */}
      <div className="sticky-group">
        <FraudAlert />
        <ContactBar />
        <NavBar />
      </div>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
