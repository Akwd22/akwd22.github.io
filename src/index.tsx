import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";
import Main from "./layouts/Main/Main";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Projects from "./pages/Projects/Projects";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets/" element={<Projects />}>
            <Route path="nom-projet-1" />
            <Route path="nom-projet-2" />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
