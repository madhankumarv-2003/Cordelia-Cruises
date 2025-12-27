import React from "react";

import Img1 from "./images/testimonial-1.webp"
import Img2 from "./images/testimonial-2.webp"
import Img3 from "./images/testimonial-3.webp"

import "./Testimonials.css";

const testimonials = [
  {
    name: "Kiran Gorantla",
    location: "Mumbai, India",
    image: Img1,
    rating: 4,
    text: `Recently went on a voyage with Cordelia from Chennai to
    Vishakapatnam with a family of forty. Overall, the experience was
    awesome and the hospitality.`,
  },
  {
    name: "Pooja Nair",
    location: "Bangalore, India",
    image: Img2,
    rating: 4,
    text: `Amazing! Can't even justify the experience aboard this city on the
    sea! You will find everything that you could possibly need. Good
    music plays round the clock.`,
  },
  {
    name: "Rohit",
    location: "Bangalore, India",
    image: Img3,
    rating: 4,
    text: `I opted for the Goa-Lakshadweep-Mumbai cruise and had a wonderful
    time with Cordelia. Delicious food, superb hospitality, cooperative
    staff, and super clean accommodations.`,
  },
];

function Testimonials() {
  return (
    <>
    <section className="ms-5 px-4">
          <div className="align col-12 text-left mt-2 ms-5">
            <h2 className="test-title">What Our Travellers Say</h2>
            <p className="test-description">
              Hear it from the ones who’ve been there and done that.
            </p>
        </div>
      </section>
    <div className="testimonial-wrapper mt-2">
      {testimonials.map((item, index) => (
        <div className="testimonial-card" key={index}>
          <img src={item.image} alt={item.name} className="profile-img" />
          <h3 className="name">{item.name}</h3>
          <p className="location">{item.location}</p>

          <div className="stars">
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i} className={i <= item.rating ? "star active" : "star"}>
                ★
              </span>
            ))}
          </div>

          <p className="text">{item.text}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default Testimonials;
