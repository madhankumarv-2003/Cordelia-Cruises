// NavBar.js
import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { FaUser, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { Link, useNavigate,useLocation } from "react-router-dom";

import logoWhite from "./images/cordelia-new-white-logo.svg";
import logoColor from "./images/cordelia-new-logo.svg";
import img1 from "./images/search-rounded_mobile.svg"
import img2 from "./images/webcheckin-menu-icon.svg"
import img3 from "./images/mybooking-new-icon.svg"
import img4 from "./images/findcruise-new-icon.svg"
import img5 from "./images/Destination_Nav.svg"
import img6 from "./images/Offers_Nav.svg"
import img7 from "./images/Blog.svg"
import img8 from "./images/Contact_Nav.svg"
import img9 from "./images/google-play-store-logo.webp";

import "./NavBar.css";

const NavBar = () => {
  const [showShips, setShowShips] = useState(false);
  const [showDestination, setShowDestination] = useState(false);
  const [offcanvas, setOffcanvas] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const closeMenu = (path) => {
    navigate(path);
    setOffcanvas(false);
  };

  useEffect(() => {
    const scrollPages = ["/", "/CordeliaSky"];
    if (!scrollPages.includes(location.pathname)) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      const y = window.scrollY || 0;
      setScrolled(y > 150);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);


  return (
    <>
      <Navbar
          expand="xl"
          className={`navbar py-1 header ${
            ["/", "/CordeliaSky"].includes(location.pathname)
              ? scrolled
                ? "navbar-scrolled"
                : "navbar-top"
              : "navbar-scrolled"
        }`}
>

        <Container
          fluid
          className="d-flex align-items-center justify-content-between"
        >
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              className="logo"
              src={scrolled ? logoColor : logoWhite}
              alt="Cordelia Cruises"
            />
          </Navbar.Brand>

          <Button
            as={Link}
            to="/find-cruise"
            className="find-cruise-btn tablet-only ms-auto border-1"
          >
            Find a Cruise
          </Button>

          <Navbar.Toggle
            className="border-0 custom-toggle"
            onClick={() => setOffcanvas(true)}
          >
            <div className="custom-hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Navbar.Toggle>

          {/* Desktop Menu */}
          <Navbar.Collapse className="d-none d-lg-flex justify-content-between">
            <Nav className="me-5 nav-links">
              {/* Our Ships */}
              <NavDropdown
                show={showShips}
                onMouseEnter={() => setShowShips(true)}
                onMouseLeave={() => setShowShips(false)}
                title={
                  <span className="dropdown-title ms-4">
                    Our Ships <FaChevronDown className="dropdown-icon" />
                  </span>
                }
              >
                <NavDropdown.Item as={Link} to="/CordeliaSky">
                  Cordelia Sky
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/CordeliaSun">
                  Cordelia Suns
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/CordeliaEmpress">
                  Cordelia Empress
                </NavDropdown.Item>
              </NavDropdown>

              {/* Destinations */}
              <NavDropdown
                show={showDestination}
                onMouseEnter={() => setShowDestination(true)}
                onMouseLeave={() => setShowDestination(false)}
                title={
                  <span className="dropdown-title ms-4 des ps-1">
                    Destinations <FaChevronDown className="dropdown-icon" />
                  </span>
                }
              >
                <NavDropdown.Item as={Link} to="/destinations">
                  All Destinations
                </NavDropdown.Item>

                <div className="dropdown-submenu">
                  <NavDropdown.Item className="submenu-item">
                    Domestic <FaChevronRight />
                  </NavDropdown.Item>
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
                  <NavDropdown.Item className="submenu-item">
                    International <FaChevronRight />
                  </NavDropdown.Item>
                  <div className="submenu-panel">
                    <NavDropdown.Item as={Link} to="/destinations/srilanka">Srilanka</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/destinations/singapore">Singapore</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/destinations/malaysia">Malaysia</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/destinations/tailand">Thailand</NavDropdown.Item>
                  </div>
                </div>
              </NavDropdown>

              <Nav.Link as={Link} to="/blogs" className="ms-1">Blogs</Nav.Link>
              <Nav.Link as={Link} to="/offers" className="ms-1">Offers</Nav.Link>
            </Nav>

            <div className="d-flex align-items-center me-4 gap-2 desktop-only">
              <Button as={Link} to="/find-cruise" className="find-cruise-btn">
                Find A Cruise
              </Button>

              <Button
                as={Link}
                to="/WebCheckIn"
                className="web-checkin-btn gradient-border"
              >
                Web Check-in
              </Button>

              <Nav.Link
                as={Link}
                to="/"
                className="login-link d-flex align-items-center me-5"
              >
                <FaUser className="fs-5 me-2" />
                Login / Register
              </Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas
        show={offcanvas}
        onHide={() => setOffcanvas(false)}
        placement="end"
        className="mobile-offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Navbar.Brand as={Link} to="/">
            <img src={logoColor} className="logo me-4" alt="Cordelia Cruises" />
          </Navbar.Brand>
        </Offcanvas.Header>

        <Offcanvas.Body className="px-0">
          <Nav className="flex-column mobile-nav">

            {/* Static Items */}
            <div className="mobile-item" onClick={() => closeMenu("/find-cruise")}>
              <span><img src={img1} className="me-3" /> Find the Cruise</span>
            </div>

            <div className="mobile-item" onClick={() => closeMenu("/checkin")}>
              <span><img src={img2} className="me-3" /> Web-Checkin</span>
            </div>

            <div className="mobile-item" onClick={() => closeMenu("/login")}>
              <span><img src={img3} className="me-3" /> Login/Register</span>
            </div>

            {/* ---------------------- */}
            {/* OUR SHIPS DROPDOWN     */}
            {/* ---------------------- */}
            <div
              className="mobile-item justify-content-between"
              onClick={() => setShowShips(!showShips)}
            >
              <span><img src={img4} className="me-3" /> Our Ships</span>
              {showShips ? <FaChevronDown style={{ transform: "rotate(180deg)", transition: "0.3s" }} /> : <FaChevronDown />}
            </div>

            <div
              className="dropdown-content"
              style={{
                maxHeight: showShips ? "200px" : "0px",
                opacity: showShips ? 1 : 0,
              }}
            >
              <div onClick={() => closeMenu("/ships/sky")}>Cordelia Sky</div>
              <div onClick={() => closeMenu("/ships/suns")}>Cordelia Suns</div>
              <div onClick={() => closeMenu("/ships/empress")}>Cordelia Empress</div>
            </div>
            <div
              className="mobile-item justify-content-between"
              onClick={() => setShowDestination(!showDestination)}
            >
              <span><img src={img5} className="me-3" /> Destinations</span>
              {showDestination ? <FaChevronDown style={{ transform: "rotate(180deg)", transition: "0.3s" }} /> : <FaChevronDown />}
            </div>

            <div
              className="dropdown-content"
              style={{
                maxHeight: showDestination ? "260px" : "0px",
                opacity: showDestination ? 1 : 0,
              }}
            >
              <div onClick={() => closeMenu("/destinations/mumbai")}>All Destinations</div>
              <div onClick={() => closeMenu("/destinations/goa")}>Domestic</div>
              <div onClick={() => closeMenu("/destinations/lakshadweep")}>International</div>
            </div>

            {/* Remaining Items */}
            <div className="mobile-item" onClick={() => closeMenu("/offers")}>
              <span><img src={img6} className="me-3" /> Offers</span>
            </div>

            <div className="mobile-item" onClick={() => closeMenu("/blogs")}>
              <span><img src={img7}  className="me-3" /> Blogs</span>
            </div>

            <div className="mobile-item" onClick={() => closeMenu("/contact")}>
              <span><img src={img8}  className="me-3" /> Contact</span>
            </div>

          </Nav>
          <div className="app-box">
              <h6 className="app-title">Cordelia Xperience App</h6>
              <p className="app-desc">
                Manage your booking or get helpful information and exclusive offers
              </p>

              <img
                src={img9}
                alt="Get it on Google Play"
                className="google-play-badge"
              />
            </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavBar;
