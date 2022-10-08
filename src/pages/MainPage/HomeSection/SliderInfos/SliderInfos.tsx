import cn from "classnames";
import { FunctionComponent, useState } from "react";

import SlideAboutMe from "./Slides/SlideAboutMe";
import SlideMySkills from "./Slides/SlideMySkills";

import "./SliderInfos.css";

/** Liste des diapositives du slider. */
const SLIDES = [
  {
    buttonLabel: "Moi",
    component: <SlideAboutMe />,
  },
  {
    buttonLabel: "Compétences",
    component: <SlideMySkills />,
  },
];

/** Composant du diaporama contenant des diapositives résumant des informations sur moi. */
const SliderInfos: FunctionComponent = () => {
  /** Index du diaporama actif. */
  const [currentSlide, setCurrentSlide] = useState(0);

  /** Afficher les boutons de transition vers chaque diaporama du slider. */
  const sliderButtons = () => {
    return SLIDES.map((slide, index) => {
      const isActive = index === currentSlide;

      return (
        <span onClick={() => setCurrentSlide(index)} className={cn("button", { active: isActive })} key={slide.buttonLabel}>
          {slide.buttonLabel}
        </span>
      );
    });
  };

  /** Retourner le composant du diaporama actuellement actif. */
  const activeSlider = () => {
    return SLIDES[currentSlide].component;
  };

  /** Calculer le pourcentage de remplissage de la barre du slider. */
  const barPercent = () => {
    return ((currentSlide + 1) / SLIDES.length) * 100 + "%";
  };

  return (
    <div className="slider">
      <div className="slider-controls">
        <div className="slider-buttons">{sliderButtons()}</div>
        <div className="slider-bar">
          <span className="slider-entire-bar"></span>
          <span className="slider-inner-bar" style={{ width: barPercent() }}></span>
        </div>
      </div>
      <div className="slider-content">{activeSlider()}</div>
    </div>
  );
};

export default SliderInfos;
