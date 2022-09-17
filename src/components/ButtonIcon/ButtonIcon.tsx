import { FunctionComponent } from "react";
import "./ButtonIcon.css";

interface ButtonIconProps {
  icon: React.ReactElement;
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  tooltip?: string;
}

const ButtonIcon: FunctionComponent<ButtonIconProps> = (props) => {
  return (
    <a href={props.href} target={props.target} rel="noreferrer" onClick={props.onClick} title={props.tooltip} className="button-icon">
      {props.icon}
    </a>
  );
};

export default ButtonIcon;
