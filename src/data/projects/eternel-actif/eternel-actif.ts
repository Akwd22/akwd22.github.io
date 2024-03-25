import { TProject } from "data/projects";

import Image_Home from "./images/home.png";
import Image_HomeAll from "./images/home-all.png";

import Image_Activities from "./images/activities.png";
import Image_ActivityDetails from "./images/activity-details.png";
import Image_Booking from "./images/booking.png";
import Image_BookingInvoice from "./images/booking-invoice.png";
import Image_BookingEmail from "./images/booking-email.png";
import Image_CreateActivity from "./images/create-activity.png";

import Image_Profile from "./images/profile.png";
import Image_ActivityHistory from "./images/activity-history.png";
import Image_BookingHistory from "./images/booking-history.png";
import Image_AccountSettings from "./images/account-settings.png";

import Image_Blog from "./images/blog.png";
import Image_Members from "./images/members.png";

const project: TProject = {
  slug: "eternel-actif",
  title: "Eternel Actif",
  summary:
    "Une plateforme en ligne destinée aux seniors connectés, leur permettant de publier ou de s'inscrire à des activités gratuites ou payantes proposées par des établissements partenaires.",
  tags: ["WordPress", "WooCommerce", "PHP", "MVC", "Stage"],
  thumbnail: Image_Home,
  description: `
  Ce site web a été réalisé **tout seul** dans mon **stage** de fin d'études de **DUT** informatique en **2 mois** et en **télétravail**. Eternel Actif est un projet entrepreneurial né en 2020 par trois étudiants toulousains en commerce : [Valentin Luzuy](https://fr.linkedin.com/in/valentin-luzuy-77991b130), [Kamil Bennani](https://fr.linkedin.com/in/kamil-bennani-092247138), et [Jade Wagner](https://fr.linkedin.com/in/jade-wagner-68b35a146). Pour lancer leur projet, ils ont eu besoin d'un développeur pour créer un site web de réservation d'activités en ligne.

  ### Responsabilités

  Mes missions à partir d'un cahier des charges lors de ce stage ont été :

  * Améliorer, et éventuellement, corriger le contenu existant
  * Développer les fonctionnalités de base, dont l'instauration d'une plateforme e-commerce et marketplace
  * Conseiller technique, veille concurrentielle, et réalisation de documents de maintenance
  * Participer aux sessions de brainstorming

  Pour cela, j'ai dû développer un plugin WordPress pour implémenter les fonctionnalités dont aucun plugin gratuit n'existait sur le marché. Plus précisément, j'ai étendu les plugins [WooCommerce](https://fr.wordpress.org/plugins/woocommerce/) et [WC Marketplace](https://fr.wordpress.org/plugins/dc-woocommerce-multi-vendor/) pour les adapter à une plateforme de réservation d'activités dont des tiers peuvent percevoir des commissions sur leurs activités.

  Concernant le système de profil, j'ai dû étendre le plugin [Ultimate Member](https://fr.wordpress.org/plugins/ultimate-member/) pour le connecter avec le système de réservation pour avoir un historique de réservations et avoir les informations de l'organisateur et des participants à l'activité.

  ### Fonctionnalités

  En tant que membre senior :

  * Créer son profil utilisateur
  * Consulter un catalogue d'activités gratuites ou payantes
  * Réserver des activités à partir du catalogue
  * Publier des activités gratuites dans le catalogue
  * Consulter son historique de réservations, d'activités publiées, et ses factures
  * Lire les actualités publiées dans le blog

  En tant que partenaire professionnel :

  * Demander une adhésion en tant que partenaire
  * Publier des activités payantes dans le catalogue
  * Percevoir des commissions tous les mois à chaque réservation de ses activités
  * Consulter l'historique des réservations et les gains obtenus
  * Recevoir un e-mail à chaque nouvelle réservation

  *Survolez les images pour une description de celles-ci.*
  `,
  website: "https://web.archive.org/web/20220308202659/https://eternelactif.fr/",
  medias: [
    {
      type: "image",
      imageUrl: Image_HomeAll,
      description: "Page d'accueil.",
    },

    {
      type: "image",
      imageUrl: Image_Activities,
      description: "Page du catalogue des activités en ligne. Plusieurs filtres de recherche sont disponibles.",
    },
    {
      type: "image",
      imageUrl: Image_ActivityDetails,
      description: "Page de détail d'une activité avec la liste des participants, le prix, et le lieu et date du rendez-vous si l'activité a été réservée.",
    },
    {
      type: "image",
      imageUrl: Image_Booking,
      description: "Page de validation d'une réservation d'activité.",
    },
    {
      type: "image",
      imageUrl: Image_BookingInvoice,
      description: "Page de confirmation de réservation avec les moyens de contact de l'organisateur et le lieu du rendez-vous.",
    },
    {
      type: "image",
      imageUrl: Image_BookingEmail,
      description: "E-mail de confirmation d'une réservation d'activité.",
    },
    {
      type: "image",
      imageUrl: Image_CreateActivity,
      description: "Page de création d'une activité. Les membres ne peuvent proposer que des activités gratuites, à contrario d'un membre partenaire professionnel.",
    },

    {
      type: "image",
      imageUrl: Image_Profile,
      description: "Page de profil d'un membre. Il est possible d'y consulter son historique de réservations et d'activités publiées.",
    },
    {
      type: "image",
      imageUrl: Image_ActivityHistory,
      description: "Page d'historique des activités publiées par le membre.",
    },
    {
      type: "image",
      imageUrl: Image_BookingHistory,
      description: "Page d'historique des réservations du membre avec possibilité de télécharger la facture si activité payante.",
    },
    {
      type: "image",
      imageUrl: Image_AccountSettings,
      description: "Page des paramètres du compte. Ici, il est possible de faire une demande de compte professionnel pour proposer des activités payantes.",
    },

    {
      type: "image",
      imageUrl: Image_Blog,
      description: "Page de blog.",
    },
    {
      type: "image",
      imageUrl: Image_Members,
      description: "Page de la liste des membres.",
    },
  ],
};

export default project;
