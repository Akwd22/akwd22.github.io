import { TProject } from "data/projects";
import Image1 from "assets/imgs/projects/placeholder/1.jpg";
import Image2 from "assets/imgs/projects/placeholder/2.jpg";
import Image3 from "assets/imgs/projects/placeholder/3.jpg";
import Image4 from "assets/imgs/projects/placeholder/4.jpg";

const project: TProject = {
  slug: "placeholder",
  title: "Titre du projet",
  summary:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  tags: ["Tag 1", "Tag 2"],
  description: `Blabla...`,
  links: [
    {
      type: "repository",
      url: "https://github.com/Akwd22/graph-degeneracy",
    },
    {
      type: "website",
      url: "https://www.eddydruet.fr/graph-degeneracy/",
    },
  ],
  videos: [
    {
      thumbnail: Image2,
      url: "https://www.youtube.com/watch?v=tgVmvoZSV00",
    },
  ],
  images: [Image1, Image2, Image3, Image4, Image1, Image2, Image3],
};

export default project;
