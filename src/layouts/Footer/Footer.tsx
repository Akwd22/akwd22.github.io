import { FunctionComponent } from "react";

import SocialBar from "components/SocialBar/SocialBar";

import useIsDesktop from "hooks/useIsDesktop";

import "./Footer.css";

/** Composant du pied de page du site. */
const Footer: FunctionComponent = () => {
  const isDesktop = useIsDesktop();

  return (
    <footer id="footer-page">
      <SocialBar />
      <p>
        Développé par <a href="/">Eddy Druet</a>
        {isDesktop ? " • " : <br />}
        Logo et aide pour le design par <a href="https://clementgili.fr/">Clément Gili</a>
      </p>
    </footer>
  );
};

export default Footer;
