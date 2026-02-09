import React, { useState, useMemo } from "react";
import "./CruiseLayout.css";
import {
  FaPhoneAlt,
  FaUsers,
  FaShip,
  FaCog
} from "react-icons/fa";
import maxcapacity from "./Images/max-capacity-icon.svg";
import amenities from "./Images/view_amenities.svg";

export default function CruiseLayout({nextStep}) {

  const cabinTypes = [
    {
      id: 1,
      title: "Interior Standard",
      description: "Welcome to your cosy haven on the sea.",
      price: 53728,
      capacity: 4,
      image:
        "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d"
    },
    {
      id: 2,
      title: "Ocean View Deluxe",
      description: "Enjoy breathtaking ocean views from your cabin.",
      price: 68999,
      capacity: 2,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    },
    {
      id: 3,
      title: "Balcony Suite",
      description: "Luxury suite with private balcony access.",
      price: 85999,
      capacity: 3,
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    },
    {
      id: 4,
      title: "Balcony Suite",
      description: "Luxury suite with private balcony access.",
      price: 85999,
      capacity: 4,
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    },
    {
      id: 5,
      title: "Balcony Suite",
      description: "Luxury suite with private balcony access.",
      price: 85999,
      capacity: 2,
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    }
  ];

  /* ================= STATES ================= */

  const [selectedCabinId, setSelectedCabinId] = useState(null);

  const [cabins, setCabins] = useState([
    { id: 1, adults: 0, children: 0, infant: 0 }
  ]);

  const addCabin = () => {
    setCabins([
      ...cabins,
      {
        id: cabins.length + 1,
        adults: 0,
        children: 0,
        infant: 0
      }
    ]);
  };

  const removeCabin = (id) => {
    setCabins(cabins.filter((cabin) => cabin.id !== id));
  };

  const updateCabin = (id, field, value) => {
    setCabins(
      cabins.map((cabin) =>
        cabin.id === id ? { ...cabin, [field]: Number(value) } : cabin
      )
    );
  };

  /* ================= SELECTED CABIN ================= */

  const selectedCabin = cabinTypes.find(
    (c) => c.id === selectedCabinId
  );

  /* ================= TOTAL GUESTS ================= */

  const totalGuests = cabins.reduce(
    (total, cabin) => total + cabin.adults + cabin.children,
    0
  );

  /* ================= VALIDATION ================= */

  const isValid =
    selectedCabin &&
    totalGuests > 0 &&
    cabins.every(
      (cabin) =>
        cabin.adults + cabin.children <= selectedCabin.capacity
    );

  /* ================= TOTAL PRICE ================= */

  const totalPrice = useMemo(() => {
    if (!selectedCabin) return 0;
    return totalGuests * selectedCabin.price;
  }, [selectedCabin, totalGuests]);

  return (
    <div className="corz_wrapper">
      {/* ================= LEFT HELP CARD ================= */}
      <div className="corz_helpCard">
        <div className="corz_phoneIcon">
          <FaPhoneAlt />
        </div>

        <h3 className="corz_helpTitle">
          Your perfect cruise is one call away.
        </h3>

        <p className="corz_helpText">
          Get instant help from our cruise specialist.
        </p>

        <button className="corz_btnPrimary">
          <FaPhoneAlt className="corz_btnIcon" />
          Request a Callback
        </button>

        <button className="corz_btnOutline">
          Call - 022-68811111
        </button>
      </div>

      {/* ================= CABIN SECTION ================= */}
      <div className="corz_cabinSection">
        {cabinTypes.map((cabin) => (
          <div key={cabin.id}>
            <div className="corz_cabinCard">
              <div className="corz_imageWrapper">
                <img
                  src={cabin.image}
                  alt={cabin.title}
                  className="corz_cabinImage"
                />
              </div>

              <div className="corz_cabinContent">
                <div className="corz_topRow">
                  <div>
                    <h3 className="corz_title">{cabin.title}</h3>
                    <p className="corz_desc">{cabin.description}</p>
                  </div>

                  <div className="corz_priceBox">
                    <h2 className="corz_price">
                      ₹ {cabin.price.toLocaleString()}
                    </h2>
                    <p className="corz_priceSub">Per Person in Double Occupancy</p>
                    <span className="corz_gst">
                      Excl. GST charges
                    </span>
                  </div>
                </div>

                <div className="corz_capacityRow">
                  <img src={maxcapacity}></img>
                    Max Capacity: 0{cabin.capacity} Guests
                </div>

                <div className="corz_actionRow">
                  <div style={{ display: "flex", gap: "6px" }}>
                    <img src={amenities}></img>
                    <span className="corz_amenitiesLink">
                      View Amenities
                    </span>
                  </div>

                  <button
                    className="corz_chooseBtn"
                    onClick={() =>
                      setSelectedCabinId(
                        selectedCabinId === cabin.id ? null : cabin.id
                      )
                    }
                  >
                    Choose Cabin
                  </button>
                </div>
              </div>
            </div>

            {selectedCabinId === cabin.id && (
              <div className="corz_cabinSelectionBox mb-4">
                {cabins.map((item) => (
                  <div key={item.id} className="corz_singleCabin">
                    <div className="corz_cabinHeader">
                      <h4>Cabin {item.id}</h4>

                      {item.id === cabins.length && (
                        <span
                          className="corz_addCabin"
                          onClick={addCabin}
                        >
                          Add New Cabin +
                        </span>
                      )}
                    </div>

                    <div className="corz_peopleRow">
                      <div className="corz_peopleBox">
                        <label>Adults</label>
                        <p>12 Years & Above</p>
                        <select
                          value={item.adults}
                          onChange={(e) =>
                            updateCabin(item.id, "adults", e.target.value)
                          }
                        >
                          {[0,1,2,3,4].map((num) => (
                            <option key={num}>{num}</option>
                          ))}
                        </select>
                      </div>

                      <div className="corz_peopleBox">
                        <label>Children</label>
                        <p>2 Years - 12 Years</p>
                        <select
                          value={item.children}
                          onChange={(e) =>
                            updateCabin(item.id, "children", e.target.value)
                          }
                        >
                          {[0,1,2].map((num) => (
                            <option key={num}>{num}</option>
                          ))}
                        </select>
                      </div>

                      <div className="corz_peopleBox">
                        <label>Infant</label>
                        <p>1 Year - 2 Years</p>
                        <select
                          value={item.infant}
                          onChange={(e) =>
                            updateCabin(item.id, "infant", e.target.value)
                          }
                        >
                          {[0,1,2].map((num) => (
                            <option key={num}>{num}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    { cabins.length > 1 && (
                      <div
                        className="corz_removeCabin"
                        onClick={() => removeCabin(item.id)}
                      >
                        🗑 Remove Cabin
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ================= RIGHT SUMMARY ================= */}
      <div className="corz_itineraryCard">

        <h3 className="corz_tripTitle">
          Kochi - Lakshadweep - Mumbai
          <span>(3N/4D)</span>
        </h3>

        {/* Timeline */}
        <div className="corz_timelineSection">

          <div className="corz_portBlock">
            <h4>Kochi</h4>
            <p>Feb 04, 2026</p>
            <span>Wed, 05:00 PM</span>
          </div>

          <div className="corz_timelineMiddle">
            <div className="corz_shipCircle">
              <FaShip />
            </div>
            <div className="corz_dottedLine"></div>
          </div>

          <div className="corz_portBlock">
            <h4>Mumbai</h4>
            <p>Feb 07, 2026</p>
            <span>Sat, 08:30 AM</span>
          </div>

        </div>

        <div className="corz_divider" />

        <div className="corz_visitingPorts">
          <h4>Visiting Ports:</h4>
          <p>Kochi | Lakshadweep | Mumbai</p>
        </div>

        <div className="corz_divider" />

        <div className="corz_summaryRow">

          <div className="corz_summaryLeft">
            <strong>
              {selectedCabin ? "01 Cabin" : "00 Cabin"}
            </strong>
            <span>
              <FaUsers />{" "}
              {selectedCabin ? `${totalGuests} Guests` : "00 Guests"}
            </span>
          </div>

          <div className="corz_summaryRight">
            <h2>₹ {totalPrice.toLocaleString()}</h2>
            <span>Excl. GST charges</span>
          </div>

        </div>

        <button 
          className="corz_proceedBtn"
          disabled={!isValid}
          onClick={() => {
            nextStep({
              selectedCabin,
              cabins,
              totalGuests,
              totalPrice
            });
          }}
        >
          Proceed
        </button>

      </div>
    </div>
  );
}
