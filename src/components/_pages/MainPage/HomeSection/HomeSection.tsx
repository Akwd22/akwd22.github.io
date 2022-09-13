import { FunctionComponent } from "react";

import Navbar from "./Navbar/Navbar";
import "./HomeSection.css";
import Logo from "./Logo/Logo";
import SliderInfos from "./SliderInfos/SliderInfos";
import { ReactComponent as ArrowIcon } from "assets/imgs/icons/arrow.svg";
import ButtonIcon from "components/ButtonIcon/ButtonIcon";

interface HomeSectionProps {}

const HomeSection: FunctionComponent<HomeSectionProps> = () => {
  return (
    <section className="home">
      <div className="home-background"></div>
      <Navbar />
      <div className="home-infos">
        <Logo />
        <div className="home-infos-content">
          <h1 className="title-1">
            Salut, c’est <span id="eddy">Eddy</span>
          </h1>
          <h2 className="title-2">Développeur web full-stack</h2>
          <div className="home-infos-slider">
            <SliderInfos />
          </div>
        </div>
      </div>
      <div id="button-to-projects">
        <p>Mes projets</p>
        <ButtonIcon icon={<ArrowIcon />} href="#mes-projets" />
      </div>
    </section>
  );
};

export default HomeSection;
