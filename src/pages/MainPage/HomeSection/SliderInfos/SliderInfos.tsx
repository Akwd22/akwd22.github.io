import cn from "classnames";
import { FunctionComponent, useEffect, useState } from "react";

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
  /** Index de la diapositive active. */
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  /** Index de la diapositive qui va être affichée.  */
  const [pendingSlide, setPendingSlide] = useState<number>(null);

  /** Afficher les boutons de transition vers chaque diaporama du slider. */
  const sliderButtons = () => {
    return SLIDES.map((slide, index) => {
      const isActive = index === currentSlide;

      return (
        <button onClick={() => setPendingSlide(index !== currentSlide ? index : null)} className={cn("button", { active: isActive })} key={slide.buttonLabel}>
          {slide.buttonLabel}
        </button>
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

  /** Changer la diapositif active contre la diapositive en attente. */
  const switchSlide = () => {
    if (pendingSlide !== null) {
      setCurrentSlide(pendingSlide);
      setPendingSlide(null);
    }
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
      <div className={cn("slider-content", pendingSlide === null ? "fade-in" : "fade-out")} onAnimationEnd={switchSlide}>
        {activeSlider()}
      </div>
    </div>
  );
};

export default SliderInfos;
