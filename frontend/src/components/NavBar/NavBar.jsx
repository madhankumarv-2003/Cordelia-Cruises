import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  NavDropdown,
  Modal,
  Offcanvas,
} from "react-bootstrap";
import { FaSuitcase, FaSignOutAlt, FaUser, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";

import logoWhite from "./images/cordelia-new-white-logo.svg";
import logoColor from "./images/cordelia-new-logo.svg";
import img1 from "./images/search-rounded_mobile.svg";
import img2 from "./images/webcheckin-menu-icon.svg";
import img3 from "./images/mybooking-new-icon.svg";
import img4 from "./images/findcruise-new-icon.svg";
import img5 from "./images/Destination_Nav.svg";
import img6 from "./images/Offers_Nav.svg";
import img7 from "./images/Blog.svg";
import img8 from "./images/Contact_Nav.svg";
import img9 from "./images/google-play-store-logo.webp";

import "./NavBar.css";

const NavBar = () => {
  const [showShips, setShowShips] = useState(false);
  const [showDestination, setShowDestination] = useState(false);
  const [offcanvas, setOffcanvas] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRegPassword, setShowRegPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [regForm, setRegForm] = useState({
    fname: "",
    lname: "",
    phone: "",
    dob: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;
  const phoneRegex = /^[0-9]{10}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-zA-Z]).{6,}$/;

  // ===================== REGISTER =====================
  const handleRegister = () => {
    const e = {};

    if (!regForm.fname.trim()) e.fname = "First name required";
    if (!regForm.lname.trim()) e.lname = "Last name required";
    if (!phoneRegex.test(regForm.phone)) e.phone = "Phone must be 10 digits";
    if (!regForm.dob) e.dob = "Date of birth required";
    if (!emailRegex.test(regForm.email)) e.email = "Valid email required";
    if (!passwordRegex.test(regForm.password))
      e.password = "Password must contain uppercase + number + 6 chars";

    setErrors(e);
    if (Object.keys(e).length !== 0) {
      alert("Please fix validation errors!");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({ ...regForm })
    );

    alert("Registration successful! Please login now.");
    setAuthMode("login");
    setRegForm({ fname: "", lname: "", phone: "", dob: "", email: "", password: "" });
    setErrors({});
  };

  // ===================== LOGIN =====================
  const handleLogin = () => {
    const stored = JSON.parse(localStorage.getItem("user"));
    const e = {};

    if (!stored) {
      alert("No user found. Please register first!");
      setAuthMode("register");
      setShowLogin(true);
      return;
    }

    if (loginForm.email !== stored.email) e.email = "Email not registered";
    if (loginForm.password !== stored.password) e.password = "Incorrect password";

    setErrors(e);

    if (Object.keys(e).length !== 0) {
      alert("Invalid credentials!");
      return;
    }

    setIsLoggedIn(true);
    setShowLogin(false);
    setLoginForm({ email: "", password: "" });
    setErrors({});
    alert("Login successful!");
  };

  const closeMenu = (path) => {
    navigate(path);
    setOffcanvas(false);
  };

  useEffect(() => {
    const scrollPages = ["/", "/CordeliaSky", "CordeliaSun"];
    if (!scrollPages.includes(location.pathname)) {
      setScrolled(true);
      return;
    }
    const handleScroll = () => {
      setScrolled((window.scrollY || 0) > 150);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    const handleOutside = (e) => {
      if (!e.target.closest(".account-wrapper")) setShowAccountMenu(false);
    };
    document.addEventListener("click", handleOutside);
    return () => document.removeEventListener("click", handleOutside);
  }, []);
  
  return (
    <>
      <Navbar
        expand="xl"
        className={`navbar py-1 header ${
          ["/", "/CordeliaSky", "/CordeliaSun"].includes(location.pathname)
            ? scrolled
              ? "navbar-scrolled"
              : "navbar-top"
            : "navbar-scrolled"
        }`}
      >
        <Container fluid className="d-flex align-items-center justify-content-between">
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img className="logo" src={scrolled ? logoColor : logoWhite} alt="Cordelia Cruises" />
          </Navbar.Brand>

          <Button as={Link} to="/find-cruise" className="find-cruise-btn tablet-only ms-auto border-1">
            Find a Cruise
          </Button>

          <Navbar.Toggle className="border-0 custom-toggle" onClick={() => setOffcanvas(true)}>
            <div className="custom-hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Navbar.Toggle>

          {/* Desktop */}
          <Navbar.Collapse className="d-none d-lg-flex justify-content-between">
            <Nav className="me-5 nav-links">
              <NavDropdown
                show={showShips}
                onMouseEnter={() => setShowShips(true)}
                onMouseLeave={() => setShowShips(false)}
                title={<span className="dropdown-title ms-4">Our Ships <FaChevronDown className="dropdown-icon" /></span>}
              >
                <NavDropdown.Item as={Link} to="/CordeliaSky">Cordelia Sky</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/CordeliaSun">Cordelia Suns</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/CordeliaEmpress">Cordelia Empress</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                show={showDestination}
                onMouseEnter={() => setShowDestination(true)}
                onMouseLeave={() => setShowDestination(false)}
                title={<span className="dropdown-title ms-4 des ps-1">Destinations <FaChevronDown className="dropdown-icon" /></span>}
              >
                <NavDropdown.Item as={Link} to="/destinations">All Destinations</NavDropdown.Item>

                <div className="dropdown-submenu">
                  <NavDropdown.Item className="submenu-item">Domestic <FaChevronRight /></NavDropdown.Item>
                  <div className="submenu-panel">
                    <NavDropdown.Item as={Link} to="/destinations/mumbai">Mumbai</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/destinations/goa">Goa</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/destinations/lakshadweep">Lakshadweep</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/destinations/kochi">Kochi</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/destinations/chennai">Chennai</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/destinations/vizag">Vizag</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/destinations/puducherry">Puducherry</NavDropdown.Item>
                  </div>
                </div>

                <div className="dropdown-submenu">
                  <NavDropdown.Item className="submenu-item">International <FaChevronRight /></NavDropdown.Item>
                  <div className="submenu-panel">
                    <NavDropdown.Item as={Link} to="/destinations/srilanka">Sri Lanka</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/destinations/singapore">Singapore</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/destinations/malaysia">Malaysia</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/destinations/tailand">Thailand</NavDropdown.Item>
                  </div>
                </div>
              </NavDropdown>

              <Nav.Link as={Link} to="/blogs" className="ms-1">Blogs</Nav.Link>
              <Nav.Link as={Link} to="/offers" className="ms-1">Offers</Nav.Link>
            </Nav>

            <div className="d-flex align-items-center me-5 gap-2 desktop-only">
              <Button as={Link} to="/find-cruise" className="find-cruise-btn">Find A Cruise</Button>

              <Button as={Link} to="/WebCheckIn" className="web-checkin-btn gradient-border">
                Web Check-in
              </Button>

              {!isLoggedIn ? (
                <Nav.Link
                  className="login-link d-flex align-items-center me-4"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setAuthMode("login");
                    setShowLogin(true);
                  }}
                >
                  <FaUser className="fs-5 me-2" />
                  Login / Register
                </Nav.Link>
              ) : (
                <div
                  className={`account-wrapper position-relative ${showAccountMenu ? "open" : ""}`}
                  onClick={() => setShowAccountMenu(!showAccountMenu)}
                >
                  <FaUser />
                  My Account
                  <FaChevronDown className="chevron-down" />

                  {showAccountMenu && (
                    <div className="account-dropdown">
                      <div className="account-dropdown-item" onClick={() => navigate("/my-profile")}>
                        <FaUser /> My Profile
                      </div>
                      <div className="account-dropdown-item" onClick={() => navigate("/manage-bookings")}>
                        <FaSuitcase /> My Bookings
                      </div>
                      <div
                        className="account-dropdown-item"
                        onClick={() => {
                          localStorage.removeItem("user");
                          setIsLoggedIn(false);
                          setShowAccountMenu(false);
                          alert("Logout successful!");
                        }}
                      >
                        <FaSignOutAlt /> Log Out
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Mobile Offcanvas */}
      <Offcanvas show={offcanvas} onHide={() => setOffcanvas(false)} placement="end" className="mobile-offcanvas">
        <Offcanvas.Header closeButton>
          <Navbar.Brand as={Link} to="/">
            <img src={logoColor} className="logo me-4" alt="Cordelia Cruises" />
          </Navbar.Brand>
        </Offcanvas.Header>

        <Offcanvas.Body className="px-0">
          <Nav className="flex-column mobile-nav">
            <div className="mobile-item" onClick={() => closeMenu("/find-cruise")}>
              <span><img src={img1} className="me-3" /> Find the Cruise</span>
            </div>
            <div className="mobile-item" onClick={() => closeMenu("/checkin")}>
              <span><img src={img2} className="me-3" /> Web-Checkin</span>
            </div>

            {!isLoggedIn ? (
              <div className="mobile-item" onClick={() => { setOffcanvas(false); setShowLogin(true); }}>
                <span><img src={img3} className="me-3" /> Login/Register</span>
              </div>
            ) : (
              <>
                <div className="mobile-item" onClick={() => closeMenu("/profile")}>
                  <span><img src={img3} className="me-3" /> My Profile</span>
                </div>
                <div className="mobile-item" onClick={() => closeMenu("/bookings")}>
                  <span><img src={img3} className="me-3" /> My Bookings</span>
                </div>
                <div
                  className="mobile-item"
                  onClick={() => {
                    setIsLoggedIn(false);
                    setOffcanvas(false);
                  }}
                >
                  <span><img src={img3} className="me-3" /> Log Out</span>
                </div>
              </>
            )}

            <div className="mobile-item justify-content-between" onClick={() => setShowShips(!showShips)}>
              <span><img src={img4} className="me-3" /> Our Ships</span>
              <FaChevronDown style={{ transform: showShips ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s" }} />
            </div>

            <div className="dropdown-content" style={{ maxHeight: showShips ? "200px" : "0px", opacity: showShips ? 1 : 0 }}>
              <div onClick={() => closeMenu("/ships/sky")}>Cordelia Sky</div>
              <div onClick={() => closeMenu("/ships/suns")}>Cordelia Suns</div>
              <div onClick={() => closeMenu("/ships/empress")}>Cordelia Empress</div>
            </div>

            <div className="mobile-item justify-content-between" onClick={() => setShowDestination(!showDestination)}>
              <span><img src={img5} className="me-3" /> Destinations</span>
              <FaChevronDown style={{ transform: showDestination ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s" }} />
            </div>

            <div className="dropdown-content" style={{ maxHeight: showDestination ? "260px" : "0px", opacity: showDestination ? 1 : 0 }}>
              <div onClick={() => closeMenu("/destinations/mumbai")}>All Destinations</div>
              <div onClick={() => closeMenu("/destinations/goa")}>Domestic</div>
              <div onClick={() => closeMenu("/destinations/lakshadweep")}>International</div>
            </div>

            <div className="mobile-item" onClick={() => closeMenu("/offers")}>
              <span><img src={img6} className="me-3" /> Offers</span>
            </div>

            <div className="mobile-item" onClick={() => closeMenu("/blogs")}>
              <span><img src={img7} className="me-3" /> Blogs</span>
            </div>

            <div className="mobile-item" onClick={() => closeMenu("/contact")}>
              <span><img src={img8} className="me-3" /> Contact</span>
            </div>
          </Nav>

          <div className="app-box">
            <h6 className="app-title">Cordelia Xperience App</h6>
            <p className="app-desc">Manage your booking or get helpful information and exclusive offers</p>
            <img src={img9} alt="Get it on Google Play" className="google-play-badge" />
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Login/Register Modal */}

       <Modal show={showLogin} onHide={() => setShowLogin(false)} centered backdrop="static">
        <Modal.Body className="p-4 text-center position-relative">
          <button onClick={() => setShowLogin(false)}
            style={{ position: "absolute", top: 12, right: 15, background: "transparent", border: "none", fontSize: 22 }}>✕</button>

          <img src={logoColor} height="40" className="mb-3" />

           {authMode === "login" && (
            <>
              <h5 className="mb-3">Login</h5>
              <input
                className="form-control mb-1"
                placeholder="Email"
                value={loginForm.email}
                onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
              />
              {errors.email && <div className="text-danger">{errors.email}</div>}

              <div className="position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control mb-2"
                  placeholder="Password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                />

                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer"
                  }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.password && <div className="text-danger">{errors.password}</div>}

              <Button className="w-100 mb-2" onClick={handleLogin}>Login</Button>

              <p style={{ fontSize: 14 }}>
                New user? <span style={{ color: "#b12a87", cursor: "pointer" }}
                  onClick={() => { setAuthMode("register"); setErrors({}); }}>Register here</span>
              </p>
            </>
          )}

          {/* REGISTER */}
          {authMode === "register" && (
            <>
              <h5 className="mb-3">Create Account</h5>

              <input className="form-control mb-1" placeholder="First Name"
                value={regForm.fname}
                onChange={(e) => setRegForm({ ...regForm, fname: e.target.value })}/>
              {errors.fname && <div className="text-danger">{errors.fname}</div>}

              <input className="form-control mb-1" placeholder="Last Name"
                value={regForm.lname}
                onChange={(e) => setRegForm({ ...regForm, lname: e.target.value })}/>
              {errors.lname && <div className="text-danger">{errors.lname}</div>}

              <input className="form-control mb-1" placeholder="Phone Number"
                value={regForm.phone}
                onChange={(e) => setRegForm({ ...regForm, phone: e.target.value })}/>
              {errors.phone && <div className="text-danger">{errors.phone}</div>}

              <input type="date" className="form-control mb-1"
                value={regForm.dob}
                onChange={(e) => setRegForm({ ...regForm, dob: e.target.value })}/>
              {errors.dob && <div className="text-danger">{errors.dob}</div>}

              <input className="form-control mb-1" placeholder="Email"
                value={regForm.email}
                onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}/>
              {errors.email && <div className="text-danger">{errors.email}</div>}

             <div className="position-relative">
                <input
                  type={showRegPassword ? "text" : "password"}
                  className="form-control mb-2"
                  placeholder="Password"
                  value={regForm.password}
                  onChange={(e) => setRegForm({ ...regForm, password: e.target.value })}
                />

                <span
                  onClick={() => setShowRegPassword(!showRegPassword)}
                  style={{
                    position: "absolute",
                    right: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer"
                  }}
                >
                  {showRegPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <Button className="w-100 mb-2" onClick={handleRegister}>Register</Button>

              <p style={{ fontSize: 14 }}>
                Already have an account?{" "}
                <span style={{ color: "#b12a87", cursor: "pointer" }}
                  onClick={() => { setAuthMode("login"); setErrors({}); }}>Login</span>
              </p>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavBar;
