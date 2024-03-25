import { TProject } from "data/projects";

import Image_Thumbnail from "./images/npm.png";

const project: TProject = {
  slug: "eshook",
  title: "Event Source Hook",
  summary: "Une bibliothèque JavaScript permettant de facilement intercepter, modifier, et simuler des messages événementiels du serveur sur une page web.",
  tags: ["TypeScript", "Node", "Jasmine", "Intégration continue"],
  thumbnail: Image_Thumbnail,
  description: `
  Cette bibliothèque JavaScript est un **projet personnel** que j'ai développé pour répondre à un besoin spécifique dans mon projet [Bitflase](/projets/bitflase). Par la suite, j'ai décidé de la **rendre publique** en la publiant sur [npm](https://www.npmjs.com/package/event-source-hook), car aucune autre solution similaire n'était disponible.

  ### Apports

  C'est un projet plus petit, mais intéressant, car j'ai pu concevoir plusieurs **tests unitaires** avec le framework Jasmine. J'ai également **automatisé** l'exécution de ces tests sur Chrome, Firefox et Safari ainsi que le processus de construction du projet grâce à l'**intégration continue** avec GitHub Actions. J'ai aussi utilisé Babel pour générer une version polyfill **compatible** avec les **navigateurs anciens**.

  En outre, j'ai eu l'opportunité de **contribuer** à un [projet open-source](https://github.com/EventSource/eventsource/pull/289) pour résoudre un bug que j'avais rencontré à l'issue de ce projet.

  En résumé, ce projet m'a initié au monde de l'open-source et à ses mécanismes de contribution, notamment en ce qui concerne la publication d'une bibliothèque ainsi que les standards de qualité comme les tests et la documentation de l'API, même si j'avais déjà une certaine expérience dans ce domaine.

  ### Fonctionnalités

  Cette bibliothèque remplace l'objet natif [EventSource](https://developer.mozilla.org/fr/docs/Web/API/EventSource) pour permettre l'interception, la modification ou la simulation des messages événementiels provenant du serveur.

  Voici les principales fonctions :

  * Intercepter les nouvelles connexions au serveur et modifier l'URL de connexion
  * Intercepter les événements entrants, les modifier ou les bloquer
  * Simuler un événement entrant
  `,
  repository: "https://github.com/Akwd22/event-source-hook",
  website: "https://www.npmjs.com/package/event-source-hook",
  medias: [],
};

export default project;
