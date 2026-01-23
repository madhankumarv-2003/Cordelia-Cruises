import React, { useState, useEffect } from "react";
import "./Profile.css";

const Profile = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    dob: "",
    countryCode: "+91"
  });

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setFormData({
        fname: savedUser.fname || "",
        lname: savedUser.lname || "",
        email: savedUser.email || "",
        phone: savedUser.phone || "",
        dob: savedUser.dob || "",
        countryCode: savedUser.countryCode || "+91"
      });
    }
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing = JSON.parse(localStorage.getItem("user")) || {};
    const updated = { ...existing, ...formData };

    localStorage.setItem("user", JSON.stringify(updated));
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <h1 className="profile-title">My Profile</h1>

        <form onSubmit={handleSubmit}>
          <input
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            className="profile-input"
            placeholder="First Name"
          />

          <input
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            className="profile-input"
            placeholder="Last Name"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="profile-input"
            placeholder="Email"
          />

          <div className="profile-row">
            <input
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="profile-input-small"
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="profile-input"
              placeholder="Phone"
            />
          </div>

          <input
            name="dob"
            type="text"
            value={formData.dob ? new Date(formData.dob).toLocaleDateString("en-GB") : ""}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              e.target.type = "text";
              e.target.value = formData.dob
                ? new Date(formData.dob).toLocaleDateString("en-GB")
                : "";
            }}
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
            className="profile-input"
            placeholder="Date of Birth"
          />
          <button type="submit" className="profile-btn">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
