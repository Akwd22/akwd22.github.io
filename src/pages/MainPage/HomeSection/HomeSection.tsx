import { FunctionComponent } from "react";

import ButtonIcon from "components/ButtonIcon/ButtonIcon";
import Navbar from "components/Navbar/Navbar";
import Logo from "./Logo";
import Slider from "./Slider/Slider";

import { ReactComponent as ArrowIcon } from "assets/imgs/icons/arrow-down.svg";
import "./HomeSection.css";

/** Composant de la section d'accueil résumant des informations sur moi. */
const HomeSection: FunctionComponent = () => {
  return (
    <section id="accueil" className="home">
      <header className="home-header">
        <Navbar />
      </header>

      <div className="home-content">
        <Logo />
        <div className="home-content-info">
          <div className="home-content-title">
            <h1 className="home-title-greetings">
              Salut, c’est <span>Eddy</span>
            </h1>
            <h2 className="home-title-job">Développeur web full-stack</h2>
          </div>
          <div className="home-content-slider">
            <Slider />
          </div>
        </div>
      </div>

      <div className="home-bottom">
        <ButtonIcon
          icon={
            <>
              <p>Mes projets</p>
              <ArrowIcon className="icon" />
            </>
          }
          href="#mes-projets"
          tooltip="Voir la liste de mes projets"
        />
      </div>

      <div className="home-background"></div>
    </section>
  );
};

export default HomeSection;
