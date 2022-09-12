import React from "react";
import ReactDOM from "react-dom/client";

import MainPage from "components/_pages/MainPage/MainPage";
import "components/globals.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);
