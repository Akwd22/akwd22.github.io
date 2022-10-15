import { TProject } from "data/projects";

import ImageD_Home from "./desktop/home.png";
import ImageD_CocktailDetails from "./desktop/cocktail-details.png";
import ImageD_Login from "./desktop/login.png";
import ImageD_Register from "./desktop/register.png";
import ImageD_Profile from "./desktop/profile.png";
import ImageD_JoinHost from "./desktop/join-host.png";
import ImageD_HostCocktails from "./desktop/host-cocktails.png";
import ImageD_HostIngredients from "./desktop/host-ingredients.png";
import ImageD_CreateCocktail from "./desktop/create-cocktail.png";
import ImageD_CreateIngredient from "./desktop/create-ingredient.png";
import ImageM_Home from "./mobile/home.png";
import ImageM_CocktailDetails from "./mobile/cocktail-details.png";

const project: TProject = {
  slug: "shaker-magique",
  title: "Shaker Magique",
  summary: "Un site web permettant à un organisateur de soirée de gérer sa carte de cocktails et son stock d'ingrédients pour les proposer aux utilisateurs facilement.",
  tags: ["React", "Django", "Rest API", "SQL", "Responsive"],
  thumbnail: ImageD_Home,
  description: `
  Ce projet est un site web réalisé en groupe de **6 étudiants** dans le cadre du projet de **semestre n°3** du **DUT informatique**. J'ai participé à toutes les sphères du projet : **web-design**, **front-end**, **back-end**, ainsi que la **gestion de projet**.

  Le projet s'est déroulé en 3 phases :
  * Phase d'analyse des besoins : diagrammes de cas d'utilisation, séquences, et entité-relation en **UML** ; maquette UI avec **Adobe XD**
  * Phase de développement : implémentation des fonctionnalités sur une période de **2 mois**
  * Phase finale : correction des bugs, peaufinage visuel, et réunion avec le client pour présenter le livrable fini

  La conduite de projet a été menée par **méthodes agiles** où nous avions régulièrement contact avec le client pour montrer et faire valider les avancées. Nous avons réalisé des visioconférences **toutes les 2 semaines** pour montrer l'état du projet.

  ### Fonctionnalités

  L'intérêt du site web réside dans la possibilité de **proposer sa propre carte de cocktails** à ses amis lors de soirées par exemple, en fonction des ingrédients que l'organisateur de la soirée (hôte) **a en stock**. Car oui, si vous proposez un cocktail dans votre menu, mais que vous n'avez pas tous les ingrédients pour le réaliser, alors il n'apparaîtra pas, sauf si vous cochez le filtre ad hoc.

  * En tant qu'invité, rejoignez hôte de soirée pour consulter sa carte de cocktails disponibles
  * En tant qu'hôte, gérez vos recettes de cocktails et votre stock d'ingrédients
  * Trouvez des recettes de cocktails grâce à différents filtres de recherche
  * Notez sur 5 étoiles les recettes de cocktails
  `,
  repository: "https://github.com/Akwd22/shaker-magique",
  medias: [
    {
      type: "image",
      imageUrl: ImageD_Home,
      description: "Page d'accueil avec l'ensemble des cocktails disponibles de l'hôte que nous avons rejoint ou les cocktails que nous proposons (comme ici).",
    },
    {
      type: "image",
      imageUrl: ImageD_CocktailDetails,
      description: "Page d'un cocktail en détail. Il est possible d'attribuer une note.",
    },
    {
      type: "image",
      imageUrl: ImageD_Login,
      description: "Page de connexion.",
    },
    {
      type: "image",
      imageUrl: ImageD_Register,
      description: "Page d'inscription.",
    },
    {
      type: "image",
      imageUrl: ImageD_JoinHost,
      description: "Page pour rejoindre un hôte et avoir la possibilité de consulter ses cocktails disponibles.",
    },
    {
      type: "image",
      imageUrl: ImageD_Profile,
      description: "Page de profil utilisateur. Il est possible d'accéder à la gestion de ses cocktails et de son stock d'ingrédients.",
    },
    {
      type: "image",
      imageUrl: ImageD_HostCocktails,
      description: "Page pour gérer sa carte de cocktails.",
    },
    {
      type: "image",
      imageUrl: ImageD_HostIngredients,
      description: "Page pour gérer son stock d'ingrédients.",
    },
    {
      type: "image",
      imageUrl: ImageD_CreateCocktail,
      description: "Page pour créer (ou modifier) un cocktail. Il est possible d'indiquer les ingrédients avec la quantité et l'unité de mesure.",
    },
    {
      type: "image",
      imageUrl: ImageD_CreateIngredient,
      description: "Page pour créer (ou modifier) un ingrédient.",
    },
    { type: "image", imageUrl: ImageM_Home, orientation: "portrait" },
    { type: "image", imageUrl: ImageM_CocktailDetails, orientation: "portrait" },
  ],
};

export default project;
