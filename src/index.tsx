import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "pages/MainPage/MainPage";
import ArchivePage from "pages/ArchivePage/ArchivePage";
import ProjectDetails from "popups/ProjectDetails/ProjectDetails";
import CurriculumVitae from "assets/docs/cv-eddy-druet.pdf";
import StaticRedirect from "utils/StaticRedirect";

import Footer from "components/Footer/Footer";
import ToastManager from "components/ToastManager/ToastManager";

import "assets/styles/variables.css";
import "assets/styles/defaults.css";
import "assets/styles/fonts.css";
import "assets/styles/anims.css";
import "assets/styles/icons.css";

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
  <React.StrictMode>
    <ToastManager />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="projets/:slug" element={<ProjectDetails />} />
        </Route>
        <Route path="/archives" element={<ArchivePage />}>
          <Route path="projets/:slug" element={<ProjectDetails />} />
        </Route>

        <Route path="/cv" element={<StaticRedirect to={CurriculumVitae} />} />
      </Routes>
    </BrowserRouter>

    <Footer />
  </React.StrictMode>
);
