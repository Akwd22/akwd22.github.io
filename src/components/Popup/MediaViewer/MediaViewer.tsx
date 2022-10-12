import cn from "classnames";
import { TProject } from "data/projects";
import { FunctionComponent, useRef, useState } from "react";
import { createPortal } from "react-dom";

import ButtonIcon from "components/ButtonIcon/ButtonIcon";
import LoadingIcon from "components/Icons/LoadingIcon/LoadingIcon";

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
  /** Média est-il en train de charger ? */
  const [loading, setLoading] = useState(true);
  /** Visionneuse est-elle en train de se fermer ? */
  const [state, setState] = useState<"opening" | "closing" | "idle">("opening");
  /** Index du média actuellement affiché. */
  const [shownIndex, setShownIndex] = useState(currentIndex);

  const viewerRef = useRef<HTMLDivElement>();

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

  return createPortal(
    <div
      className={cn("media-viewer")}
      data-state={state}
      data-loading={loading}
      ref={viewerRef}
      onAnimationEnd={() => {
        if (state === "opening") setState("idle");
        if (state === "closing") onClose();
        /* TODO : hook ? */
      }}
    >
      <div className="media-viewer-controls">
        <ButtonIcon id="media-viewer-close" icon={<CloseIcon />} onClick={() => setState("closing")} tooltip="Fermer la visionneuse" />
        <ButtonIcon id="media-viewer-prev" icon={<ArrowLeftIcon />} onClick={() => switchMedia("previous")} tooltip="Voir l'image précédente" />
        <ButtonIcon id="media-viewer-next" icon={<ArrowRightIcon />} onClick={() => switchMedia("next")} tooltip="Voir l'image suivante" />
      </div>

      {loading && <LoadingIcon />}

      {medias[shownIndex].type === "image" ? (
        <img className="media-viewer-image" src={medias[shownIndex].imageUrl} alt="" onLoad={() => setLoading(false)} />
      ) : (
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
      )}
    </div>,
    document.getElementById("popup")
  );
};

export default MediaViewer;
