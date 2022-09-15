import { FunctionComponent } from "react";
import "./Tag.css";

export interface TagProps {
  text: string;
}

const Tag: FunctionComponent<TagProps> = (props) => {
  return <div className="tag body-2">{props.text}</div>;
};

export default Tag;
