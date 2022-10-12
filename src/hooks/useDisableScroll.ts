import { useEffect } from "react";

/** Hook permettant de désactiver le défilement sur le body tant que le hook est actif. */
const useDisableScroll = (): void => {
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, []);
};

export default useDisableScroll;
