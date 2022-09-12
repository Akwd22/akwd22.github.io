import { FunctionComponent, useState } from "react";
import "./SliderInfos.css";
import SlideAboutMe from "./Slides/SlideAboutMe";
import SlideMySkills from "./Slides/SlideMySkills";

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

interface SliderInfosProps {}

const SliderInfos: FunctionComponent<SliderInfosProps> = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderButtons = () => {
    return SLIDES.map((slide, index) => {
      const isActive = index === currentSlide;

      return (
        <span onClick={() => setCurrentSlide(index)} className={"button" + (isActive ? " active" : "")} key={slide.buttonLabel}>
          {slide.buttonLabel}
        </span>
      );
    });
  };

  const activeSlider = () => {
    return SLIDES[currentSlide].component;
  };

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
