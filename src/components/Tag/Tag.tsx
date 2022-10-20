import cn from "classnames";
import { FunctionComponent } from "react";
import { PropsWithIdAndClass } from "utils/types";

import "./Tag.css";

export interface TagProps extends PropsWithIdAndClass {
  /** Texte du tag. */
  text: string;
}

/** Composant d'un tag contenant du texte. */
const Tag: FunctionComponent<TagProps> = (props) => {
  return (
    <div id={props.id} className={cn("tag", props.className)}>
      {props.text}
    </div>
  );
};

export default Tag;
