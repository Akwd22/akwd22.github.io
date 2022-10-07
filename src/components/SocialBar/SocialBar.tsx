import classNames from "classnames";
import { FunctionComponent } from "react";
import { PropsWithIdAndClass } from "types";

import ButtonIcon from "components/ButtonIcon/ButtonIcon";

import { ReactComponent as EmailIcon } from "assets/imgs/icons/email.svg";
import { ReactComponent as GitHubIcon } from "assets/imgs/icons/github.svg";
import { ReactComponent as LinkedInIcon } from "assets/imgs/icons/linkedin.svg";
import "./SocialBar.css";

/** Composant de la barre contenant les liens vers mes réseaux sociaux. */
const SocialBar: FunctionComponent<PropsWithIdAndClass> = (props) => {
  return (
    <nav id={props.id} className={classNames("navbar-socials", props.className)}>
      <ButtonIcon icon={<LinkedInIcon />} href="https://www.linkedin.com/in/eddy-druet-b5b065207" target="_blank" tooltip="Aller sur mon LinkedIn" />
      <ButtonIcon icon={<GitHubIcon />} href="https://github.com/Akwd22" target="_blank" tooltip="Aller sur mon GitHub" />
      <ButtonIcon icon={<EmailIcon />} href="mailto:eddydruet93@gmail.com" tooltip="Voir mon adresse e-mail" />
    </nav>
  );
};

export default SocialBar;
