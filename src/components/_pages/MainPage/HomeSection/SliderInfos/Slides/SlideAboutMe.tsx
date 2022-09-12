import { FunctionComponent } from "react";
import "./SlideAboutMe.css";

interface SlideAboutMeProps {}

const SlideAboutMe: FunctionComponent<SlideAboutMeProps> = (props) => {
  return (
    <div className="slide-about-me">
      <p>
        Je suis développeur web full-stack tout juste diplômé d’une licence en informatique, mais avec une expérience autodidacte d'environ 2 années dans divers projets et
        technologies web.
      </p>
      <h4 className="title-4">Mon état d'esprit</h4>
      <ul>
        <li>Maîtriser le plus de compétences pour être polyvalent,</li>
        <li>Fanatique du code propre, des conventions et de la qualité,</li>
        <li>Passionné de produire des projets de qualité pour l’utilisateur.</li>
      </ul>
    </div>
  );
};

export default SlideAboutMe;
