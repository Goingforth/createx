import { FC } from "react";
import SectionWithChildren from "../SectionWithChidren/SectionWtithChildren";
import { TypeCommentNews } from "../../data";
import styles from "./Comments.module.scss";

interface TypeDataComments {
  _id: string;
  comments: TypeCommentNews[];
}

export const Comments: FC<TypeDataComments> = (props) => {
  const { _id, comments } = props;
  return (
    <>
      <SectionWithChildren title={`${comments.length.toString()} comments`} />
    </>
  );
};
