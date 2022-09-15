import { TagProps } from "components/Tag/Tag";
import { FunctionComponent, ReactElement } from "react";
import "./TagList.css";

interface TagListProps {
  children: ReactElement<TagProps> | ReactElement<TagProps>[];
}

const TagList: FunctionComponent<TagListProps> = ({ children }) => {
  return <div className="tag-list">{children}</div>;
};

export default TagList;
