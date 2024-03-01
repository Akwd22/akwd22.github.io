import { FunctionComponent } from "react";

import "./SlideMySkills.css";

/** Composant du diaporama affichant la liste de mes compétences de développeur. */
const SlideMySkills: FunctionComponent = () => {
  return (
    <div className="slide slide-my-skills">
      <div>
        <h3>Langages</h3>
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>C#</li>
          <li>PHP</li>
          <li>Java</li>
          <li>SQL</li>
        </ul>
      </div>

      <div>
        <h3>Technologies</h3>
        <ul>
          <li>React</li>
          <li>jQuery</li>
          <li>ASP.NET</li>
          <li>Electron</li>
          <li>Jest / Jasmine</li>
        </ul>
      </div>

      <div>
        <h3>Outils</h3>
        <ul>
          <li>WordPress</li>
          <li>Git</li>
        </ul>
      </div>
    </div>
  );
};

export default SlideMySkills;
