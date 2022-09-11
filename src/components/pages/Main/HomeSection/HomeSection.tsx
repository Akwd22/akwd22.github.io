import { FunctionComponent } from "react";

import Navbar from "./Navbar/Navbar";
import "./HomeSection.css";

interface HomeSectionProps {}

const HomeSection: FunctionComponent<HomeSectionProps> = () => {
  return (
    <section className="home">
      <div className="home-background"></div>
      <Navbar />
    </section>
  );
};

export default HomeSection;
