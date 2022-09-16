import dataProjects, { TProject } from "data/projects";
import useOutsideClick from "hooks/useOutsideClick";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate, useParams } from "react-router-dom";
import "./ProjectPopup.css";

interface ProjectPopupProps {}

const ProjectPopup: FunctionComponent<ProjectPopupProps> = (props) => {
  const { slug } = useParams();
  const [project, setProject] = useState<TProject>(null);
  const popupRef = useRef<HTMLDivElement>();

  useEffect(() => {
    dataProjects.fetchOne(slug).then(setProject);
  }, [slug]);

  return (
    project &&
    createPortal(
      <div className="project-popup" ref={popupRef}>
        {project.title}
      </div>,
      document.getElementById("popup")
    )
  );
};

export default ProjectPopup;
