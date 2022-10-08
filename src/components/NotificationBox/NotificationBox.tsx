import { NotificationData } from "notification";
import { FunctionComponent, useEffect } from "react";
import { createPortal } from "react-dom";

import ButtonIcon from "components/ButtonIcon/ButtonIcon";

import { ReactComponent as CrossIcon } from "assets/imgs/icons/cross.svg";
import "./NotificationBox.css";

interface NotificationBoxProps extends NotificationData {
  /** Gestionnaire appelé lors de la fermeture de la notification. */
  onClose?: () => void;
}

/** Composant d'une notification. */
const NotificationBox: FunctionComponent<NotificationBoxProps> = (props) => {
  return createPortal(
    <div className="notification">
      <span className="notification-text">{props.text}</span>
      <ButtonIcon className="notification-close" icon={<CrossIcon />} tooltip="Fermer la notification" onClick={props.onClose} />
    </div>,
    document.getElementById("notification")
  );
};

export default NotificationBox;
