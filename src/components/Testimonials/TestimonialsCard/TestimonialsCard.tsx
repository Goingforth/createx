import { FC } from "react";
import { TypeTestimonialsCards } from "../../../data";
import { ImgCloudinary } from "../../../uikit";

import styles from "./TestimonialsCard.module.scss";

const TestimonialsCard: FC<TypeTestimonialsCards> = (card) => {
  const { profileImg, content, name, position } = card;
  return (
    <div className={styles.container}>
      <div className={styles.faceWrapper}>
        <ImgCloudinary image={profileImg} />
      </div>
      <div className={styles.content}>{content}</div>
      <div className={styles.name}>{name}</div>
      <div className={styles.position}>{position}</div>
    </div>
  );
};

export default TestimonialsCard;
