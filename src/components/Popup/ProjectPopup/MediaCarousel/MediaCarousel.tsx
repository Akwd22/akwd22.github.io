import { FunctionComponent, useRef, useState } from "react";
import { ReactComponent as ArrowLeftIcon } from "assets/imgs/icons/arrow-left.svg";
import { ReactComponent as ArrowRightIcon } from "assets/imgs/icons/arrow-right.svg";
import { ReactComponent as PlayIcon } from "assets/imgs/icons/play.svg";
import "./MediaCarousel.css";
import ButtonIcon from "components/ButtonIcon/ButtonIcon";
import { TProject } from "data/projects";
import MediaPopup from "components/Popup/MediaPopup/MediaPopup";

interface MediaCarouselProps {
  medias: TProject["medias"];
  onFullscreen: (isFullscreen: boolean) => void;
}

const MediaCarousel: FunctionComponent<MediaCarouselProps> = (props) => {
  const [fullscreenMedia, setFullscreenMedia] = useState<{ isFullscreen: boolean; mediaIndex?: number }>({ isFullscreen: false });
  const carouselRef = useRef<HTMLDivElement>();

  function horizontalScroll(direction: "left" | "right") {
    const div = carouselRef.current;
    const offset = div.scrollWidth / props.medias.length;

    div.scrollTo({
      top: 0,
      left: div.scrollLeft + (direction === "left" ? -offset : +offset),
      behavior: "smooth",
    });
  }

  function setFullscreen(isFullscreen: boolean, mediaIndex?: number) {
    setFullscreenMedia({ isFullscreen, mediaIndex });
    props.onFullscreen(isFullscreen);
  }

  return (
    <div className="media-carousel">
      <div className="media-carousel-controls">
        <ButtonIcon icon={<ArrowLeftIcon />} onClick={() => horizontalScroll("left")} />
        <ButtonIcon icon={<ArrowRightIcon />} onClick={() => horizontalScroll("right")} />
      </div>

      <div className="media-carousel-thumbnails" ref={carouselRef}>
        {props.medias.map((media, index) => (
          <div key={index} className={"media-carousel-" + media.type} onClick={() => setFullscreen(true, index)}>
            {media.type === "video" && <PlayIcon className="media-carousel-play-icon" />}
            <img src={media.imageUrl} alt="" />
          </div>
        ))}
      </div>

      {fullscreenMedia.isFullscreen && <MediaPopup onClose={() => setFullscreen(false)} currentIndex={fullscreenMedia.mediaIndex} medias={props.medias} />}
    </div>
  );
};

export default MediaCarousel;
