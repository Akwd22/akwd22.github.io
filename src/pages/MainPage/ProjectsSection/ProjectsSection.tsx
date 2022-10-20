import dataProjects, { TProject } from "data/projects";
import { FunctionComponent, useEffect, useState } from "react";

import ProjectCard from "./ProjectCard";

import "./ProjectsSection.css";

/** Composant de la section de la liste de mes projets. */
const ProjectsSection: FunctionComponent = () => {
  /** Données du projet. */
  const [projects, setProjects] = useState<TProject[]>([]);

  // Récupérer les données du projet.
  useEffect(() => {
    dataProjects.fetch().then((response) => setProjects(response));
  }, []);

  /** Afficher les cartes de chacun de mes projets. */
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
