import { FunctionComponent, useRef } from "react";
import { createPortal } from "react-dom";
import { TNotificationData } from "utils/notification";

import ButtonIcon from "components/ButtonIcon/ButtonIcon";

import useAnimationState from "hooks/useAnimationState";

import { ReactComponent as CrossIcon } from "assets/imgs/icons/cross.svg";
import "./ToastBox.css";

interface ToastBoxProps extends TNotificationData {
  /** Gestionnaire appelé lors de la fermeture de la notification. */
  onClose?: () => void;
}

/** Composant d'une boîte de notification. */
const ToastBox: FunctionComponent<ToastBoxProps> = ({ text, onClose }) => {
  const toastRef = useRef<HTMLDivElement>();

  const setState = useAnimationState(
    toastRef,
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
    <div className="toast" ref={toastRef} onMouseEnter={() => setState("hovered")} onMouseLeave={() => setState("idle")}>
      <span className="toast-text">{text}</span>
      <ButtonIcon className="toast-close" icon={<CrossIcon />} tooltip="Fermer la notification" onClick={onClose} />
    </div>,
    document.getElementById("toast")
  );
};

export default ToastBox;
