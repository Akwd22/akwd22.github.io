import { FunctionComponent, useEffect, useState } from "react";
import notification, { TNotificationData } from "utils/notification";

import ToastBox from "./ToastBox";

/** Composant gérant et affichant les notifications. */
const ToastManager: FunctionComponent = () => {
  /** Liste des notifications affichées. */
  const [notifications, setNotifications] = useState<TNotificationData[]>([]);

  // Écouter les notifications déclenchées pour les afficher.
  useEffect(() => {
    const handler = (data: TNotificationData) => setNotifications([data, ...notifications]);
    notification.listen(handler);

    return () => notification.unlisten(handler);
  }, [notifications]);

  /** Fermer une certaine notification. */
  function closeToast(id: number) {
    setNotifications(notifications.filter((data) => data.id !== id));
  }

  return (
    <>
      {notifications.map((data) => (
        <ToastBox {...data} key={data.id} onClose={() => closeToast(data.id)} />
      ))}
    </>
  );
};

export default ToastManager;
