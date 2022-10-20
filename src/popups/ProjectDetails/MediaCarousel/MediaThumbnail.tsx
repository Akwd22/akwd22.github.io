import { FunctionComponent, useState } from "react";
import { TProjectMedia } from "data/projects";

import { ReactComponent as PlayIcon } from "assets/imgs/icons/play.svg";
import "./MediaThumbnail.css";

interface MediaThumbnailProps {
  /** Média de projet concerné. */
  media: TProjectMedia;

  /** Gestionnaire appelé lors d'un clique sur la miniature. */
  onClick?: () => void;
}

/** Composant d'une miniature d'un média dans le carrousel. */
const MediaThumbnail: FunctionComponent<MediaThumbnailProps> = ({ media, onClick }) => {
  /** Miniature est-elle en train de charger ? */
  const [loading, setLoading] = useState(true);

  return (
    <div className="media-carousel-thumbnail" data-type={media.type} data-orientation={media.orientation || "landscape"} onClick={onClick}>
      {loading ? <span className="loading-icon"></span> : media.type === "video" && <PlayIcon className="play-icon" />}
      <img src={media.imageUrl} loading="lazy" title={media.description} alt="" onLoad={() => setLoading(false)} />
    </div>
  );
};

export default MediaThumbnail;
