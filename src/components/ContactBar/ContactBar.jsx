import React from "react";
import { Container } from "react-bootstrap";
import whatsapp from "./images/whatsapp-new-icon.svg";
import call from "./images/call-new-icon.svg";
import './Contact.css';

function ContactBar() {
  return (
    <div className="contact">
      <Container className="d-flex justify-content-left align-items-center gap-3 ms-5 ps-4">
        {/* Phone Contact */}
        <div className="d-flex align-items-center gap-2">
          <img src={call} style={{width:"18px",height:"18px"}}></img>
          <span>022-68811111</span>
        </div>

        {/* WhatsApp Contact */}
        <div className="d-flex align-items-center gap-2">
          <img src={whatsapp} style={{width:"18px",height:"18px"}}></img>
          <span>+91 7738850000</span>
        </div>
      </Container>
    </div>
  );
}

export default ContactBar;
