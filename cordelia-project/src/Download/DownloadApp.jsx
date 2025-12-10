import React from "react";
import "./DownloadApp.css";

import Phone from "./images/app-image-new-desktop.webp";
import image1 from "./images/google-play-store-logo.webp";
import image2 from "./images/apple-app-store-logo.webp";

const DownloadApp = () => {
  return (
    <div className="download-section mt-5">
        <img src={Phone} alt="App Screen 1" className="phone-img" />
      <div className="download-right">
        <h1>Download<br />Cordelia Xperience App</h1>
        <div className="input-container">
          <input type="text" placeholder="Mobile Number" />
          <button>Get App</button>
        </div>

        <div className="store-buttons">
          <img src={image1} alt="Google Play"/>
          <img src={image2} alt="App Store"/>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
