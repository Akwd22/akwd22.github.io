import { FunctionComponent, useEffect, useState } from "react";
import notification, { TNotificationData } from "utils/notification";

import NotificationBox from "./NotificationBox/NotificationBox";

/** Composant gérant et affichant les notifications. */
const NotificationManager: FunctionComponent = () => {
  /** Liste des notifications affichées. */
  const [notifications, setNotifications] = useState<TNotificationData[]>([]);

  // Écouter les notifications déclenchées pour les afficher.
  useEffect(() => {
    const handler = (data: TNotificationData) => setNotifications([data, ...notifications]);
    notification.listen(handler);

    return () => notification.unlisten(handler);
  }, [notifications]);

  /** Fermer une certaine notification. */
  const closeNotification = (id: number) => {
    setNotifications(notifications.filter((data) => data.id !== id));
  };

  return (
    <>
      {notifications.map((data) => (
        <NotificationBox {...data} key={data.id} onClose={() => closeNotification(data.id)} />
      ))}
    </>
  );
};

export default NotificationManager;
