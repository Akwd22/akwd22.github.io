import cn from "classnames";
import { FunctionComponent, HTMLAttributeAnchorTarget, MouseEvent, MouseEventHandler, ReactElement } from "react";
import { PropsWithIdAndClass } from "utils/types";

import "./ButtonIcon.css";

interface ButtonIconProps extends PropsWithIdAndClass {
  /** Élément servant d'icône (souvent un SVG). */
  icon: ReactElement;
  /** Infobulle au survol du bouton. */
  tooltip?: string;

  /** Facultatif. URI où emmener au clique du bouton. */
  href?: string;
  /** Facultatif. Indiquer comment ouvrir l'URI si `href` spécifié. */
  target?: HTMLAttributeAnchorTarget;

  /** Gestionnaire appelé lorsque le bouton est cliqué. */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

/** Composant d'un bouton avec icône sans texte. */
const ButtonIcon: FunctionComponent<ButtonIconProps> = (props) => {
  /** Gestionnaire de clique sur le bouton. */
  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    if (props.href) window.open(props.href, props.target || "_self", "noreferrer");
    if (props.onClick) props.onClick(event);
  }

  return (
    <button id={props.id} className={cn("button", "button-icon", props.className)} title={props.tooltip} onClick={handleClick}>
      {props.icon}
    </button>
  );
};

export default ButtonIcon;
