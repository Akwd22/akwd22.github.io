import { MutableRefObject, useEffect, useMemo, useState } from "react";

/**
 * Hook retournant si un élément `ref` apparaît sur le viewport.
 * @param ref Référence de l'élément.
 * @param once Faut-il arrêter les prochaines détections lorsque la première apparition a eu lieu ?
 * @returns `true` si l'élément apparaît sur le viewport.
 */
const useInViewport = (ref: MutableRefObject<Element>, once: boolean = false): boolean => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver((entries) => {
        setIsIntersecting(entries[0].isIntersecting);
      }),
    []
  );

  // Arrêter l'observation s'il y a déjà eu une détection et que `once` est vrai.
  useEffect(() => {
    if (isIntersecting && once) observer.disconnect();
  }, [once, isIntersecting, observer]);

  // Observer lorsque l'élément devient apparaît ou disparaît du viewport.
  useEffect(() => {
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, observer]);

  return isIntersecting;
};

export default useInViewport;
