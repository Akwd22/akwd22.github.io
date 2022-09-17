import { FunctionComponent, useState } from "react";
import { createPortal } from "react-dom";
import { ReactComponent as ArrowLeftIcon } from "assets/imgs/icons/arrow-left.svg";
import { ReactComponent as ArrowRightIcon } from "assets/imgs/icons/arrow-right.svg";
import { ReactComponent as CloseIcon } from "assets/imgs/icons/close-white.svg";
import "./MediaPopup.css";
import ButtonIcon from "components/ButtonIcon/ButtonIcon";
import { TProject } from "data/projects";

interface MediaPopupProps {
  currentIndex: number;
  medias: TProject["medias"];
  onClose?: () => void;
}

const MediaPopup: FunctionComponent<MediaPopupProps> = (props) => {
  const [currentIndex, setCurrentIndex] = useState(props.currentIndex);

  function switchMedia(direction: "next" | "previous") {
    let newIndex = currentIndex + (direction === "next" ? +1 : -1);

    if (newIndex >= props.medias.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = props.medias.length - 1;
    }

    setCurrentIndex(newIndex);
  }

  return createPortal(
    <div className="media-popup">
      <div className="media-popup-controls">
        <ButtonIcon id="close-media-popup" icon={<CloseIcon width={48} height={48} />} onClick={() => props.onClose()} />
        <ButtonIcon id="prev-media-popup" icon={<ArrowLeftIcon width={64} height={64} />} onClick={() => switchMedia("previous")} />
        <ButtonIcon id="next-media-popup" icon={<ArrowRightIcon width={64} height={64} />} onClick={() => switchMedia("next")} />
      </div>
      {props.medias[currentIndex].type === "image" ? (
        <img src={props.medias[currentIndex].imageUrl} alt="" />
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={props.medias[currentIndex].videoUrl}
          title="YouTube Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>,
    document.getElementById("popup")
  );
};

export default MediaPopup;
