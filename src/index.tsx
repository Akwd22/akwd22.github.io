import React from "react";
import ReactDOM from "react-dom/client";

import "components/globals.css";
import ProjectPopup from "components/Popup/ProjectPopup/ProjectPopup";
import MainPage from "components/_pages/MainPage/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
