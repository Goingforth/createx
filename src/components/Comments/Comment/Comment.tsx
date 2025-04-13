import { FC } from "react";
import { TypeCommentNews } from "../../../data";
import { SvgSprite } from "../../../uikit";

import moment from "moment";
import styles from "./Comment.module.scss";
interface TypeComment extends TypeCommentNews {
  setReplyName: React.Dispatch<React.SetStateAction<string>>;
  setIsReply: React.Dispatch<React.SetStateAction<boolean>>;
}

interface TypeCommentBase {
  _id: string;
  name: string;
  replyName?: string;
  date: string;
  comment: string;
  onClickReply: (_id: string) => void;
}

const CommentBase: FC<TypeCommentBase> = (props) => {
  const { _id, name, date, comment, onClickReply, replyName } = props;
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <div className={styles.name}>{name}</div>
        <div className={styles.date}>{moment(date).format("LL")}</div>
      </div>
      <div className={styles.comment}>
        <div className={styles.content}>
          {replyName && <span className={styles.replyName}>{replyName}</span>}
          {comment}
        </div>
        <div className={styles.reply} onClick={() => onClickReply(_id)}>
          <div>
            <SvgSprite id='share-arrow' />
          </div>
          <div className={styles.title}>Reply</div>
        </div>
      </div>
    </div>
  );
};

export const Comment: FC<TypeComment> = (props) => {
  const { _id, name, date, comment, setIsReply, setReplyName, replyName } =
    props;

  const onClickReply = (_id: string) => {
    setReplyName(name);
    setIsReply(true);
    window.location.href = "#newpost";
  };

  return (
    <>
      <CommentBase
        _id={_id}
        name={name}
        replyName={replyName}
        date={date}
        comment={comment}
        onClickReply={onClickReply}
      />
    </>
  );
};
