import { FunctionComponent } from "react";

import usePageTitle from "hooks/usePageTitle";
import HomeSection from "./HomeSection/HomeSection";

interface MainPageProps {}

const MainPage: FunctionComponent<MainPageProps> = () => {
  usePageTitle("Eddy Druet – Portfolio");

  return (
    <main>
      <HomeSection />
    </main>
  );
};

export default MainPage;
