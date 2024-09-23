import { FC } from "react";
import Btn from "../../uikit/Buttons/Btn/Btn";

import styles from "./PortfolioCard.module.scss";

type TypePortfolioCard = {
  src: string;
  title: string;
  subTitle: string;
};

const PortfolioCard: FC<TypePortfolioCard> = ({ src, title, subTitle }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imageWrapper}>
        <img src={src} alt='' />
      </div>
      <div className={styles.projectName}>
        <div className={styles.contentTitle}>{title}</div>
        <div className={styles.contentSubTitle}>{subTitle}</div>
        <div className={styles.contentButton}>
          <Btn form='outline' title='View Project' />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
