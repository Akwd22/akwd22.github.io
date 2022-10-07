import classNames from "classnames";
import { FunctionComponent } from "react";
import { PropsWithIdAndClass } from "types";

import "./Tag.css";

export interface TagProps extends PropsWithIdAndClass {
  /** Texte du tag. */
  text: string;
}

/** Composant d'un tag contenant du texte. */
const Tag: FunctionComponent<TagProps> = (props) => {
  return (
    <div id={props.id} className={classNames("tag body-2", props.className)}>
      {props.text}
    </div>
  );
};

export default Tag;
