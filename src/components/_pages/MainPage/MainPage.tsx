import { FunctionComponent } from "react";

import usePageTitle from "hooks/usePageTitle";
import HomeSection from "./HomeSection/HomeSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import Footer from "components/Footer/Footer";

interface MainPageProps {}

const MainPage: FunctionComponent<MainPageProps> = () => {
  usePageTitle("Eddy Druet – Portfolio");

  return (
    <>
      <main>
        <HomeSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
