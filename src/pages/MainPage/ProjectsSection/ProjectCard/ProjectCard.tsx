import { TProject } from "data/projects";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import Tag from "components/Tag/Tag";
import TagList from "components/TagList/TagList";

import "./ProjectCard.css";

interface ProjectCardProps extends TProject {}

/** Composant d'une carte d'un projet. */
const ProjectCard: FunctionComponent<ProjectCardProps> = (props) => {
  /** Afficher la liste de tags du projet. */
  const tags = () => {
    return props.tags.map((text, index) => <Tag text={text} key={index} />);
  };

  /** Afficher la miniature du projet. */
  const thumbnail = () => {
    return { backgroundImage: props.thumbnail && `url(${props.thumbnail})` };
  };

  return (
    <Link to={`/projets/${props.slug}`} className="project-card" style={thumbnail()} title={`Voir le projet ${props.title}`}>
      <div className="project-card-header">
        <TagList>{tags()}</TagList>
        <h1 className="title-2">{props.title}</h1>
        <p>{props.summary}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
