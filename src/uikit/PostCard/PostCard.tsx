import { FC } from "react";
import { Link } from "react-router-dom";
import { TypeCategories, TypeCommentNews } from "../../data";
import { Meta } from "../index";
import { ImgCloudinary } from "../index";

import styles from "./PostCard.module.scss";

type TypePostCard = {
  _id: string;
  size: "regular" | "large" | "small";
  title: string;
  categories: TypeCategories;
  date: string;
  comments: TypeCommentNews[];
  text: string;
  image: string;
  page?: string;
};

export const PostCard: FC<TypePostCard> = (props) => {
  const { _id, size, image, title, categories, date, comments, text, page } =
    props;
  const metaProps = {
    categories: categories,
    date: date,
    comments: comments?.length,
    size: size,
  };

  return (
    <Link
      to={page ? `${page}/${_id}` : `${_id}`}
      state={{ data: props }}
      className={styles[size]}
    >
      <div className={styles.imageWrapper}>
        <ImgCloudinary image={image} />
      </div>
      <div className={styles.cardWrapper}>
        <div className={styles.heading}>{title}</div>
        <Meta {...metaProps} />
        <div className={styles.text}>{text}</div>
      </div>
    </Link>
  );
};
