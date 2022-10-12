import { FunctionComponent, useState } from "react";

import { ReactComponent as PlayIcon } from "assets/imgs/icons/play.svg";
import "./MediaThumbnail.css";

interface MediaThumbnailProps {
  /** Type du média. */
  type: "image" | "video";
  /** URL de l'image de miniature. */
  url: string;

  /** Gestionnaire appelé lors d'un clique sur la miniature. */
  onClick?: () => void;
}

/** Composant d'une miniature d'un média dans le carrousel. */
const MediaThumbnail: FunctionComponent<MediaThumbnailProps> = ({ type, url, onClick }) => {
  /** Miniature est-elle en train de charger ? */
  const [loading, setLoading] = useState(true);

  return (
    <div className={"media-carousel-thumbnail thumbnail-" + type} onClick={onClick}>
      {loading ? <span className="loading-icon"></span> : type === "video" && <PlayIcon className="play-icon" />}
      <img src={url} alt="" onLoad={() => setLoading(false)} />
    </div>
  );
};

export default MediaThumbnail;
