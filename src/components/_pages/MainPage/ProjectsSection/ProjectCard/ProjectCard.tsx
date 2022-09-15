import Tag from "components/Tag/Tag";
import { FunctionComponent } from "react";
import TagList from "components/TagList/TagList";
import "./ProjectCard.css";
import { TProject } from "data/projects";

interface ProjectCardProps extends TProject {}

const ProjectCard: FunctionComponent<ProjectCardProps> = (props) => {
  function tags() {
    return props.tags.map((text, index) => <Tag text={text} key={index} />);
  }

  function thumbnail() {
    return props.thumbnail ? { backgroundImage: `url(${props.thumbnail})` } : { backgroundColor: "#1D1B18" };
  }

  return (
    <div className="project-card" style={thumbnail()}>
      <div className="project-card-header">
        <TagList>{tags()}</TagList>
        <h1 className="title-2">{props.title}</h1>
        <p>{props.summary}</p>
      </div>
    </div>
  );
};

export default ProjectCard;