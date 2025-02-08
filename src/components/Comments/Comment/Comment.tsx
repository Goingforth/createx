import { FC } from "react";
import { TypeCommentNews } from "../../../data";
import { SvgSprite } from "../../../uikit";

import moment from "moment";
import styles from "./Comment.module.scss";

export const Comment: FC<TypeCommentNews> = (props) => {
  const { _id, name, date, comment, reply } = props;

  console.log("date:", date);

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <div className={styles.name}>{name}</div>
        <div className={styles.date}>{moment(date).format("LL")}</div>
      </div>
      <div className={styles.comment}>
        <div className={styles.content}>{comment}</div>
        <div className={styles.reply}>
          <div>
            <SvgSprite id='share-arrow' />
          </div>
          <div className={styles.title}>Reply</div>
        </div>
      </div>
    </div>
  );
};
