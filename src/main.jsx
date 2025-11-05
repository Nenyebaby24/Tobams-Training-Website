import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Assessment from "./Pages/Assessment";
import CreateAccount from "./Pages/CreateAccount";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
