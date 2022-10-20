import cn from "classnames";
import { FunctionComponent, useRef, useState } from "react";

import SlideAboutMe from "./Slides/SlideAboutMe";
import SlideMySkills from "./Slides/SlideMySkills";

import useAnimationState from "hooks/useAnimationState";

import "./Slider.css";

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

  const contentRef = useRef<HTMLDivElement>();

  const setState = useAnimationState(
    contentRef,
    {
      "switch-begin": {
        duration: 500,
        toState: "switch-end",
        onEnd: () => {
          if (pendingSlide === null) return;
          setCurrentSlide(pendingSlide); // Changer la diapositive une fois que l'autre a disparu.
          setPendingSlide(null);
        },
      },

      "switch-end": {
        duration: 500,
        toState: "idle",
      },

      idle: {},
    },
    "idle"
  );

  /** Démarrer le changement d'une nouvelle diapositive. */
  function beginSwitch(newIndex: number) {
    setPendingSlide(newIndex);
    setState("switch-begin");
  }

  /** Calculer le pourcentage de remplissage de la barre du slider. */
  function barPercent() {
    return ((currentSlide + 1) / SLIDES.length) * 100 + "%";
  }

  /** Afficher les boutons de transition vers chaque diaporama du slider. */
  function sliderButtons() {
    return SLIDES.map((slide, index) => {
      const isActive = index === currentSlide;

      return (
        <button onClick={() => index !== currentSlide && beginSwitch(index)} className={cn("button", { active: isActive })} key={slide.buttonLabel}>
          {slide.buttonLabel}
        </button>
      );
    });
  }

  /** Retourner le composant du diaporama actuellement actif. */
  function activeSlider() {
    return SLIDES[currentSlide].component;
  }

  return (
    <div className="slider">
      <div className="slider-controls">
        <div className="slider-buttons">{sliderButtons()}</div>
        <div className="slider-bar">
          <span className="slider-entire-bar"></span>
          <span className="slider-inner-bar" style={{ width: barPercent() }}></span>
        </div>
      </div>
      <div className="slider-content" ref={contentRef}>
        {activeSlider()}
      </div>
    </div>
  );
};

export default SliderInfos;
