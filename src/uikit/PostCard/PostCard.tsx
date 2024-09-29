import { FC } from "react";
import { TypeCategories } from "../../data";
import styles from "./PostCard.module.scss";

type TypePostCard = {
  size: "regular" | "large" | "small";
  title: string;
  categories: TypeCategories;
  date: string;
  comments: number;
  text: string;
  img: string;
};

const PostCard: FC<TypePostCard> = (props) => {
  const { size, img, title, categories, date, comments, text } = props;
  return (
    <div
      className={[
        styles.container,
        size === "large" ? styles.large : "",
        size === "regular" ? styles.regular : "",
        size === "small" ? styles.small : "",
      ].join(" ")}
    >
      <div className={styles.imageWrapper}>
        <img src={img} alt='' />
      </div>
      <div className={styles.cardWrapper}>
        <div className={styles.heading}>{title}</div>
        <div className={styles.meta}>
          <div>{categories}</div>
          <div>{date}</div>
          <div>
            {comments === 0
              ? "No comments"
              : comments !== 1
              ? `${comments} comments`
              : "1 comment"}
          </div>
        </div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};

export default PostCard;
