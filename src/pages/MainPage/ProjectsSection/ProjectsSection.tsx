import dataProjects, { TProject } from "data/projects";
import { FunctionComponent, useEffect, useRef, useState } from "react";

import ProjectCard from "./ProjectCard/ProjectCard";

import "./ProjectsSection.css";

/** Composant de la section de la liste de mes projets. */
const ProjectsSection: FunctionComponent = () => {
  const [projects, setProjects] = useState<TProject[]>([]);

  useEffect(() => {
    dataProjects.fetch().then((response) => setProjects(response));
  }, []);

  /** Afficher les cartes de chacun de mes projets. */
  const cards = () => {
    return projects.map((project) => <ProjectCard {...project} key={project.slug} />);
  };

  return (
    <section id="mes-projets" className="projects">
      {cards()}
    </section>
  );
};

export default ProjectsSection;
