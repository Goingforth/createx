import { FC } from "react";
import SectionWithChildren from "../SectionWithChidren/SectionWtithChildren";
import { TypeCommentNews } from "../../data";
import { Comment } from "./Comment/Comment";
import { PostComment } from "./PostComment/PostComment";
import styles from "./Comments.module.scss";

interface TypeDataComments {
  comments: TypeCommentNews[];
}

export const Comments: FC<TypeDataComments> = (props) => {
  const { comments } = props;
  return (
    <div style={{ marginBottom: "180px" }}>
      <SectionWithChildren
        title={`${comments.length.toString()} comments`}
        children={
          <div className={styles.container}>
            {comments.map((comment) => (
              <Comment key={comment._id} {...comment} />
            ))}
          </div>
        }
      />
      <SectionWithChildren
        title='Leave your comment'
        mtChild='48px'
        children={<PostComment />}
      />
    </div>
  );
};
