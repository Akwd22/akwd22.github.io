import { MutableRefObject, useEffect } from "react";

const useOutsideClick = (ref: MutableRefObject<Node>, callback: (event: Event) => void) => {
  useEffect(() => {
    const listener = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback(e);
      }
    };

    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("click", listener);
    };
  }, [ref, callback]);
};

export default useOutsideClick;
