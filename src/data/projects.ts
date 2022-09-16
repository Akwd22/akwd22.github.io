import bitflase from "./projects/bitflase";
import placeholder from "./projects/placeholder";

export interface TProject {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  thumbnail?: string;
  description: string;
  videos: string[];
  images: string[];
}

export async function fetch(): Promise<TProject[]> {
  return [bitflase, placeholder];
}

export async function fetchOne(slug: string): Promise<TProject | null> {
  const project = (await fetch()).find((project) => project.slug === slug);
  return project || null;
}

export default {
  fetch,
  fetchOne,
};
