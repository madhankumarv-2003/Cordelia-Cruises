import React, { useState } from "react";
import "./GalleryModel.css";

const GalleryModel = ({ images, onClose }) => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((current - 1 + images.length) % images.length);

  const next = () =>
    setCurrent((current + 1) % images.length);

  return (
    <div className="popup-backdrop" onClick={onClose}>
      <div className="popup-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>

        <div className="carousel">
          <button className="arrow left" onClick={prev}>❮</button>

          <img src={images[current]} alt="slide" />

          <button className="arrow right" onClick={next}>❯</button>
        </div>

        <div className="dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={i === current ? "dot active" : "dot"}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryModel;
