import dataProjects, { TProject } from "data/projects";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ReactMarkdown from "react-markdown";
import { useNavigate, useParams } from "react-router-dom";

import ButtonIcon from "components/ButtonIcon/ButtonIcon";
import Tag from "components/Tag/Tag";
import TagList from "components/TagList/TagList";
import MediaCarousel from "./MediaCarousel/MediaCarousel";

import useOutsideClick from "hooks/useOutsideClick";

import { ReactComponent as CloseIcon } from "assets/imgs/icons/close-black.svg";
import { ReactComponent as ExternalIcon } from "assets/imgs/icons/external.svg";
import { ReactComponent as GitHubIcon } from "assets/imgs/icons/github.svg";
import "./ProjectDetails.css";

const LINK_TYPE_MAP = {
  repository: {
    icon: <GitHubIcon />,
    tooltip: "Voir le dépôt GitHub",
  },
  website: {
    icon: <ExternalIcon />,
    tooltip: "Voir le projet en ligne",
  },
};

/** Composant d'une popup de détail d'un projet. */
const ProjectDetails: FunctionComponent = () => {
  /** Données du projet. */
  const [project, setProject] = useState<TProject>(null);
  /** La popup est-elle visible ? */
  const [visible, setVisible] = useState(true);

  const { slug } = useParams();
  const navigate = useNavigate();
  const detailsRef = useRef<HTMLDivElement>();

  useOutsideClick(detailsRef, () => {
    if (visible) navigate("..");
  });

  useEffect(() => {
    dataProjects.fetchOne(slug).then(setProject);
  }, [slug]);

  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, []);

  /** Afficher les tags du projet. */
  const tags = () => {
    return project.tags.map((text, index) => <Tag text={text} key={index} />);
  };

  /** Afficher les liens externes du projet. */
  const links = () => {
    return project.links.map((link) => (
      <ButtonIcon key={link.type} icon={LINK_TYPE_MAP[link.type].icon} tooltip={LINK_TYPE_MAP[link.type].tooltip} href={link.url} target="_blank" />
    ));
  };

  return (
    project &&
    createPortal(
      <div className="project-details" ref={detailsRef} style={{ visibility: visible ? "visible" : "hidden" }}>
        <header className="project-details-header">
          <div className="project-details-title">
            <h2>{project.title}</h2>
            <ButtonIcon id="project-details-close" icon={<CloseIcon />} tooltip="Fermer le projet" onClick={() => navigate("..")} />
          </div>

          <TagList>{tags()}</TagList>
        </header>

        <article className="project-details-content">
          <div className="project-details-title">
            <h3>Description</h3>
            <div className="project-details-links">{links()}</div>
          </div>

          <div className="project-details-description">
            <ReactMarkdown>{project.description}</ReactMarkdown>
          </div>
        </article>

        <div className="project-details-carousel">
          {project.medias.length > 0 && <MediaCarousel medias={project.medias} onMediaEnlarge={(isEnlarged) => setVisible(!isEnlarged)} />}
        </div>
      </div>,
      document.getElementById("popup")
    )
  );
};

export default ProjectDetails;
