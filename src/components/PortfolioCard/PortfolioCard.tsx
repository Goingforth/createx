import { FC } from "react";
import ButtonBasic from "../../uikit/Buttons/ButtonBasic/ButtonBasic";

import styles from "./PortfolioCard.module.scss";

const PortfolioCard: FC = () => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imageWrapper}>
        <img src='/portfolio/portfolio0.jpg' alt='' />
      </div>
      <div className={styles.projectName}>
        <div className={styles.contentTitle}>Kids Bedroom With Decorations</div>
        <div className={styles.contentSubTitle}>Apartments & flats</div>
        <div className={styles.contentButton}>
          <ButtonBasic />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
