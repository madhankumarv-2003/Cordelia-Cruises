import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

import logo from "./Images/cordelia_onlylogo.svg";
import leftarrow from "./Images/left-arrow.svg";
import whatsapp from "../../../components/ContactBar/images/whatsapp-new-icon.svg";

import { useNavigate } from "react-router-dom";
import CruiseLayout from "./CruiseLayout/CruiseLayout";
import "./BookKochi.css";

const BookKochi = ({ showContact = true }) => {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, label: "Select Cabin" },
    { id: 2, label: "Payment Summary" },
    { id: 3, label: "Payments" },
  ];

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="cabin-header">
        <div className="cabin-left">
          <img src={logo} alt="logo" className="cabin-logo" />

          <div className="divider"></div>

          <img
            src={leftarrow}
            className="left-arrow"
            alt="back"
            onClick={() => navigate(-1)}
          />

          <h2 className="cabin-title">
            {steps[currentStep - 1].label}
          </h2>
        </div>

        {showContact && (
          <div className="cabin-right">
            <div className="contact-item">
              <FaPhoneAlt />
              <span>022-68811111</span>
            </div>

            <div className="d-flex align-items-center gap-2">
              <img
                src={whatsapp}
                alt="whatsapp"
                style={{ width: "20px", height: "20px" }}
              />
              <span>+91 7738850000</span>
            </div>
          </div>
        )}
      </header>

      {/* ================= STEP PROGRESS ================= */}
      <div className="step-container">
        <div className="step-line"></div>

        {steps.map((step) => (
          <div key={step.id} className="step-item">
            <div
              className={`step-circle ${
                currentStep === step.id
                  ? "active"
                  : currentStep > step.id
                  ? "completed"
                  : ""
              }`}
            >
              {currentStep > step.id ? "✔" : currentStep === step.id ? "" : step.id}
            </div>

            <p className="step-label">{step.label}</p>
          </div>
        ))}
      </div>

      {/* ================= STEP CONTENT ================= */}
      {currentStep === 1 && (
        <CruiseLayout
          nextStep={nextStep}
        />
      )}


      {currentStep === 2 && (
        <div className="step-content">  
          <h3>Payment Summary</h3>
          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep}>Proceed to Payment</button>
        </div>
      )}

      {currentStep === 3 && (
        <div className="step-content">
          <h3>Payment Page</h3>
          <button onClick={prevStep}>Back</button>
        </div>
      )}

      {/* ================= FOOTER BUTTON ================= */}
      {currentStep === 1 && (
        <div className="bottom-btn">
          <button onClick={nextStep} className="primary-btn">
            Continue
          </button>
          
        </div>
      )}
    </>
  );
};

export default BookKochi;
