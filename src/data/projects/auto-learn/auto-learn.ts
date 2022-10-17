import { TProject } from "data/projects";

import Image_Home from "./images/light/home.png";
import Image_Courses from "./images/dark/courses.png";
import Image_Tests from "./images/light/tests.png";
import Image_Profile from "./images/dark/profile.png";

import Image_CourseVideo from "./images/light/course-video.png";
import Image_CourseText from "./images/dark/course-text.png";

import Image_TestIntro from "./images/light/test-intro.png";
import Image_TestQuestion1 from "./images/dark/test-question-uni.png";
import Image_TestQuestion2 from "./images/light/test-question-input.png";
import Image_TestQuestion3 from "./images/dark/test-question-multi.png";
import Image_TestEnd from "./images/light/test-end.png";

import Image_EditCourseVideo from "./images/dark/edit-course-video.png";
import Image_EditCourseText from "./images/light/edit-course-text.png";
import Image_EditTest from "./images/dark/edit-test.png";

import Image_Users from "./images/light/users.png";
import Image_Settings from "./images/dark/settings.png";
import Image_Login from "./images/light/login.png";
import Image_Register from "./images/dark/register.png";

const project: TProject = {
  slug: "auto-learn",
  title: "Auto Learn",
  summary: "Un site web pour apprendre avec des cours et se tester avec des quiz ainsi que suivre sa progression en créant un profil utilisateur.",
  tags: ["JavaScript", "PHP", "SQL", "MVC", "Scrum"],
  thumbnail: Image_Courses,
  description: `
  Ce projet est un projet académique en groupe de **6 étudiants** réalisé lors de la **3ème année** de **licence** en informatique. J'ai participé à la **conception UML** et au développement **back-end**.

  J'ai eu un rôle important en tant que **Project Owner** dans la stratégie de projet **Scrum**. Je me suis chargé d'établir l'outil de gestion de projet [ClickUp](https://clickup.com/), de constituer le backlog et les user stories. J'ai réalisé les diagrammes de cas d'utilisation, de classes, et entité-relation en concert avec l'équipe.

  Nous avons organisé le développement en 4 sprints de deux semaines avec réunions inter-sprint, chaque sprint étant dédié à une epic story :

  * Gestion de la connexion et inscription
  * Gestion du profil utilisateur
  * Gestion des cours
  * Gestion des quiz

  ### Fonctionnalités

  Un site web pour apprendre avec des **cours** et se tester avec des **quiz** en suivant sa progression en créant un profil utilisateur.

  * Passez des tests de connaissances et obtenez des suggestions de cours en fonction de votre score
  * Trouvez des cours et des tests grâce à divers filtres de recherche
  * Visionnez des cours vidéo ou textuels
  * Suivez vos cours et tests commencés et terminés
  * Thème clair et foncé selon la préférence de l'appareil

  *Survolez les images pour une description de celle-ci.*
  `,
  repository: "https://github.com/Akwd22/auto-learn",
  medias: [
    {
      type: "image",
      imageUrl: Image_Home,
      description: "Page d'accueil.",
    },
    {
      type: "image",
      imageUrl: Image_Courses,
      description: "Page de la liste des cours disponibles qu'il est possible de filtrer.",
    },
    {
      type: "image",
      imageUrl: Image_Tests,
      description: "Page de la liste des tests de connaissances disponibles qu'il est possible de filtrer.",
    },
    {
      type: "image",
      imageUrl: Image_Profile,
      description: "Page de profil utilisateur où il est possible de suivre sa progression dans les cours et les tests de connaissances.",
    },

    {
      type: "image",
      imageUrl: Image_CourseVideo,
      description: "Page d'un cours de type vidéo. Plusieurs vidéos sont listées qui sont des liens vers des hébergeurs comme YouTube.",
    },
    {
      type: "image",
      imageUrl: Image_CourseText,
      description: "Page d'un cours de type texte.",
    },

    {
      type: "image",
      imageUrl: Image_TestIntro,
      description: "Page de départ à un test de connaissances.",
    },
    {
      type: "image",
      imageUrl: Image_TestQuestion1,
      description: "Page d'une question à choix unique d'un test de connaissances.",
    },
    {
      type: "image",
      imageUrl: Image_TestQuestion2,
      description: "Page d'une question de saisie d'un test de connaissances.",
    },
    {
      type: "image",
      imageUrl: Image_TestQuestion3,
      description: "Page d'une question à choix multiples d'un test de connaissances.",
    },
    {
      type: "image",
      imageUrl: Image_TestEnd,
      description: "Page de résultats à un test de connaissances. En fonction du résultat obtenu, un cours est recommandé.",
    },

    {
      type: "image",
      imageUrl: Image_EditCourseVideo,
      description: "Page d'édition d'un cours de type vidéo.",
    },
    {
      type: "image",
      imageUrl: Image_EditCourseText,
      description: "Page d'édition d'un cours de type texte.",
    },
    {
      type: "image",
      imageUrl: Image_EditTest,
      description: "Page d'édition d'un test de connaissances. Les questions sont importées à partir d'un fichier XML.",
    },

    {
      type: "image",
      imageUrl: Image_Users,
      description: "Page d'administration des utilisateurs du site web.",
    },
    {
      type: "image",
      imageUrl: Image_Settings,
      description: "Page des paramètres de profil utilisateur.",
    },
    {
      type: "image",
      imageUrl: Image_Login,
      description: "Page de connexion.",
    },
    {
      type: "image",
      imageUrl: Image_Register,
      description: "Page d'inscription.",
    },
  ],
};

export default project;
