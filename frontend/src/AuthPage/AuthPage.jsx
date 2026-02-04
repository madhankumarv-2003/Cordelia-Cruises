import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logoColor from "../components/images/cordelia-new-logo.svg"; // adjust path

import "./AuthPage.css";

const AuthPage = () => {
  const navigate = useNavigate();

  const [authMode, setAuthMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showRegPassword, setShowRegPassword] = useState(false);

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
  const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/;

  // ================= REGISTER =================
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

    if (Object.keys(e).length !== 0) return;

    localStorage.setItem("user", JSON.stringify(regForm));

    alert("Registration successful! Please login.");
    setAuthMode("login");
    setRegForm({
      fname: "",
      lname: "",
      phone: "",
      dob: "",
      email: "",
      password: "",
    });
  };

  // ================= LOGIN =================
  const handleLogin = () => {
    const stored = JSON.parse(localStorage.getItem("user"));
    const e = {};

    if (!stored) {
      alert("No user found. Please register.");
      setAuthMode("register");
      return;
    }

    if (loginForm.email !== stored.email)
      e.email = "Email not registered";
    if (loginForm.password !== stored.password)
      e.password = "Incorrect password";

    setErrors(e);

    if (Object.keys(e).length !== 0) return;

    localStorage.setItem("isLoggedIn", "true");

    alert("Login successful!");
    navigate("/");
  };

  return (
    <div className="auth-page">
      <Container className="auth-container">

        <div className="auth-card">
          <img src={logoColor} alt="Logo" height="40" className="mb-3" />

          {authMode === "login" ? (
            <>
              <h4>Login</h4>

              <input
                className="form-control mb-2"
                placeholder="Email"
                value={loginForm.email}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, email: e.target.value })
                }
              />
              {errors.email && <div className="text-danger">{errors.email}</div>}

              <div className="position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control mb-2"
                  placeholder="Password"
                  value={loginForm.password}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, password: e.target.value })
                  }
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.password && (
                <div className="text-danger">{errors.password}</div>
              )}

              <Button className="w-100 mb-3" onClick={handleLogin}>
                Login
              </Button>

              <p>
                New user?{" "}
                <span
                  className="auth-link"
                  onClick={() => {
                    setAuthMode("register");
                    setErrors({});
                  }}
                >
                  Register here
                </span>
              </p>
            </>
          ) : (
            <>
              <h4>Create Account</h4>

              <input
                className="form-control mb-2"
                placeholder="First Name"
                value={regForm.fname}
                onChange={(e) =>
                  setRegForm({ ...regForm, fname: e.target.value })
                }
              />
              {errors.fname && <div className="text-danger">{errors.fname}</div>}

              <input
                className="form-control mb-2"
                placeholder="Last Name"
                value={regForm.lname}
                onChange={(e) =>
                  setRegForm({ ...regForm, lname: e.target.value })
                }
              />
              {errors.lname && <div className="text-danger">{errors.lname}</div>}

              <input
                className="form-control mb-2"
                placeholder="Phone"
                value={regForm.phone}
                onChange={(e) =>
                  setRegForm({ ...regForm, phone: e.target.value })
                }
              />
              {errors.phone && <div className="text-danger">{errors.phone}</div>}

              <input
                type="date"
                className="form-control mb-2"
                value={regForm.dob}
                onChange={(e) =>
                  setRegForm({ ...regForm, dob: e.target.value })
                }
              />
              {errors.dob && <div className="text-danger">{errors.dob}</div>}

              <input
                className="form-control mb-2"
                placeholder="Email"
                value={regForm.email}
                onChange={(e) =>
                  setRegForm({ ...regForm, email: e.target.value })
                }
              />
              {errors.email && <div className="text-danger">{errors.email}</div>}

              <div className="position-relative">
                <input
                  type={showRegPassword ? "text" : "password"}
                  className="form-control mb-2"
                  placeholder="Password"
                  value={regForm.password}
                  onChange={(e) =>
                    setRegForm({ ...regForm, password: e.target.value })
                  }
                />
                <span
                  onClick={() => setShowRegPassword(!showRegPassword)}
                  className="password-toggle"
                >
                  {showRegPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <Button className="w-100 mb-3" onClick={handleRegister}>
                Register
              </Button>

              <p>
                Already have an account?{" "}
                <span
                  className="auth-link"
                  onClick={() => {
                    setAuthMode("login");
                    setErrors({});
                  }}
                >
                  Login
                </span>
              </p>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default AuthPage;
