import dataProjects, { TProject } from "data/projects";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ReactMarkdown from "react-markdown";
import { useNavigate, useParams } from "react-router-dom";

import ButtonIcon from "components/ButtonIcon/ButtonIcon";
import Tag from "components/Tag/Tag";
import TagList from "components/Tag/TagList";
import MediaCarousel from "./MediaCarousel/MediaCarousel";

import useDisableScroll from "hooks/useDisableScroll";
import useOutsideClick from "hooks/useOutsideClick";

import { ReactComponent as CloseIcon } from "assets/imgs/icons/close-black.svg";
import { ReactComponent as ExternalIcon } from "assets/imgs/icons/external.svg";
import { ReactComponent as GitHubIcon } from "assets/imgs/icons/github.svg";
import "./ProjectDetails.css";

/** Composant d'une popup de détail d'un projet. */
const ProjectDetails: FunctionComponent = () => {
  /** Données du projet. */
  const [project, setProject] = useState<TProject>(null);
  /** La popup est-elle visible ? */
  const [visible, setVisible] = useState(true);

  const { slug } = useParams();
  const navigate = useNavigate();

  const detailsRef = useRef<HTMLDivElement>();
  useOutsideClick(detailsRef, () => visible && navigate(".."));
  useDisableScroll();

  // Récupérer les données du projet.
  useEffect(() => {
    dataProjects.fetchOne(slug).then(setProject);
  }, [slug]);

  /** Afficher les tags du projet. */
  function tags() {
    return project.tags.map((text, index) => <Tag text={text} key={index} />);
  }

  return (
    project &&
    createPortal(
      <article className="project-details" ref={detailsRef} style={{ visibility: visible ? "visible" : "hidden" }}>
        <header className="project-details-header">
          <div className="project-details-title">
            <h2>{project.title}</h2>
            <ButtonIcon id="project-details-close" icon={<CloseIcon />} tooltip="Fermer le projet" onClick={() => navigate("..")} />
          </div>

          <TagList>{tags()}</TagList>
        </header>

        <section className="project-details-content">
          <div className="project-details-title">
            <h3>Description</h3>
            <div className="project-details-links">
              {project.repository && <ButtonIcon icon={<GitHubIcon />} href={project.repository} target="_blank" tooltip="Voir le dépôt GitHub" />}
              {project.website && <ButtonIcon icon={<ExternalIcon />} href={project.website} target="_blank" tooltip="Voir le projet en ligne" />}
            </div>
          </div>

          <div className="project-details-description">
            <ReactMarkdown>{project.description}</ReactMarkdown>
          </div>
        </section>

        <section className="project-details-carousel">
          {project.medias.length > 0 && <MediaCarousel medias={project.medias} onMediaEnlarge={(isEnlarged) => setVisible(!isEnlarged)} />}
        </section>
      </article>,
      document.getElementById("popup")
    )
  );
};

export default ProjectDetails;
