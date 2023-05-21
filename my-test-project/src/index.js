import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import BackBtnToTop from "./utils/buttonBackToTop";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/Ann-Yurchuk/my-test-project">
      <BackBtnToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
