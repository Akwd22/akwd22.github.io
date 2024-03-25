import autolearn from "./projects/auto-learn/auto-learn";
import bitflase from "./projects/bitflase/bitflase";
import eshook from "./projects/eshook/eshook";
import eternelactif from "./projects/eternel-actif/eternel-actif";
import shakermagique from "./projects/shaker-magique/shaker-magique";

/** Type décrivant les données d'un projet. */
export type TProject = {
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
  /** URL du dépôt du projet. */
  repository?: string;
  /** URL du site où est hébergé le projet. */
  website?: string;
  /** Images et vidéos du projet. */
  medias: TProjectMedia[];
};

/** Type décrivant un média de projet. */
export type TProjectMedia = {
  /** Type du média. */
  type: "image" | "video";
  /** URL de l'image (miniature de la vidéo si type vidéo) */
  imageUrl: string;
  /** URL de la vidéo (uniquement si type vidéo). */
  videoUrl?: string;
  /** Orientation du média (paysage par défaut). */
  orientation?: "landscape" | "portrait";
  /** Description du contenu du média. */
  description?: string;
};

/**
 * Charger tous les projets.
 * @returns Promesse contenant tous les projets.
 */
export async function fetch(): Promise<TProject[]> {
  return [shakermagique, autolearn, bitflase, eshook, eternelactif];
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
