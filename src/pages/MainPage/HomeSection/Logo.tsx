import { FunctionComponent } from "react";
import notification from "utils/notification";

import LogoImage from "assets/imgs/logo.svg";
import "./Logo.css";

/** Composant représentant mon logo principal. */
const Logo: FunctionComponent = () => {
  /** Afficher la notification de remerciement. */
  function notifyThanks() {
    notification.notify({
      text: (
        <>
          Merci à Clément G. pour le logo !
        </>
      ),
    });
  }

  return (
    <div id="home-logo">
      <img src={LogoImage} alt="Mon Logo" onClick={notifyThanks} />
    </div>
  );
};

export default Logo;
