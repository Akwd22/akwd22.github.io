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

type TState = "opening" | "closing" | "idle" | "hovered";

/** Composant d'une notification. */
const NotificationBox: FunctionComponent<NotificationBoxProps> = ({ text, onClose }) => {
  /** État actuel de la boîte de notification. */
  const [state, setState] = useState<TState>("opening");

  // Fermer automatiquement la notification au bout de quelques secondes,
  // si elle n'est pas survolée.
  useEffect(() => {
    const closeTimeout = state === "idle" ? setTimeout(() => setState("closing"), 3000) : null;
    return () => clearTimeout(closeTimeout);
  }, [state]);

  return createPortal(
    <div
      className="notification"
      data-state={state}
      onMouseEnter={() => setState("hovered")}
      onMouseLeave={() => setState("idle")}
      onAnimationEnd={() => {
        if (state === "opening") setState("idle");
        if (state === "closing") onClose();
      }}
    >
      <span className="notification-text">{text}</span>
      <ButtonIcon className="notification-close" icon={<CrossIcon />} tooltip="Fermer la notification" onClick={onClose} />
    </div>,
    document.getElementById("notification")
  );
};

export default NotificationBox;
