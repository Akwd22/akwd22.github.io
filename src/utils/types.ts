/** Type décrivant les props `id` et `className` pour un composant React. */
export type PropsWithIdAndClass = {
  id?: string;
  className?: string;
};

/** Type permettant de demander à TypeScript de ne pas inférer le type de `T`. */
export type NoInfer<T> = [T][T extends any ? 0 : 1]; // https://stackoverflow.com/a/64503500
