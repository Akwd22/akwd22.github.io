import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProjectDetails from "components/Popup/ProjectDetails/ProjectDetails";
import MainPage from "pages/MainPage/MainPage";

import "assets/globals.css";

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="projets/:slug" element={<ProjectDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
