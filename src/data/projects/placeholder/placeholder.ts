import { TProject } from "data/projects";

import Image1 from "./1.jpg";
import Image2 from "./2.jpg";
import Image3 from "./3.jpg";
import Image4 from "./4.jpg";

const project: TProject = {
  slug: "placeholder",
  title: "Titre du projet",
  summary:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  tags: ["Tag 1", "Tag 2"],
  description: `Blabla..
  fqz
  fqzqz

  fzqzqfges

  esghes

  egs
  hrd



  egsges
  esg
  sgsetfh

  ges
  gse

  ges

  ge

  g

  g

  g

  jtf

  ulkhul

  ettde


  tfuutf
  tse

  yrd
  qzffz

  gse

  gesg.

  f

  f

  f

  f

  f

  f

  f

  f

  g

  e

  u

  i

  a

  e

  y

  u

  i

  FIN`,
  repository: "https://github.com/Akwd22/graph-degeneracy",
  website: "https://www.eddydruet.fr/graph-degeneracy/",
  medias: [
    { type: "video", imageUrl: Image2, videoUrl: "https://www.youtube-nocookie.com/embed/tgVmvoZSV00" },
    { type: "image", imageUrl: Image1 },
    { type: "image", imageUrl: Image2 },
    { type: "image", imageUrl: Image3 },
    { type: "image", imageUrl: Image4 },
    { type: "image", imageUrl: Image1 },
    { type: "image", imageUrl: Image2 },
    { type: "image", imageUrl: Image3 },
  ],
};

export default project;
