import { FC } from "react";
import { TypeTestimonialsCards } from "../../data";

import styles from "./TestimonialsCard.module.scss";

const TestimonialsCard: FC<TypeTestimonialsCards> = (card) => {
  const { profileImg, content, name, position } = card;
  return (
    <div className={styles.container}>
      <div className={styles.faceWrapper}>
        <img src={profileImg} alt='' />
      </div>
      <div className={styles.content}>{content}</div>
      <div className={styles.name}>{name}</div>
      <div className={styles.position}>{position}</div>
    </div>
  );
};

export default TestimonialsCard;
