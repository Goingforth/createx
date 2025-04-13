import { FC, useState } from "react";
import SectionWithChildren from "../SectionWithChidren/SectionWtithChildren";
import { TypeCommentNews } from "../../data";
import { Comment } from "./Comment/Comment";
import { PostComment } from "./PostComment/PostComment";
import styles from "./Comments.module.scss";

interface TypeDataComments {
  comments?: TypeCommentNews[];
}

export const Comments: FC<TypeDataComments> = ({ comments }) => {
  const [replyName, setReplyName] = useState("");
  const [isReply, setIsReply] = useState(false);
  const amountComments = comments?.length;

  return (
    <div style={{ marginBottom: "180px" }}>
      <SectionWithChildren
        title={`${amountComments?.toString()} comments`}
        children={
          <div className={styles.container}>
            {comments?.map((comment) => (
              <Comment
                key={comment._id}
                {...{
                  ...comment,
                  setIsReply,
                  setReplyName,
                }}
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
              isReply={isReply}
              setIsReply={setIsReply}
              replyName={replyName}
              setReplyName={setReplyName}
            />
          }
        />
      </div>
    </div>
  );
};
