import { FunctionComponent } from "react";

import "./SlideMySkills.css";

/** Composant du diaporama affichant la liste de mes compétences de développeur. */
const SlideMySkills: FunctionComponent = () => {
  return (
    <div className="slide slide-my-skills">
      <div>
        <h3>Langages</h3>
        <ul>
          <li>C#</li>
          <li>PHP</li>
          <li>SQL</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>HTML / CSS</li>
        </ul>
      </div>

      <div>
        <h3>Technologies</h3>
        <ul>
          <li>ASP.NET Core (+ EF)</li>
          <li>React</li>
          <li>jQuery</li>
          <li>Electron</li>
          <li>Jest / Jasmine</li>
        </ul>
      </div>

      <div>
        <h3>Outils</h3>
        <ul>
          <li>WordPress</li>
          <li>Node.js</li>
          <li>Git</li>
        </ul>
      </div>
    </div>
  );
};

export default SlideMySkills;
