import { FC } from "react";

import styles from "./TestimonialsCard.module.scss";

type Props = {
  profileImg: string;
  image: string;
  content: string;
  name: string;
  position: string;
};

const TestimonialsCard: FC<Props> = ({
  profileImg,
  image,
  content,
  name,
  position,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.faceWrapper}>
        <img src={profileImg} alt='' />
      </div>
      <div className={styles.content}>{content}</div>
      <div className={styles.name}>{name}</div>
      <div className={styles.position}>{position}</div>
      <div className={styles.imageWrapper}>
        <img src={image} alt='' />
      </div>
    </div>
  );
};

export default TestimonialsCard;
