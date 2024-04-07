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
  summary: "Une plateforme de trading permettant de connecter la plateforme d'analyse financière TradingView au courtier de cryptomonnaies Binance.",
  tags: ["React", "Electron", "TypeScript", "Node", "API", "WebSocket"],
  thumbnail: Image_PositionOpen1,
  description: `
  *This is a private project for personal use and is not distributed online in any way, and it is not affiliated with TradingView.*

  Cette application web est un **projet personnel**, axé sur le trading de cryptomonnaies. Initialement, notre intention était d'utiliser le site web de graphiques financiers [TradingView](https://fr.tradingview.com/), mais nous avons rencontré une **limitation** : il ne permettait pas de se connecter au courtier de cryptomonnaies [Binance](https://www.binance.com/).

  ### Principes techniques

  Pour surmonter cet obstacle, nous avons entrepris l'**intégration** du **courtier Binance sur TradingView**. Pour y parvenir, nous avons conçu une interface utilisateur de trading en React autour du graphique TradingView, que nous avons ensuite connectée à l'API de Binance.

  Mon rôle principal a été de m'occuper du développement du back-end, impliquant notamment :

  * Architecture pensée pour connecter aisément d'autres courtiers que Binance grâce au patron [adaptateur](https://fr.wikipedia.org/wiki/Adaptateur_(patron_de_conception))
  * Architecture événementielle conçue pour s'associer au front-end React
  * Utilisation étendue de l'[API de Binance](https://binance-docs.github.io/apidocs/futures/en/#general-info) pour récupérer les données de marché et de compte
  * Utilisation des websockets de Binance pour la mise à jour en temps réel des données
  * API factice (mock) de courtier pour faciliter le développement et le débogage

  ### Fonctionnalités

  Quant aux fonctionnalités, bien que l'environnement graphique soit fourni par TradingView, nous avons enrichi l'application avec les éléments suivants :

  * Application Windows
  * Connecter son compte Binance au graphique financier TradingView
  * Affichage du solde du compte, du levier utilisé et du ROI de la position ouverte
  * Panneau latéral droit pour placer des ordres d'achat et de vente
  * Système de notification pour le suivi de l'état des ordres
  * Thème transparent avec couleurs personnalisables

  *Survolez les images pour une description de celles-ci.*
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
