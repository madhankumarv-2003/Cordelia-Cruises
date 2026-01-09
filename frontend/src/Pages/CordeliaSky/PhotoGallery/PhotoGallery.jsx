import React from "react";
import "./PhotoGallery.css";

import img1 from "./Images/Final_gallery-image-01.webp";
import img2 from "./Images/Empress_Sky_Gallary_web_Image5.jpg";
import img3 from "./Images/suite-penthouse-bacony-web-image-01.webp";
import img4 from "./Images/Empress_Sky_Gallary_web_Image2.jpg";
import img5 from "./Images/Empress_Sky_Gallary_web_Image4.jpg";
import img6 from "./images/Final_gallery-image-06.webp";
import arrow from "./Images/gallery-element.svg";

const PhotoGallery = () => {
  return (
    <section className="photo-gallery">
      <img src={arrow} className="arrow-image" alt="arrow-image"></img>
      {/* LEFT CONTENT */}
        <div className="gallery-content">
          <h2>Photo Gallery</h2>
          <p>Catch a glimpse of the Sky</p>
          <button className="gallery-btn">Cruise Now</button>
        </div>

      {/* RIGHT GRID */}
      <div className="gallery-grid">
        <div className="grid-item">
          <img src={img1} alt="Cruise" />
        </div>

        <div className="grid-item large">
          <img src={img2} alt="Pool Deck" />
        </div>

        <div className="grid-item">
          <img src={img3} alt="Suite" />
        </div>

        <div className="grid-item">
          <img src={img4} alt="Bar Lounge" />
        </div>

        <div className="grid-item">
          <img src={img5} alt="Sports Deck" />
        </div>

        <div className="grid-item">
          <img src={img6} alt="View More" />
          <div className="overlay">
            <span>View More</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
