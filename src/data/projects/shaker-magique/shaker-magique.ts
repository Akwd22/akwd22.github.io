import { TProject } from "data/projects";

import ImageD_Home from "./images/desktop/home.png";
import ImageD_CocktailDetails from "./images/desktop/cocktail-details.png";
import ImageD_Login from "./images/desktop/login.png";
import ImageD_Register from "./images/desktop/register.png";
import ImageD_Profile from "./images/desktop/profile.png";
import ImageD_JoinHost from "./images/desktop/join-host.png";
import ImageD_HostCocktails from "./images/desktop/host-cocktails.png";
import ImageD_HostIngredients from "./images/desktop/host-ingredients.png";
import ImageD_CreateCocktail from "./images/desktop/create-cocktail.png";
import ImageD_CreateIngredient from "./images/desktop/create-ingredient.png";
import ImageM_Home from "./images/mobile/home.png";
import ImageM_CocktailDetails from "./images/mobile/cocktail-details.png";

const project: TProject = {
  slug: "shaker-magique",
  title: "Shaker Magique",
  summary: "Un site web permettant aux organisateurs de soirées de gérer leur carte de cocktails et de les proposer aux invités en fonction des ingrédients disponibles.",
  tags: ["React", "Django", "Rest API", "SQL", "Responsive", "Agile"],
  thumbnail: ImageD_Home,
  description: `
  Ce projet est un site web pour un **client réel**, développé en groupe de **6 étudiants** dans le cadre du projet du **3ème semestre** du **DUT** informatique. J'ai **contribué à toutes les phases** du projet, incluant l'analyse, le design web, le front-end, le back-end, ainsi que la gestion du projet.

  Le projet s'est déroulé en trois phases :
  * Phase d'analyse des besoins : diagrammes de cas d'utilisation, de séquences et d'entité-relation ; maquettes avec [Adobe XD](https://www.adobe.com/fr/products/xd.html)
  * Phase de développement : mise en œuvre des fonctionnalités sur une période de **deux mois**
  * Phase finale : correction des bugs, amélioration visuelle et **déploiement chez le client**

  La conduite de projet a suivi des **méthodes agiles**, impliquant un contact régulier avec le client pour présenter et valider les avancées. Nous avons organisé des **visioconférences** toutes les **deux semaines** afin de présenter l'état d'avancement du projet.

  ### Fonctionnalités

  Le site web offre la possibilité de partager des cartes de cocktails avec des amis lors de soirées, en tenant compte des ingrédients disponibles chez l'organisateur de la soirée (l'hôte). En effet, si l'organisateur propose un cocktail mais qu'il ne dispose pas de tous les ingrédients nécessaires, il ne sera pas affiché, à moins que l'invité ne sélectionne le filtre correspondant.

  * En tant qu'invité, rejoignez un hôte de soirée avec son code pour consulter ses cocktails disponibles
  * En tant qu'hôte, gérez vos recettes de cocktails et votre stock d'ingrédients
  * Trouvez des cocktails grâce à différents filtres de recherche
  * Notez sur 5 étoiles les recettes de cocktails

  *Survolez les images pour une description de celles-ci.*
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
