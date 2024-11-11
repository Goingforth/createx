import { FC } from "react";
import { Link } from "react-router-dom";
import Btn from "../../uikit/Buttons/Btn/Btn";

import styles from "./PortfolioCard.module.scss";

type TypePortfolioCard = {
  src: string;
  title: string;
  category: string;
  to: string;
};

const PortfolioCard: FC<TypePortfolioCard> = (props) => {
  const { src, title, category, to } = props;
  return (
    <div className={styles.projectCard}>
      <div className={styles.imageWrapper}>
        <img src={src} alt='' />
      </div>
      <div className={styles.projectName}>
        <div className={styles.contentTitle}>{title}</div>
        <div className={styles.contentCategory}>{category}</div>
        <Link to={to} className={styles.contentButton}>
          <Btn form='outline' title='View Project' />
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
