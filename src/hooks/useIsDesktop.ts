import useMediaQuery from "./useMediaQuery";

const useIsDesktop = () => {
  return !useMediaQuery("only screen and (max-width: 768px)");
};

export default useIsDesktop;
