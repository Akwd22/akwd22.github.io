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
  return [bitflase, placeholder, bitflase];
}

export default {
  fetch,
};
