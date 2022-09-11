import React from "react";
import ReactDOM from "react-dom/client";

import Footer from "./components/layouts/Footer/Footer";
import Header from "./components/layouts/Header/Header";
import MainPage from "./components/pages/Main/MainPage";

import "./components/globals.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);
