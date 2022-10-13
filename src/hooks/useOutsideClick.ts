import { MutableRefObject, useEffect } from "react";

/**
 * Hook détectant un clique en dehors d'un élément `ref`.
 * @param ref Référence de l'élément en dehors duquel le clique doit être fait.
 * @param callback Fonction appelée lorsqu'un clique est fait en dehors de l'élément `ref`.
 */
function useOutsideClick(ref: MutableRefObject<Node>, callback: (event: Event) => void): void {
  useEffect(() => {
    const listener = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback(e);
      }
    };

    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, callback]);
}

export default useOutsideClick;
