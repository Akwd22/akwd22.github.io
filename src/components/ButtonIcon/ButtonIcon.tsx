import cn from "classnames";
import { FunctionComponent } from "react";
import { PropsWithIdAndClass } from "types";

import "./ButtonIcon.css";

interface ButtonIconProps extends PropsWithIdAndClass {
  /** Élément servant d'icône (souvent un SVG). */
  icon: React.ReactElement;
  /** Facultatif. URI où emmener au clique du bouton. */
  href?: string;
  /** Facultatif. Indiquer comment ouvrir l'URI si `href` spécifié. */
  target?: React.HTMLAttributeAnchorTarget;
  /** Infobulle au passage de la souris sur le bouton. */
  tooltip?: string;

  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

/** Composant d'un bouton avec icône sans texte. */
const ButtonIcon: FunctionComponent<ButtonIconProps> = (props) => {
  return (
    <a href={props.href} target={props.target} rel="noreferrer" onClick={props.onClick} title={props.tooltip} id={props.id} className={cn("button-icon", "button", props.className)}>
      {props.icon}
    </a>
  );
};

export default ButtonIcon;
