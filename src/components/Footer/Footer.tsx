import { FunctionComponent } from "react";

import SocialBar from "components/SocialBar/SocialBar";

import "./Footer.css";

/** Composant du pied de page du site. */
const Footer: FunctionComponent = () => {
  return (
    <footer id="footer-page">
      <SocialBar />
      <p>
        Développé en React par <a href="/">Eddy Druet</a>
      </p>
    </footer>
  );
};

export default Footer;
