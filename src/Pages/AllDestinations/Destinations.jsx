import React, { useState } from "react";

import laks1 from "./Images/lakshadweep-1-mobile.webp";
import laks2 from "./Images/lakshadweep-2-mobile.webp";
import laks3 from "./Images/lakshadweep-3-mobile.webp";

import Mum1 from "./Images/mumbai-1-mobile.webp";
import Mum2 from "./Images/mumbai-2-mobile.webp";
import Mum3 from "./Images/mumbai-3-mobile.webp";

import Goa1 from "./Images/goa-1-mobile.webp";
import Goa2 from "./Images/goa-2-mobile.webp";
import Goa3 from "./Images/goa-3-mobile.webp";

import Kochi1 from "./Images/kochi-1-mobile.webp";
import Kochi2 from "./Images/kochi-2-mobile.webp";
import Kochi3 from "./Images/kochi-3-mobile.webp";
import Chennai from './Images/chennai-1-mobile.webp'
import Visakhapatnam from './Images/cordelia-visakhapatnam-destination-image.webp'
import Puducherry from './Images/cordelia-pondicherry-destination-image-02.webp'

import SriLanka from "../../components/Destination/DepChennai/Images/cordelia-srilanka-destination-image.webp";
import Singapore from "../../components/Destination/DepChennai/Images/cordelia-singapore-destination-image-02_1.webp";
import Malaysia from "../../components/Destination/DepChennai/Images/cordelia-malaysia-destination-image.webp";
import Thailand from "../../components/Destination/DepChennai/Images/cordelia-thailand-destination-image.webp";
import "./Destinations.css";

const Destinations = () => {
  const [activeTab, setActiveTab] = useState("domestic");

  const destinations = {
    domestic: [
      {
        title: "Lakshadweep",
        images: [
          laks1,laks2,laks3,
        ],
        description:
          "Lakshadweep’s magnificence lies underwater with 4200 sq km of archipelago lagoons and coral reefs, making it the only place in India where you can snorkel in the reefs. The unlimited onboard experiences and the numerous excursions make our Lakshadweep cruises extraordinary and unforgettable.",
      },
      {
        title: "Mumbai",
        images: [
          Mum1,Mum2,Mum3,
        ],
        description:
          "From colonial architecture to high-tech skyscrapers, Mumbai’s skyline is an interesting reflection of history and modernity. Popularly known as the Maximum City, Mumbai is filled with iconic tourist attractions, local and fine-dine restaurants, shopping malls, lanes and beautiful beaches.",
      },
      {
        title: "Goa",
        images: [
          Goa1,Goa2,Goa3,
        ],
        description:
          "Undoubtedly India’s favorite travel destination, Goa is famous for its tropical vibe, young identity, and cultural adaptations. This Konkan state in the country’s southwestern coast is an interesting mix of sun, sand, and spice. Whether you’re traveling with your family and friends or traveling solo, Goa’s versatility never fails to charm.",
      },
      {
        title: "Kochi",
        images: [
            Kochi1,Kochi2,Kochi3
        ],
        description:
          "Kochi, formerly known as Cochin is Kerala’s commercial capital, and a cosmopolitan city which has brilliantly upheld the distinct cultural and historical identity of the state. A modern reflection of India’s new identity, Kochi is an interesting mix of hilly areas and backwaters attracting travelers and traders.",
      },
      {
        title: "Chennai",
        images: [
            Chennai
        ],
        description:
          "Adorned gracefully by numerous beaches, temples, and museums, Chennai is a brilliant reflection of culinary brilliance, cosmopolitan vibes, and timeless traditions. Your visit to this is incomplete without a taste of the authentic South Indian delicacies and a visit to Marina beach.",
      },
      {
        title: "Visakhapatnam",
        images: [
          Visakhapatnam,
        ],
        description:
          "Visakhapatnam, is a coastal gem that offers pristine beaches, awe-inspiring hills, and rich cultural heritage. Explore the perfect blend of natural beauty and modern development in this vibrant city by the sea.",
      },
      {
        title: "Puducherry",
        images: [
          Puducherry,
        ],
        description:
          "Puducherry, a charming coastal town with French colonial influences, is a serene getaway offering tranquil beaches, vibrant culture, and a blend of both traditional and European charm.",
      },
    ],

    international: [
      {
        title: "Sri Lanka",
        images: [
          SriLanka,
        ],
        description:
          "Discover the enchanting island of Sri Lanka, where golden beaches meet ancient temples and lush landscapes. Sail to Trincomalee, Hambantota, and Jaffna, immersing yourself in the vibrant culture.",
      },
      {
        title: "Singapore",
        images: [
          Singapore,
        ],
        description:
          "Step into the future with a visit to Singapore, a cosmopolitan city where modernity meets tradition. From its iconic skyline to its lush gardens, Singapore offers an extraordinary urban experience.",
      },
      {
        title: "Malaysia",
        images: [
          Malaysia,
        ],
        description:
          "Cruise through Malaysia’s stunning coastline, where modern skylines, lush rainforests, and crystal-clear waters create an unforgettable vacation. Explore bustling markets, historic landmarks, and tropical retreats all in one voyage.",
      },
      {
        title: "Thailand",
        images: [
          Thailand,
        ],
        description:
          "Set sail to Phuket's soft sandy beaches and take in the stunning turquoise waters, showing why it's known as Thailand's crown jewel. The adventurous, lush rainforests and the buzzing nightlife are ready to be explored.",
      }
    ],
  };

  return (
    <div className="ports-wrapper">
      <h2 className="ports-title">Ports & Destinations</h2>
      <p className="ports-desc">
        A cruise vacation with Cordelia Cruises takes you to some of the most
        gorgeous Indian and international destinations. A perfect journey deserves a perfect destination.
      </p>

      {/* Tabs */}
      <div className="ports-tabs">
        <button
          className={`ports-tab ${activeTab === "domestic" ? "active" : ""}`}
          onClick={() => setActiveTab("domestic")}
        >
          Domestic
        </button>
        <button
          className={`ports-tab ${activeTab === "international" ? "active" : ""}`}
          onClick={() => setActiveTab("international")}
        >
          International
        </button>
      </div>

      <hr className="ports-divider" />

      {/* Dynamic Section */}
      <h2 className="india-title">
        {activeTab === "domestic" ? "India" : "International"}
      </h2>

      <p className="india-desc">
        {activeTab === "domestic"
          ? "It’s a treasure trove of stunning destinations and when you explore it aboard Cordelia Cruise, you experience it in all its glory."
          : "Sail beyond borders and explore breathtaking international destinations."}
      </p>

      <div className="india-grid">
        {destinations[activeTab].map((item, index) => (
          <CarouselCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const CarouselCard = ({ item }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? item.images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === item.images.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="destination-cardd">
      <div className="destination-image">
        <img src={item.images[current]} alt={item.title} />

        <span className="arrow-box left" onClick={prevSlide}>
          &laquo;
        </span>
        <span className="arrow-box right" onClick={nextSlide}>
          &raquo;
        </span>

        <div className="dotss">
          {item.images.map((_, i) => (
            <span
              key={i}
              className={`dott ${current === i ? "active" : ""}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>

      <div className="destination-content">
        <h3 className="des-titlee">{item.title}</h3>
        <p className="des-descriptionn">{item.description}</p>
        <button className="explore-btn">Explore Now</button>
      </div>
    </div>
  );
};

export default Destinations;
