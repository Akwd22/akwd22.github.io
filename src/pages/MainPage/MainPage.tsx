import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";

import HomeSection from "./HomeSection/HomeSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";

import usePageTitle from "hooks/usePageTitle";

/** Composant de la page principale contenant les sections d'accueil et des projets. */
const MainPage: FunctionComponent = () => {
  usePageTitle("Eddy Druet – Portfolio");

  return (
    <>
      <Outlet />
      <main id="main-page">
        <HomeSection />
        <ProjectsSection />
      </main>
    </>
  );
};

export default MainPage;
