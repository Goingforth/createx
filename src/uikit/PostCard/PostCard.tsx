import { FC } from "react";
import { Link } from "react-router-dom";
import { TypeCategories } from "../../data";
import { Meta } from "../index";

import styles from "./PostCard.module.scss";

type TypePostCard = {
  id: string;
  size: "regular" | "large" | "small";
  title: string;
  categories: TypeCategories;
  date: string;
  comments: number;
  text: string;
  image: string;
};

export const PostCard: FC<TypePostCard> = (props) => {
  const { id, size, image, title, categories, date, comments, text } = props;
  const metaProps = {
    categories: categories,
    date: date,
    comments: comments,
    size: size,
  };

  return (
    <Link to={id} className={styles[size]}>
      <div className={styles.imageWrapper}>
        <img src={image} alt='' />
      </div>
      <div className={styles.cardWrapper}>
        <div className={styles.heading}>{title}</div>
        <Meta {...metaProps} />

        <div className={styles.text}>{text}</div>
      </div>
    </Link>
  );
};
