import { FC, useState } from "react";
import SectionWithChildren from "../SectionWithChidren/SectionWtithChildren";
import { TypeCommentNews } from "../../data";
import { Comment } from "./Comment/Comment";
import { PostComment } from "./PostComment/PostComment";
import styles from "./Comments.module.scss";

interface TypeDataComments {
  comments?: TypeCommentNews[];
  setNewComment: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Comments: FC<TypeDataComments> = (props) => {
  const { comments, setNewComment } = props;
  const [replyId, setReplyId] = useState("");
  const [isReply, setIsReply] = useState(false);
  const amountComments = comments?.reduce(
    (acc, comment) => acc + 1 + comment.replyes.length,
    0
  );

  return (
    <div style={{ marginBottom: "180px" }}>
      <SectionWithChildren
        title={`${amountComments?.toString()} comments`}
        children={
          <div className={styles.container}>
            {comments?.map((comment) => (
              <Comment
                key={comment._id}
                {...{ ...comment, setReplyId, setIsReply }}
              />
            ))}
          </div>
        }
      />
      <div id='newpost'>
        <SectionWithChildren
          title='Leave your comment'
          mtChild='48px'
          children={
            <PostComment
              setNewComment={setNewComment}
              replyId={replyId}
              setReplyId={setReplyId}
              isReply={isReply}
              setIsReply={setIsReply}
            />
          }
        />
      </div>
    </div>
  );
};
