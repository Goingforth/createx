import { FC } from "react";
import SectionWithChildren from "../SectionWithChidren/SectionWtithChildren";
import styles from "./Comments.module.scss";

interface TypeDataComments {
  id: string;
  comments: number;
}

export const Comments: FC<TypeDataComments> = (props) => {
  const { id, comments } = props;
  return (
    <>
      <SectionWithChildren title={`${comments.toString()} comments`} />
    </>
  );
};
