import { FunctionComponent } from "react";

interface StaticRedirectProps {
  to: string | URL;
}

/** Composant permettant de rediriger vers une ressource statique ou externe. */
const StaticRedirect: FunctionComponent<StaticRedirectProps> = ({ to }) => {
  document.open().close(); // Vider le document pour afficher page blanche.
  window.location.replace(to);

  return <></>;
};

export default StaticRedirect;
