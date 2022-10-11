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

  autoFocus?: boolean;

  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

/** Composant d'un bouton avec icône sans texte. */
const ButtonIcon: FunctionComponent<ButtonIconProps> = (props) => {
  /** Gestionnaire de clique sur le bouton. */
  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (props.href) window.open(props.href, props.target || "_self", "noreferrer");
    if (props.onClick) props.onClick(event);
  };

  return (
    <button id={props.id} className={cn("button-icon", "button", props.className)} title={props.tooltip} onClick={clickHandler} autoFocus={props.autoFocus}>
      {props.icon}
    </button>
  );
};

export default ButtonIcon;
