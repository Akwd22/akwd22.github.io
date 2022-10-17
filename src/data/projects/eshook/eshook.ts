import { TProject } from "data/projects";

import Image_Thumbnail from "./images/npm.png";

const project: TProject = {
  slug: "eshook",
  title: "Event Source Hook",
  summary: "Une bibliothèque JavaScript permettant de facilement intercepter, modifier, et simuler des messages événementiels du serveur sur une page web.",
  tags: ["TypeScript", "Node", "CI", "Jasmine", "Bibliothèque"],
  thumbnail: Image_Thumbnail,
  description: `
  Cette bibliothèque JavaScript est un projet **personnel** que j'ai eu besoin de créer pour mon usage personnel dans mon projet [Bitflase](/projets/bitflase). J'en ai donc profité pour la **publier** sur [npm](https://www.npmjs.com/package/event-source-hook) puisqu'il n'en existait aucune.

  ### Apports

  C'est un projet plus petit, mais intéressant, car j'ai pu créer plusieurs **tests unitaires** avec le framework Jasmine. J'ai également automatisé l'exécution des tests unitaires sur Chrome, Firefox, Safari et le build du projet avec de **l'intégration continue** avec **GitHub Actions**. J'ai aussi utilisé **Babel** pour générer une version polyfill pour les **navigateurs anciens**.

  Par ailleurs, j'ai eu l'opportunité de **contribuer** à un [projet open-source](https://github.com/EventSource/eventsource/pull/289) pour résoudre un bug que j'ai rencontré à l'issue de ce projet.

  Pour résumer, ce projet m'a permis de découvrir le monde open-source et comment y contribuer notamment par la publication d'une bibliothèque et de la qualité nécessaire comme les tests, la documentation de l'API, etc. bien que je le faisais déjà jusqu'à présent.

  ### Fonctionnalités

  La bibliothèque se substitue à l'objet natif [EventSource](https://developer.mozilla.org/fr/docs/Web/API/EventSource) pour permettre d'intercepter, modifier, ou simuler les messages événementiels du serveur.

  Voici les fonctions de la bibliothèque :

  * Intercepter les nouvelles connexions au serveur, et modifier l'URL de connexion
  * Intercepter les événements entrants, les modifier, ou les bloquer
  * Simuler un événement entrant
  `,
  repository: "https://github.com/Akwd22/event-source-hook",
  website: "https://www.npmjs.com/package/event-source-hook",
  medias: [],
};

export default project;
