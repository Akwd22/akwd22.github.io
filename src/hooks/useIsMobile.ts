import useMediaQuery from "./useMediaQuery";

/** Hook retournant si l'écran est de petite taille (largeur inf. à 768px). */
const useIsMobile = (): boolean => {
  return useMediaQuery("screen and (max-width: 768px)");
};

export default useIsMobile;
