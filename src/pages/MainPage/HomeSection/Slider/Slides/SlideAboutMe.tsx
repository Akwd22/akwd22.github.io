import { FunctionComponent } from "react";

import "./SlideAboutMe.css";

/** Composant du diaporama résumant mon statut, mon identité, et mon état d'esprit. */
const SlideAboutMe: FunctionComponent = () => {
  return (
    <div className="slide slide-about-me">
      <p>
        Je suis un développeur web junior, titulaire d’une licence en informatique, avec un approfondissement personnel acquis à travers la réalisation de projets sur
        diverses technologies web.
      </p>

      <h3>Mon état d’esprit</h3>
      <ul>
        <li>Maîtriser toujours plus de compétences</li>
        <li>Défenseur du code propre, testable, et documenté</li>
        <li>Impératif de produire des projets de qualité pour l’utilisateur</li>
      </ul>
    </div>
  );
};

export default SlideAboutMe;
