import { FunctionComponent } from "react";
import LogoImage from "assets/imgs/logo.svg";
import "./Logo.css";

interface LogoProps {}

const Logo: FunctionComponent<LogoProps> = (props) => {
  return (
    <div id="logo">
      <img src={LogoImage} alt="Mon Logo" />
    </div>
  );
};

export default Logo;
