import { FunctionComponent, useRef } from "react";
import { createPortal } from "react-dom";
import { TNotificationData } from "utils/notification";

import ButtonIcon from "components/ButtonIcon/ButtonIcon";

import useAnimationState from "hooks/useAnimationState";

import { ReactComponent as CrossIcon } from "assets/imgs/icons/cross.svg";
import "./NotificationBox.css";

interface NotificationBoxProps extends TNotificationData {
  /** Gestionnaire appelé lors de la fermeture de la notification. */
  onClose?: () => void;
}

/** Composant d'une boîte de notification. */
const NotificationBox: FunctionComponent<NotificationBoxProps> = ({ text, onClose }) => {
  const notificationRef = useRef<HTMLDivElement>();

  const setState = useAnimationState(
    notificationRef,
    {
      opening: {
        duration: 250,
        toState: "idle",
      },

      closing: {
        duration: 1000,
        onEnd: onClose,
      },

      idle: {
        duration: 3000, // Fermer auto. la notif. au bout de quelques secondes.
        toState: "closing",
      },

      hovered: {},
    },
    "opening"
  );

  return createPortal(
    <div className="notification" ref={notificationRef} onMouseEnter={() => setState("hovered")} onMouseLeave={() => setState("idle")}>
      <span className="notification-text">{text}</span>
      <ButtonIcon className="notification-close" icon={<CrossIcon />} tooltip="Fermer la notification" onClick={onClose} />
    </div>,
    document.getElementById("notification")
  );
};

export default NotificationBox;
