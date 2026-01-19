import React, { useState, useEffect } from "react";
import "./Profile.css";

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "+91",
    dob: ""
  });

  // Load user from localStorage
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setFormData({
        firstName: savedUser.firstName || "",
        lastName: savedUser.lastName || "",
        email: savedUser.email || "",
        phone: savedUser.phone || "",
        countryCode: savedUser.countryCode || "+91",
        dob: savedUser.dob || ""
      });
    }
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // update storage
    const updatedUser = { ...JSON.parse(localStorage.getItem("user")), ...formData };
    localStorage.setItem("user", JSON.stringify(updatedUser));

    alert("Profile Updated!");
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <h1 className="profile-title">My Profile</h1>

        <form onSubmit={handleSubmit}>
          <input name="firstName" value={formData.firstName} onChange={handleChange} className="profile-input" />
          <input name="lastName" value={formData.lastName} onChange={handleChange} className="profile-input" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="profile-input" />

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
            />
          </div>

          <input
            name="dob"
            type="text"
            value={formData.dob ? new Date(formData.dob).toLocaleDateString("en-GB") : ""}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              e.target.type = "text";
              e.target.value = formData.dob ? new Date(formData.dob).toLocaleDateString("en-GB") : "";
            }}
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
            className="profile-input"
          />

          <button type="submit" className="profile-btn">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
