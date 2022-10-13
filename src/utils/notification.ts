/** Type décrivant les données d'une notification à déclencher. */
export type TNotificationData = {
  /** Texte ou contenu de la notification. */
  text: string | React.ReactElement;
  /** Identifiant de la notification. */
  id?: number;
};

export type TNotificationListener = (data: TNotificationData) => void;

/** Classe de gestion des notifications. Permet de déclencher et d'écouter des notifications. */
export default class NotificationEmitter {
  private static listeners: TNotificationListener[] = [];
  private static lastId = 0;

  /**
   * Déclencher une notification.
   * @param data Données de la notification (ex. texte).
   */
  public static notify(data: TNotificationData): void {
    data.id = ++this.lastId;
    this.listeners.forEach((listener) => listener(data));
  }

  /**
   * Écouter les notifications déclenchées.
   * @param callback Fonction de rappel à la réception d'une notification.
   */
  public static listen(callback: TNotificationListener): void {
    this.listeners.push(callback);
  }

  /**
   * Ne plus écouter les notifications déclenchées.
   * @param callback Fonction de rappel utilisée lors de l'écoute.
   */
  public static unlisten(callback: TNotificationListener): void {
    this.listeners = this.listeners.filter((handler) => handler !== callback);
  }
}
