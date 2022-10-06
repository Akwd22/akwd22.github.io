import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProjectPopup from "components/Popup/ProjectPopup/ProjectPopup";
import MainPage from "pages/MainPage/MainPage";

import "assets/globals.css";

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="projets/:slug" element={<ProjectPopup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
