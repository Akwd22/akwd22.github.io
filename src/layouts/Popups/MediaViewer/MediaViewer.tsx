import { TProject } from "data/projects";
import { FunctionComponent, useRef, useState } from "react";
import { createPortal } from "react-dom";

import ButtonIcon from "components/ButtonIcon/ButtonIcon";

import useAnimationState from "hooks/useAnimationState";
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
const MediaViewer: FunctionComponent<MediaViewerProps> = ({ currentIndex, medias, onClose }) => {
  /** Index du média actuellement affiché. */
  const [shownIndex, setShownIndex] = useState(currentIndex);
  /** Média est-il en train de charger ? */
  const [loading, setLoading] = useState(true);

  const viewerRef = useRef<HTMLDivElement>();

  const setState = useAnimationState(
    viewerRef,
    {
      opening: {
        duration: 250,
        toState: "idle",
      },

      closing: {
        duration: 250,
        onEnd: onClose,
      },

      idle: {},
    },
    "opening"
  );

  useOutsideClick(viewerRef, () => setState("closing"));

  /** Afficher le média précédent ou suivant. */
  const switchMedia = (direction: "next" | "previous") => {
    let newIndex = shownIndex + (direction === "next" ? +1 : -1);

    if (newIndex >= medias.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = medias.length - 1;
    }

    setLoading(true);
    setShownIndex(newIndex);
  };

  /** Afficher le média. */
  const media = () => {
    const media = medias[shownIndex];

    switch (media.type) {
      case "image":
        return <img className="media-viewer-image" src={media.imageUrl} alt="" onLoad={() => setLoading(false)} />;
      case "video":
        return (
          <iframe
            className="media-viewer-video"
            width="100%"
            height="100%"
            src={medias[shownIndex].videoUrl}
            title="Lecteur vidéo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => setLoading(false)}
          ></iframe>
        );
      default:
        throw new Error("Unknown media type:" + media.type);
    }
  };

  return createPortal(
    <div className="media-viewer" ref={viewerRef} data-loading={loading}>
      <div className="media-viewer-controls">
        <ButtonIcon id="media-viewer-close" icon={<CloseIcon />} tooltip="Fermer la visionneuse" onClick={() => setState("closing")} />
        <ButtonIcon id="media-viewer-prev" icon={<ArrowLeftIcon />} tooltip="Voir l'image précédente" onClick={() => switchMedia("previous")} />
        <ButtonIcon id="media-viewer-next" icon={<ArrowRightIcon />} tooltip="Voir l'image suivante" onClick={() => switchMedia("next")} />
      </div>

      {loading && <span className="loading-icon"></span>}
      {media()}
    </div>,
    document.getElementById("popup")
  );
};

export default MediaViewer;
