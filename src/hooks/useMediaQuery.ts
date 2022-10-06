import { useState, useEffect } from "react";

/**
 * Hook retournant si une requête média est vérifiée ou non.
 * La requête média est revérifiée à chaque changement de dimension de la fenêtre.
 * @param query Requête média à vérifier. Par exemple : `(max-width: 768px)`.
 * @returns `true` si la requête média `query` est vérifiée.
 */
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);

    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
