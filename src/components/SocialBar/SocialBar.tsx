import cn from "classnames";
import { FunctionComponent } from "react";
import notification from "utils/notification";
import { PropsWithIdAndClass } from "utils/types";

import ButtonIcon from "components/ButtonIcon/ButtonIcon";

import { ReactComponent as EmailIcon } from "assets/imgs/icons/email.svg";
import { ReactComponent as GitHubIcon } from "assets/imgs/icons/github.svg";
import { ReactComponent as LinkedInIcon } from "assets/imgs/icons/linkedin.svg";
import "./SocialBar.css";

/** Composant de la barre contenant les liens vers mes réseaux sociaux. */
const SocialBar: FunctionComponent<PropsWithIdAndClass> = (props) => {
  /** Copier l'e-mail dans le presse-papier. */
  async function copyEmail() {
    const email = "eddydruet93@gmail.com";

    let notificationText: string;

    try {
      await navigator.clipboard.writeText(email);
      notificationText = "Copiée dans le presse-papier :";
    } catch {
      notificationText = "Mon e-mail :";
    }

    notification.notify({
      text: (
        <>
          {notificationText} <a href="mailto:eddydruet93@gmail.com">eddydruet93@gmail.com</a>
        </>
      ),
    });
  }

  return (
    <nav id={props.id} className={cn("navbar-socials", props.className)}>
      <ButtonIcon icon={<LinkedInIcon />} href="https://www.linkedin.com/in/eddy-druet/" target="_blank" tooltip="Aller sur mon LinkedIn" />
      <ButtonIcon icon={<GitHubIcon />} href="https://github.com/Akwd22" target="_blank" tooltip="Aller sur mon GitHub" />
      <ButtonIcon icon={<EmailIcon />} tooltip="Voir mon adresse e-mail" onClick={copyEmail} />
    </nav>
  );
};

export default SocialBar;
