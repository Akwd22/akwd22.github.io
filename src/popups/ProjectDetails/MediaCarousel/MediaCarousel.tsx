import { TProject } from "data/projects";
import { FunctionComponent, useRef, useState } from "react";

import ButtonIcon from "components/ButtonIcon/ButtonIcon";
import MediaViewer from "popups/MediaViewer/MediaViewer";
import MediaThumbnail from "./MediaThumbnail";

import { ReactComponent as ArrowLeftIcon } from "assets/imgs/icons/arrow-left.svg";
import { ReactComponent as ArrowRightIcon } from "assets/imgs/icons/arrow-right.svg";
import "./MediaCarousel.css";

interface MediaCarouselProps {
  /** Ensemble des médias à afficher. */
  medias: TProject["medias"];

  /** Gestionnaire appelé lorsque un média est mis en plein écran ou réduit. */
  onMediaEnlarge: (isEnlarged: boolean) => void;
}

/** Composant du carrousel de médias d'un projet. */
const MediaCarousel: FunctionComponent<MediaCarouselProps> = (props) => {
  /** Index du média mis en plein écran. `null` si aucun. */
  const [enlargedMedia, setEnlargedMedia] = useState<number>(null);

  const carouselRef = useRef<HTMLDivElement>();

  /** Effectuer un défilement vers la gauche ou la droite. */
  function horizontalScroll(direction: "left" | "right") {
    const div = carouselRef.current;
    const offset = div.scrollWidth / props.medias.length;

    div.scrollTo({
      top: 0,
      left: div.scrollLeft + (direction === "left" ? -offset : +offset),
      behavior: "smooth",
    });
  }

  /**
   * Mettre en plein écran ou réduire un média.
   * @param mediaIndex Index du média à agrandir. `null` pour n'agrandir aucun média.
   */
  function enlargeMedia(mediaIndex: number | null) {
    setEnlargedMedia(mediaIndex);
    props.onMediaEnlarge(mediaIndex !== null);
  }

  /** Afficher les miniatures de tous les médias. */
  function thumbnails() {
    return props.medias.map((media, index) => <MediaThumbnail key={index} media={media} onClick={() => enlargeMedia(index)} />);
  }

  return (
    <div className="media-carousel">
      <div className="media-carousel-controls">
        <ButtonIcon icon={<ArrowLeftIcon />} onClick={() => horizontalScroll("left")} />
        <ButtonIcon icon={<ArrowRightIcon />} onClick={() => horizontalScroll("right")} />
      </div>

      <div className="media-carousel-thumbnails" ref={carouselRef}>
        {thumbnails()}
      </div>

      {enlargedMedia !== null && <MediaViewer currentIndex={enlargedMedia} medias={props.medias} onClose={() => enlargeMedia(null)} />}
    </div>
  );
};

export default MediaCarousel;
