import { TProject } from "data/projects";
import { FunctionComponent, useRef, useState } from "react";
import { createPortal } from "react-dom";

import ButtonIcon from "components/ButtonIcon/ButtonIcon";

import useOutsideClick from "hooks/useOutsideClick";

import { ReactComponent as ArrowLeftIcon } from "assets/imgs/icons/arrow-left.svg";
import { ReactComponent as ArrowRightIcon } from "assets/imgs/icons/arrow-right.svg";
import { ReactComponent as CloseIcon } from "assets/imgs/icons/close-white.svg";
import "./MediaViewer.css";

interface MediaViewerProps {
  /** Index du média à afficher dès l'ouverture de la visionneuse. */
  currentIndex: number;
  /** Ensemble des médias de la visionneuse. */
  medias: TProject["medias"];

  /** Gestionnaire appelé lorsque la visionneuse est fermée. */
  onClose?: () => void;
}

/** Composant de la visionneuse de médias en plein écran. */
const MediaViewer: FunctionComponent<MediaViewerProps> = (props) => {
  /** Index du média actuellement affiché. */
  const [currentIndex, setCurrentIndex] = useState(props.currentIndex);

  const viewerRef = useRef<HTMLDivElement>();

  useOutsideClick(viewerRef, () => props.onClose());

  /** Afficher le média précédent ou suivant. */
  const switchMedia = (direction: "next" | "previous") => {
    let newIndex = currentIndex + (direction === "next" ? +1 : -1);

    if (newIndex >= props.medias.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = props.medias.length - 1;
    }

    setCurrentIndex(newIndex);
  };

  return createPortal(
    <div className="media-viewer" ref={viewerRef}>
      <div className="media-viewer-controls">
        <ButtonIcon id="close-media-viewer" icon={<CloseIcon width={48} height={48} />} onClick={() => props.onClose()} tooltip="Fermer le carrousel" />
        <ButtonIcon id="prev-media-viewer" icon={<ArrowLeftIcon width={64} height={64} />} onClick={() => switchMedia("previous")} tooltip="Voir l'image précédente" />
        <ButtonIcon id="next-media-viewer" icon={<ArrowRightIcon width={64} height={64} />} onClick={() => switchMedia("next")} tooltip="Voir l'image suivante" />
      </div>

      {props.medias[currentIndex].type === "image" ? (
        <img src={props.medias[currentIndex].imageUrl} alt="" />
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={props.medias[currentIndex].videoUrl}
          title="Lecteur vidéo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>,
    document.getElementById("popup")
  );
};

export default MediaViewer;
