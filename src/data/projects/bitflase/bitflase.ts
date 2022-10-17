import { TProject } from "data/projects";

import Image_Chart from "./images/chart.png";
import Image_OrderPanel from "./images/order-panel.png";
import Image_Notification from "./images/notification.png";
import Image_PositionOpen1 from "./images/position-open-1.png";
import Image_PositionOpen2 from "./images/position-open-2.png";
import Image_ProtectionPanel from "./images/tp-sl-panel.png";

const project: TProject = {
  slug: "bitflase",
  title: "Bitflase",
  summary: "Une plateforme de trading permettant de connecter la plateforme existante TradingView au courtier de cryptomonnaies Binance de façon non-officielle.",
  tags: ["React", "Electron", "TypeScript", "Node", "API", "WebSocket"],
  thumbnail: Image_PositionOpen1,
  description: `
  *Pour respecter la propriété intellectuelle de TradingView, le code source et l'exécutable du projet restent privés et à usage personnel.*

  Cette application web est un projet **privé** et **personnel** avec un ami pour trader des cryptomonnaies. Nous voulions utiliser le site web de graphiques financiers [TradingView](https://fr.tradingview.com/), mais il **ne permettait pas** de se connecter au courtier de cryptomonnaies [Binance](https://www.binance.com/).

  ### Principes techniques

  C'est pourquoi, nous avons commencé ce projet pour intégrer de façon **non-officielle** le courtier Binance sur TradingView. Pour cela, nous avons dû dans un 1er temps, modifier le code source de TradingView en injectant notre propre code afin de :

  * Ajouter un thème transparent
  * Détourner les requêtes réseaux pour y insérer nos propres requêtes

  Dans un 2ème temps, nous avons créé notre interface utilisateur de trading en React autour du graphique TradingView que nous avons connecté à l'API de Binance. **Je me suis occupé du back-end** (détourner TradingView et interactions avec l'API de Binance), notamment :

  * Architecture pensée pour connecter facilement d'autres courtiers que Binance avec des [patterns adaptateurs](https://fr.wikipedia.org/wiki/Adaptateur_(patron_de_conception))
  * Architecture événementielle faite pour être branché avec le front-end React
  * Utilisation d'une grande partie de l'[API de Binance](https://binance-docs.github.io/apidocs/futures/en/#general-info) (données du marché, données du compte)
  * Utilisation des websockets de l'API de Binance pour une actualisation en temps réel des données
  * API de courtier factice (mock) pour faciliter le développement et le débogage

  ### Fonctionnalités

  L'environnement graphique n'est pas de nous, mais fourni par TradingView que nous avons détourné. Voici nos fonctionnalités ajoutées :

  * Application Windows
  * Connecter son compte Binance sur le graphique financier TradingView
  * Affichage du solde du compte, levier utilisé, et ROI de la position ouverte
  * Panneau latéral droit pour placer des ordres d'achat et de vente
  * Système de notification pour le suivi de l'état des ordres
  * Thème transparent avec couleurs personnalisables

  *Survolez les images pour une description de celle-ci.*
  `,
  medias: [
    {
      type: "image",
      imageUrl: Image_Chart,
      description: "Graphique financier de TradingView que nous avons modifié pour un thème transparent.",
    },
    {
      type: "image",
      imageUrl: Image_OrderPanel,
      description: "Panneau pour placer un ordre d'achat ou de vente avec les données du marché récupérées en temps réel depuis l'API de Binance.",
    },
    {
      type: "image",
      imageUrl: Image_Notification,
      description: "Un ordre d'achat vient d'être placé avec les informations de la position ouverte en bas à droite du panneau droit. Nous avons fait un système de notification.",
    },
    {
      type: "image",
      imageUrl: Image_PositionOpen2,
      description: "Une position ouverte avec un ordre de prise de profits (vert) et un ordre de protection (orange).",
    },
    {
      type: "image",
      imageUrl: Image_ProtectionPanel,
      description: "Panneau pour ajuster le prix de déclenchement de l'ordre de prise de profits et de protection de la position ouverte.",
    },
  ],
};

export default project;
