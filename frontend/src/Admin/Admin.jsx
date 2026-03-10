import { Link, Outlet, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaShip,
  FaClipboardList,
  FaUsers,
  FaBed,
  FaCog,
  FaBell,
  FaUserCircle,
  FaSearch,
  FaTachometerAlt
} from "react-icons/fa";
import "./Admin.css";

export default function Admin() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin-login");
  };

  return (
    <div className="cruise-admin-layout">

      {/* SIDEBAR */}

      <div className="cruise-sidebar">

        <h4 className="cruise-admin-logo">Cordelia Cruises</h4>

        <Link to="/admin/dashboard" className="cruise-menu">
          <FaTachometerAlt /> Dashboard
        </Link>

        <Link to="/admin/cruises" className="cruise-menu">
          <FaShip /> Cruises Management
        </Link>

        <Link to="/admin/bookings" className="cruise-menu">
          <FaClipboardList /> Bookings Management
        </Link>

        <Link to="/admin/guests" className="cruise-menu">
          <FaUsers /> Guests Management
        </Link>

        <Link to="/admin/cabin" className="cruise-menu">
          <FaBed /> Cabin Management
        </Link>

        <Link to="/admin/payments" className="cruise-menu">
          <FaBed />Payments & Invoice
        </Link>

        <Link to="/admin/settings" className="cruise-menu">
          <FaCog /> Settings
        </Link>

        <button className="cruise-logout-btn" onClick={logout}>
          Logout
        </button>

      </div>


      {/* MAIN CONTENT */}

      <div className="cruise-main-content">

        {/* TOPBAR */}

        <div className="cruise-topbar">

          <div className="cruise-search-box">
            <FaSearch />
            <input type="text" placeholder="Search..." />
          </div>

          <div className="cruise-topbar-right">
            <FaBell className="cruise-bell-icon" />

            <div className="cruise-profile">
              <FaUserCircle size={22} />
              <span>Admin</span>
            </div>
          </div>

        </div>

        <div className="cruise-page-content">
          <Outlet />
        </div>

      </div>

    </div>
  );
}