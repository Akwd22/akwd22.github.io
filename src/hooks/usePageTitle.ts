import { useEffect } from "react";

/**
 * Modifier le titre de la page (onglet).
 * @param title Nouveau titre.
 */
const usePageTitle = (title: string): void => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default usePageTitle;
