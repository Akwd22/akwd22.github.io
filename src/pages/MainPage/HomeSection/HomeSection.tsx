import { FunctionComponent } from "react";

import ButtonIcon from "components/ButtonIcon/ButtonIcon";
import Logo from "./Logo/Logo";
import Navbar from "layouts/Navbar/Navbar";
import SliderInfos from "./SliderInfos/SliderInfos";

import { ReactComponent as ArrowIcon } from "assets/imgs/icons/arrow-down.svg";
import "./HomeSection.css";

/** Composant de la section d'accueil résumant des informations sur moi. */
const HomeSection: FunctionComponent = () => {
  return (
    <section id="accueil" className="home">
      <header className="home-header">
        <Navbar />
      </header>

      <div className="home-background"></div>

      <div className="home-content">
        <Logo />
        <div className="home-content-info">
          <div className="home-content-title">
            <h1 className="home-title-greetings">Salut, c’est <span>Eddy</span></h1>
            <h2 className="home-title-job">Développeur web full-stack</h2>
          </div>
          <div className="home-content-slider">
            <SliderInfos />
          </div>
        </div>
      </div>

      <div className="projects-button">
        <p>Mes projets</p>
        <ButtonIcon icon={<ArrowIcon />} href="#mes-projets" tooltip="Voir la liste de mes projets" />
      </div>
    </section>
  );
};

export default HomeSection;
