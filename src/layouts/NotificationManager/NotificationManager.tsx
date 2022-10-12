import notification, { NotificationData } from "utils/notification";
import { FunctionComponent, useEffect, useState } from "react";

import NotificationBox from "./NotificationBox/NotificationBox";

/** Composant gérant et affichant les notifications. */
const NotificationManager: FunctionComponent = () => {
  const [notifications, setNotifications] = useState<NotificationData[]>([]);

  // Écouter les notifications déclenchées pour les afficher.
  useEffect(() => {
    const handler = (data: NotificationData) => setNotifications([data, ...notifications]);
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
