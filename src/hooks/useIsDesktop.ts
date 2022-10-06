import useMediaQuery from "./useMediaQuery";

/** Hook retournant si l'écran est de grande taille (largeur sup. à 768px). */
const useIsDesktop = (): boolean => {
  return !useMediaQuery("screen and (max-width: 768px)");
};

export default useIsDesktop;
