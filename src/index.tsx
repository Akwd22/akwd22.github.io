import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NotificationManager from "layouts/NotificationManager/NotificationManager";
import ProjectDetails from "layouts/Popups/ProjectDetails/ProjectDetails";
import MainPage from "pages/MainPage/MainPage";
import ArchivePage from "pages/ArchivePage/ArchivePage";

import Footer from "layouts/Footer/Footer";

import "assets/styles/globals.css";
import "assets/styles/defaults.css";
import "assets/styles/fonts.css";
import "assets/styles/anims.css";

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
  <React.StrictMode>
    <NotificationManager />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="projets/:slug" element={<ProjectDetails />} />
        </Route>
        <Route path="/archives" element={<ArchivePage />}>
          <Route path="projets/:slug" element={<ProjectDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>

    <Footer />
  </React.StrictMode>
);
