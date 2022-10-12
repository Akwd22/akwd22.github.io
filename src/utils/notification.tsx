/** Interface contenant les données d'une notification à déclencher. */
export interface NotificationData {
  /** Texte ou contenu de la notification. */
  text: string | React.ReactElement;
  /** Identifiant de la notification. */
  id?: number;
}

export type NotificationListener = (data: NotificationData) => void;

/** Classe de gestion des notifications. Permet de déclencher et d'écouter des notifications. */
export default class NotificationEmitter {
  private static listeners: NotificationListener[] = [];
  private static lastId = 0;

  /**
   * Déclencher une notification.
   * @param data Données de la notification (ex. texte).
   */
  public static notify(data: NotificationData): void {
    data.id = ++this.lastId;
    this.listeners.forEach((listener) => listener(data));
  }

  /**
   * Écouter les notifications déclenchées.
   * @param callback Fonction de rappel à la réception d'une notification.
   */
  public static listen(callback: NotificationListener): void {
    this.listeners.push(callback);
  }

  /**
   * Ne plus écouter les notifications déclenchées.
   * @param callback Fonction de rappel utilisée lors de l'écoute.
   */
  public static unlisten(callback: NotificationListener): void {
    this.listeners = this.listeners.filter((handler) => handler !== callback);
  }
}
