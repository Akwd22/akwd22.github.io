import { FunctionComponent } from "react";
import cn from "classnames";
import { PropsWithIdAndClass } from "utils/types";

import "./LoadingIcon.css";

interface LoadingIconProps extends PropsWithIdAndClass {}

const LoadingIcon: FunctionComponent<LoadingIconProps> = (props) => {
  return <span id={props.id} className={cn("loading-icon", props.className)}></span>;
};

export default LoadingIcon;
