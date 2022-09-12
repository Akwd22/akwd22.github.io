import { FunctionComponent } from "react";
import "./SlideMySkills.css";

interface SlideMySkillsProps {}

const SlideMySkills: FunctionComponent<SlideMySkillsProps> = (props) => {
  return (
    <div className="slide-my-skills">
      <div>
        <h4 className="title-4">Langages</h4>
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>PHP</li>
          <li>Java</li>
          <li>SQL</li>
        </ul>
      </div>

      <div>
        <h4 className="title-4">Technologies</h4>
        <ul>
          <li>React</li>
          <li>Electron</li>
          <li>Jest / Jasmine</li>
          <li>jQuery</li>
        </ul>
      </div>

      <div>
        <h4 className="title-4">Outils</h4>
        <ul>
          <li>npm</li>
          <li>webpack</li>
        </ul>
      </div>
    </div>
  );
};

export default SlideMySkills;
