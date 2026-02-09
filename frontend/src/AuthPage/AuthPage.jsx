import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logoColor from "../components/NavBar/images/cordelia-new-logo.svg";

const AuthModal = ({ show, handleClose, onLoginSuccess }) => {
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

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/;

  // ================= REGISTER =================
  const handleRegister = () => {
    let newErrors = {};

    if (!regForm.fname.trim())
      newErrors.fname = "First name is required";

    if (!regForm.lname.trim())
      newErrors.lname = "Last name is required";

    if (!phoneRegex.test(regForm.phone))
      newErrors.phone = "Phone must be 10 digits";

    if (!regForm.dob)
      newErrors.dob = "Date of birth is required";

    if (!emailRegex.test(regForm.email))
      newErrors.email = "Enter valid email address";

    if (!passwordRegex.test(regForm.password))
      newErrors.password =
        "Password must have 6+ chars, 1 uppercase & 1 number";

    const existingUser = JSON.parse(localStorage.getItem("user"));
    if (existingUser && existingUser.email === regForm.email)
      newErrors.email = "Email already registered";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    localStorage.setItem("user", JSON.stringify(regForm));

    setRegForm({
      fname: "",
      lname: "",
      phone: "",
      dob: "",
      email: "",
      password: "",
    });

    setErrors({});
    setAuthMode("login");
    setShowRegPassword(false);
  };

  // ================= LOGIN =================
  const handleLogin = () => {
    let newErrors = {};

    if (!loginForm.email.trim())
      newErrors.loginEmail = "Email is required";

    if (!loginForm.password.trim())
      newErrors.loginPassword = "Password is required";

    if (loginForm.email && !emailRegex.test(loginForm.email))
      newErrors.loginEmail = "Invalid email format";

    const stored = JSON.parse(localStorage.getItem("user"));

    if (!stored)
      newErrors.loginEmail = "No account found. Please register.";

    if (
      stored &&
      (loginForm.email !== stored.email ||
        loginForm.password !== stored.password)
    ) {
      newErrors.loginPassword = "Incorrect email or password";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    localStorage.setItem("isLoggedIn", "true");

    setLoginForm({ email: "", password: "" });
    setErrors({});
    setShowPassword(false);

    onLoginSuccess();
    handleClose();
  };

  const handleInputChange = (formSetter, form, field, value) => {
    formSetter({ ...form, [field]: value });
    setErrors({ ...errors, [field]: "" });
  };

  return (
    <Modal show={show} onHide={handleClose} centered backdrop="static">
      <Modal.Body className="p-4 text-center position-relative">

        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: 12,
            right: 15,
            background: "transparent",
            border: "none",
            fontSize: 22,
          }}
        >
          ✕
        </button>

        <img src={logoColor} height="40" className="mb-3" alt="logo" />

        {authMode === "login" ? (
          <>
            <h5>Login</h5>

            <input
              className="form-control"
              placeholder="Email"
              value={loginForm.email}
              onChange={(e) =>
                handleInputChange(
                  setLoginForm,
                  loginForm,
                  "email",
                  e.target.value
                )
              }
            />
            {errors.loginEmail && (
              <small className="text-danger">{errors.loginEmail}</small>
            )}

            <div className="position-relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Password"
                value={loginForm.password}
                onChange={(e) =>
                  handleInputChange(
                    setLoginForm,
                    loginForm,
                    "password",
                    e.target.value
                  )
                }
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.loginPassword && (
              <small className="text-danger">{errors.loginPassword}</small>
            )}

            <Button className="w-100 mt-3" onClick={handleLogin}>
              Login
            </Button>

            <p className="mt-2">
              New user?{" "}
              <span
                style={{ color: "#b12a87", cursor: "pointer" }}
                onClick={() => {
                  setAuthMode("register");
                  setErrors({});
                }}
              >
                Register
              </span>
            </p>
          </>
        ) : (
          <>
            <h5>Create Account</h5>

            {[
              { name: "fname", placeholder: "First Name" },
              { name: "lname", placeholder: "Last Name" },
              { name: "phone", placeholder: "Phone" },
            ].map((field) => (
              <div key={field.name} className="mb-2">
                <input
                  className="form-control"
                  placeholder={field.placeholder}
                  value={regForm[field.name]}
                  onChange={(e) =>
                    handleInputChange(
                      setRegForm,
                      regForm,
                      field.name,
                      e.target.value
                    )
                  }
                />
                {errors[field.name] && (
                  <small className="text-danger">
                    {errors[field.name]}
                  </small>
                )}
              </div>
            ))}

            <input
              type="date"
              className="form-control mb-1"
              value={regForm.dob}
              onChange={(e) =>
                handleInputChange(
                  setRegForm,
                  regForm,
                  "dob",
                  e.target.value
                )
              }
            />
            {errors.dob && (
              <small className="text-danger">{errors.dob}</small>
            )}

            <input
              className="form-control mt-2"
              placeholder="Email"
              value={regForm.email}
              onChange={(e) =>
                handleInputChange(
                  setRegForm,
                  regForm,
                  "email",
                  e.target.value
                )
              }
            />
            {errors.email && (
              <small className="text-danger">{errors.email}</small>
            )}

            <div className="position-relative mt-2">
              <input
                type={showRegPassword ? "text" : "password"}
                className="form-control"
                placeholder="Password"
                value={regForm.password}
                onChange={(e) =>
                  handleInputChange(
                    setRegForm,
                    regForm,
                    "password",
                    e.target.value
                  )
                }
              />
              <span
                onClick={() => setShowRegPassword(!showRegPassword)}
                style={{
                  position: "absolute",
                  right: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                {showRegPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && (
              <small className="text-danger">{errors.password}</small>
            )}

            <Button className="w-100 mt-3" onClick={handleRegister}>
              Register
            </Button>

            <p className="mt-2">
              Already have account?{" "}
              <span
                style={{ color: "#b12a87", cursor: "pointer" }}
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
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;
