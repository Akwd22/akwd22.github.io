import { FunctionComponent } from "react";

import LogoImage from "assets/imgs/logo.svg";
import "./Logo.css";

/** Composant représentant mon logo principal. */
const Logo: FunctionComponent = () => {
  return (
    <div id="home-logo">
      <img src={LogoImage} alt="Mon Logo" />
    </div>
  );
};

export default Logo;
