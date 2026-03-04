import { Link, Outlet, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Admin.css";

export default function Admin() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin-login");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Segoe UI" }}>

      {/* SIDEBAR */}

      <div
        style={{
          width: "260px",
          background: "linear-gradient(180deg,#ff4da6,#b266ff)",
          color: "white",
          padding: "25px"
        }}
      >
        <h4 className="mb-4">Cordelia Cruises</h4>

        <div className="mb-3">
          <Link to="/admin/dashboard" className="text-white text-decoration-none">
            Dashboard
          </Link>
        </div>

        <div className="mb-3">
          <Link to="/admin/cruises" className="text-white text-decoration-none">
            Cruises Management
          </Link>
        </div>

        <div className="mb-3">
          <Link to="/admin/bookings" className="text-white text-decoration-none">
            Bookings Management
          </Link>
        </div>

        <div className="mb-3">
          <Link to="/admin/guests" className="text-white text-decoration-none">
            Guests Management
          </Link>
        </div>

        <div className="mb-3">
          <Link to="/admin/cabin" className="text-white text-decoration-none">
            Cabin Management
          </Link>
        </div>

        <div className="mb-3">
          <Link to="/admin/settings" className="text-white text-decoration-none">
            Settings
          </Link>
        </div>

        <button onClick={logout} className="btn btn-light mt-4 w-100">
          Logout
        </button>
      </div>

      {/* MAIN CONTENT */}

      <div style={{ flex: 1, padding: "30px", background: "#faf6ff" }}>
        <Outlet />
      </div>

    </div>
  );
}