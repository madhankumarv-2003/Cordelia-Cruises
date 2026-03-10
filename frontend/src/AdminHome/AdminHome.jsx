import { Routes, Route } from "react-router-dom";

import Admin from "../Admin/Admin";
import Dashboard from "../AdminPage/DashBoard/Dashboard";
import Cruises from "../AdminPage/Cruises/Cruises";
import Booking from "../AdminPage/Bookings/Booking";
import Guests from "../AdminPage/Guests/Guests";
import Cabin from "../AdminPage/Cabin/Cabin";
import Payments from "../AdminPage/Payments/Payments";
import Settings from "../AdminPage/Settings/Settings";

export default function AdminHome() {
  return (
    <Routes>
      <Route path="/" element={<Admin />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cruises" element={<Cruises />} />
        <Route path="/bookings" element={<Booking />} />
        <Route path="/guests" element={<Guests />} />
        <Route path="/cabin" element={<Cabin />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}