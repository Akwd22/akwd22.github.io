import classNames from "classnames";
import { FunctionComponent, ReactElement } from "react";
import { PropsWithIdAndClass } from "types";

import { TagProps } from "components/Tag/Tag";

import "./TagList.css";

interface TagListProps extends PropsWithIdAndClass {
  /** Un ou plusieurs éléments de composant `Tag`. */
  children: ReactElement<TagProps> | ReactElement<TagProps>[];
}

/** Composant d'une liste de tags. */
const TagList: FunctionComponent<TagListProps> = (props) => {
  return (
    <div id={props.id} className={classNames("tag-list", props.className)}>
      {props.children}
    </div>
  );
};

export default TagList;
