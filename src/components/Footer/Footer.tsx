import SocialBar from "components/SocialBar/SocialBar";
import useIsDesktop from "hooks/useIsDesktop";
import { FunctionComponent } from "react";
import "./Footer.css";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = (props) => {
  const isDesktop = useIsDesktop();

  return (
    <footer>
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
