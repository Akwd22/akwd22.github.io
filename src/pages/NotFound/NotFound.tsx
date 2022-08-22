import usePageTitle from "../../hooks/usePageTitle";

function NotFound() {
  usePageTitle("Eddy Druet – Page non trouvée");
  return <p>404 Not Found</p>;
}

export default NotFound;
