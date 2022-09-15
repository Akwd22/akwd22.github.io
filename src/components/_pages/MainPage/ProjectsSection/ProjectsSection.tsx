import { FunctionComponent, useEffect, useState } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import dataProjects, { TProject } from "data/projects";
import "./ProjectsSection.css";

interface ProjectsSectionProps {}

const ProjectsSection: FunctionComponent<ProjectsSectionProps> = (props) => {
  const [projects, setProjects] = useState<TProject[]>([]);

  useEffect(() => {
    dataProjects.fetch().then((response) => setProjects(response));
  }, []);

  function cards() {
    return projects.map((project) => <ProjectCard {...project} key={project.slug} />);
  }

  return (
    <section id="mes-projets" className="projects">
      {cards()}
    </section>
  );
};

export default ProjectsSection;
