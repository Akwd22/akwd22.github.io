import { MutableRefObject, useEffect, useState } from "react";
import { NoInfer } from "utils/types";

/** Type décrivant les états d'animation d'un composant et leur transition. */
export type TStateTransitions<StateNames extends string> = {
  [StateName in StateNames]: {
    /** Durée de la transition en millisecondes. Si non spécifiée, alors état infini. */
    duration?: number;
    /** Nom du prochain état d'animation défini à la fin de la durée `duration`. */
    toState?: NoInfer<StateNames>;
    /** Gestionnaire appelé lorsque cet état d'animation démarre. */
    onBegin?: (stateName: StateName) => void;
    /** Gestionnaire appelé lorsque cet état d'animation est terminé (uniquement s'il y a une durée `duration`). */
    onEnd?: (stateName: StateName) => void;
  };
};

/**
 * Fonction utilitaire pour créer un objet `TStateTransitions` sans spécifier manuellement le type générique `StateNames`,
 * autrement dit l'inférer.
 */
export const asStateTransitions = <StateNames extends string>(obj: TStateTransitions<StateNames>) => obj;

/**
 * Hook permettant de gérer facilement des états d'animation d'un élément d'un composant et leur transition.
 *
 * Permet de définir plusieurs états d'animation, leur durée avant transition à l'état suivant s'il y en a une,
 * leur état suivant, ainsi que des gestionnaires appelés au début et à la fin de chaque état.
 *
 * L'état d'animation actuel est affecté sur l'attribut `data-state` de l'élément `ref`,
 * pour le sélectionner en CSS par exemple.
 *
 * @example
 * Exemple d'utilisation :
 * ```
 * const ref = useRef();
 *
 * const setState = useAnimationState(
 *   ref,
 *   {
 *     opening: {
 *       duration: 250,
 *       toState: "idle",
 *       onBegin: () => console.log("opening begin");
 *     },
 *     closing: {
 *       duration: 250,
 *       onEnd: () => props.close(),
 *     },
 *     idle: {},
 *   },
 *   "opening"
 * );
 *
 * // ...
 * setState("closing");
 * ```
 *
 * @param ref Référence de l'élément.
 * @param transitions Objet décrivant les états d'animation et les transitions.
 * @param startState Nom de l'état d'animation de départ.
 * @returns Fonction pour modifier l'état d'animation actuel.
 */
function useAnimationState<StateNames extends string>(ref: MutableRefObject<HTMLElement>, transitions: TStateTransitions<StateNames>, startState: NoInfer<StateNames>) {
  /** État d'animation actuel. */
  const [state, setState] = useState<StateNames>(startState);

  // Affecter le nouvel état à l'attribut `data-state` de l'élément.
  useEffect(() => {
    if (ref.current) ref.current.dataset.state = state;
  }, [ref, state]);

  // Initialiser le nouvel état qui vient d'être affecté.
  useEffect(() => {
    const transition = transitions[state];

    transition.onBegin?.(state);

    // Si l'état à une durée, alors déclencher le timer...
    let timeout: number;

    if (transition.duration) {
      const onStateEnd = () => {
        transition.onEnd?.(state);
        if (transition.toState) setState(transition.toState);
      };

      timeout = window.setTimeout(onStateEnd, transition.duration);
    }

    return () => clearTimeout(timeout);
  }, [ref, transitions, state]);

  return setState;
}

export default useAnimationState;
