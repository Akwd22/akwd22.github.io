import cn from "classnames";
import { TProject } from "data/projects";
import { FunctionComponent, useRef } from "react";
import { Link } from "react-router-dom";

import Tag from "components/Tag/Tag";
import TagList from "components/TagList/TagList";

import useInViewport from "hooks/useInViewport";

import "./ProjectCard.css";

interface ProjectCardProps extends TProject {}

/** Composant d'une carte d'un projet. */
const ProjectCard: FunctionComponent<ProjectCardProps> = (props) => {
  const headerRef = useRef<HTMLDivElement>();
  const inViewport = useInViewport(headerRef, true);

  /** Afficher la liste de tags du projet. */
  const tags = () => {
    return props.tags.map((text, index) => <Tag text={text} key={index} />);
  };

  /** Afficher la miniature du projet. */
  const thumbnail = () => {
    return { backgroundImage: props.thumbnail && `url(${props.thumbnail})` };
  };

  return (
    <Link to={`/projets/${props.slug}`} className="project-card" title={`Voir le projet ${props.title}`} style={thumbnail()}>
      <div className={cn("project-card-header", { animate: inViewport })} ref={headerRef}>
        <TagList>{tags()}</TagList>

        <h2 className="project-card-title">{props.title}</h2>
        <p>{props.summary}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
