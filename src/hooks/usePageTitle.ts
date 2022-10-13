import { useEffect } from "react";

/**
 * Modifier le titre de la page (onglet).
 * @param title Nouveau titre.
 */
function usePageTitle(title: string): void {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export default usePageTitle;
