import { FunctionComponent, useRef } from "react";
import { ReactComponent as ArrowLeftIcon } from "assets/imgs/icons/arrow-left.svg";
import { ReactComponent as ArrowRightIcon } from "assets/imgs/icons/arrow-right.svg";
import { ReactComponent as PlayIcon } from "assets/imgs/icons/play.svg";
import "./MediaCarousel.css";
import ButtonIcon from "components/ButtonIcon/ButtonIcon";
import { TProject } from "data/projects";

interface MediaCarouselProps {
  videos: TProject["videos"];
  images: TProject["images"];
}

const MediaCarousel: FunctionComponent<MediaCarouselProps> = (props) => {
  const carouselRef = useRef<HTMLDivElement>();

  function horizontalScroll(direction: "left" | "right") {
    const div = carouselRef.current;
    const offset = div.scrollWidth / (props.videos.length + props.images.length);

    div.scrollTo({
      top: 0,
      left: div.scrollLeft + (direction === "left" ? -offset : +offset),
      behavior: "smooth",
    });
  }

  return (
    <div className="media-carousel">
      <div className="media-carousel-controls">
        <ButtonIcon icon={<ArrowLeftIcon />} onClick={() => horizontalScroll("left")} />
        <ButtonIcon icon={<ArrowRightIcon />} onClick={() => horizontalScroll("right")} />
      </div>

      <div className="media-carousel-thumbnails" ref={carouselRef}>
        {props.videos.map((video, index) => (
          <div key={index} className="media-carousel-video">
            <PlayIcon className="media-carousel-play-icon" />
            <img src={video.thumbnail} alt="" />
          </div>
        ))}

        {props.images.map((image, index) => (
          <div key={index} className="media-carousel-image">
            <img src={image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaCarousel;
