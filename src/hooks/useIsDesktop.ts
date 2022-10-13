import useIsMobile from "./useIsMobile";

/** Hook retournant si l'écran est de grande taille (largeur sup. à 768px). */
function useIsDesktop(): boolean {
  return !useIsMobile();
}

export default useIsDesktop;
