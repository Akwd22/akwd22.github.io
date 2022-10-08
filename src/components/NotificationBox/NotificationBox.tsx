import { NotificationData } from "notification";
import { FunctionComponent, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import ButtonIcon from "components/ButtonIcon/ButtonIcon";

import { ReactComponent as CrossIcon } from "assets/imgs/icons/cross.svg";
import "./NotificationBox.css";

interface NotificationBoxProps extends NotificationData {
  /** Gestionnaire appelé lors de la fermeture de la notification. */
  onClose?: () => void;
}

/** Composant d'une notification. */
const NotificationBox: FunctionComponent<NotificationBoxProps> = ({ text, onClose }) => {
  /** Notification en train d'être fermée ? */
  const [closing, setClosing] = useState(false);
  /** Notification est-elle survolée par la souris ? */
  const [hovered, setHovered] = useState(false);

  // Fermer la notification si elle vient de l'être.
  useEffect(() => {
    if (closing) onClose();
  }, [closing, onClose]);

  // Fermer automatiquement la notification au bout de quelques secondes,
  // si elle n'est pas survolée.
  useEffect(() => {
    const closeTimeout = !hovered ? setTimeout(() => setClosing(true), 3000) : null;
    return () => clearTimeout(closeTimeout);
  }, [hovered]);

  return createPortal(
    <div className="notification" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <span className="notification-text">{text}</span>
      <ButtonIcon className="notification-close" icon={<CrossIcon />} tooltip="Fermer la notification" onClick={() => setClosing(true)} />
    </div>,
    document.getElementById("notification")
  );
};

export default NotificationBox;
