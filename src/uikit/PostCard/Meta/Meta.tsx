import { FC } from "react";
import { SvgSprite } from "../../index";
import styles from "./Meta.module.scss";

interface TypeDataMeta {
  categories: string;
  date: string;
  comments: number;
  size: "regular" | "large" | "small";
}

export const Meta: FC<TypeDataMeta> = (props) => {
  const { categories, date, comments, size } = props;
  return (
    <div className={styles[size]}>
      <div className={styles.meta}>
        <div className={styles.categories}>{categories}</div>
        <div className={styles.divider}>
          <SvgSprite id='divider_small' />
        </div>
        <div>{date}</div>
        <div className={styles.divider}>
          <SvgSprite id='divider_small' />
        </div>
        <div className={styles.comments}>
          <div className={styles.icon}>
            <SvgSprite id='chat' width='100%' height='100%' />
          </div>
          <div>
            {comments === 0
              ? "No comments"
              : comments !== 1
              ? `${comments} comments`
              : "1 comment"}
          </div>
        </div>
      </div>
    </div>
  );
};
