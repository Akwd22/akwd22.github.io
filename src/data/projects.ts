import bitflase from "./projects/bitflase/bitflase";
import placeholder from "./projects/placeholder/placeholder";

/** Interface d'un projet. */
export interface TProject {
  /** Identifiant du projet (utilisé dans l'URL). */
  slug: string;
  /** Titre du projet. */
  title: string;
  /** Résumé du projet. */
  summary: string;
  /** Liste de tags du projet (ex. technos utilisés). */
  tags: string[];
  /** URL de l'image de miniature. */
  thumbnail?: string;
  /** Description du projet (format Markdown). */
  description: string;
  /** Liens externes associés au projet. */
  links: TProjectLink[];
  /** Images et vidéos du projet. */
  medias: TProjectMedia[];
}

/** Interface d'un lien externe de projet. */
export interface TProjectLink {
  /** Type du lien (ex. dépôt GitHub pour `repository`, ou un site quelconque pour `website`). */
  type: "repository" | "website";
  /** URL du lien. */
  url: string;
}

/** Interface d'un média de projet. */
export interface TProjectMedia {
  /** Type du média. */
  type: "image" | "video";
  /** URL de l'image (miniature de la vidéo si type vidéo) */
  imageUrl: string;
  /** URL de la vidéo (uniquement si type vidéo). */
  videoUrl?: string;
}

/**
 * Charger tous les projets.
 * @returns Promesse contenant tous les projets.
 */
export async function fetch(): Promise<TProject[]> {
  return [bitflase, placeholder];
}

/**
 * Charger un projet en particulier.
 * @param slug Identifiant du projet.
 * @returns Promesse contenant le projet ou `null`.
 */
export async function fetchOne(slug: string): Promise<TProject | null> {
  const project = (await fetch()).find((project) => project.slug === slug);
  return project || null;
}

export default { fetch, fetchOne };
