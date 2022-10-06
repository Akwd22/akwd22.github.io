import ButtonIcon from "components/ButtonIcon/ButtonIcon";
import { FunctionComponent } from "react";
import { ReactComponent as LinkedInIcon } from "assets/imgs/icons/linkedin.svg";
import { ReactComponent as GitHubIcon } from "assets/imgs/icons/github.svg";
import { ReactComponent as EmailIcon } from "assets/imgs/icons/email.svg";
import "./SocialBar.css";

interface SocialBarProps {}

const SocialBar: FunctionComponent<SocialBarProps> = (props) => {
  return (
    <nav className="navbar-socials">
      <ButtonIcon icon={<LinkedInIcon />} href="https://www.linkedin.com/in/eddy-druet-b5b065207" target="_blank" />
      <ButtonIcon icon={<GitHubIcon />} href="https://github.com/Akwd22" target="_blank" />
      <ButtonIcon icon={<EmailIcon />} href="mailto:eddydruet93@gmail.com" />
    </nav>
  );
};

export default SocialBar;
