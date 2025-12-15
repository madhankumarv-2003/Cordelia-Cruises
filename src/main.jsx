import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "@fontsource/open-sans";        // Default weight 400
import "@fontsource/open-sans/700.css"; // Bold

import App from "./App";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
