import ButtonIcon from "components/ButtonIcon/ButtonIcon";
import Tag from "components/Tag/Tag";
import TagList from "components/TagList/TagList";
import dataProjects, { TProject } from "data/projects";
import useOutsideClick from "hooks/useOutsideClick";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as CloseIcon } from "assets/imgs/icons/close.svg";
import { ReactComponent as GitHubIcon } from "assets/imgs/icons/github.svg";
import { ReactComponent as ExternalIcon } from "assets/imgs/icons/external.svg";
import "./ProjectPopup.css";
import ReactMarkdown from "react-markdown";
import MediaCarousel from "./MediaCarousel/MediaCarousel";

const LINK_TYPE_MAP = {
  repository: {
    icon: <GitHubIcon width={32} height={32} />,
    tooltip: "Voir le dépôt GitHub",
  },
  website: {
    icon: <ExternalIcon width={32} height={32} />,
    tooltip: "Voir le projet en ligne",
  },
};

interface ProjectPopupProps {}

const ProjectPopup: FunctionComponent<ProjectPopupProps> = (props) => {
  const { slug } = useParams();
  const [project, setProject] = useState<TProject>(null);
  const popupRef = useRef<HTMLDivElement>();
  const navigate = useNavigate();

  useEffect(() => {
    dataProjects.fetchOne(slug).then(setProject);
  }, [slug]);

  function tags() {
    return project.tags.map((text, index) => <Tag text={text} key={index} />);
  }

  function links() {
    return project.links.map((link) => (
      <ButtonIcon key={link.type} icon={LINK_TYPE_MAP[link.type].icon} tooltip={LINK_TYPE_MAP[link.type].tooltip} href={link.url} target="_blank" />
    ));
  }

  return (
    project &&
    createPortal(
      <div className="project-popup" ref={popupRef}>
        <header className="project-popup-header">
          <div className="project-popup-title">
            <h1 className="title-2">{project.title}</h1>
            <ButtonIcon icon={<CloseIcon width={40} height={40} />} tooltip="Fermer" onClick={() => navigate("..")} />
          </div>
          <TagList>{tags()}</TagList>
        </header>
        <main className="project-popup-content">
          <div className="project-popup-title">
            <h2 className="title-4">Description</h2>
            <div className="project-popup-links">{links()}</div>
          </div>
          <div className="project-popup-description">
            <ReactMarkdown>{project.description}</ReactMarkdown>
          </div>
        </main>
        <div className="project-popup-carousel">
          <MediaCarousel videos={project.videos} images={project.images} />
        </div>
      </div>,
      document.getElementById("popup")
    )
  );
};

export default ProjectPopup;
