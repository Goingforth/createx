import { FC } from "react";
import { TypeDataVacancyCard } from "../../data";
import { SvgSprite } from "../../uikit";
import { Btn } from "../../uikit";
import styles from "./VacancyCard.module.scss";

const VacancyCard: FC<TypeDataVacancyCard> = ({ ...card }) => {
  return (
    <div className={styles.container}>
      <div className={styles.vacancy}>
        <div className={styles.meta}>
          <SvgSprite id='location' />
          <p>{card.meta.location}</p>
          <div className={styles.divider}>
            <SvgSprite id='divider_small' />
          </div>
          <SvgSprite id='clock' />
          <p>{card.meta.type}</p>
        </div>
        <div className={styles.position}>{card.position}</div>
      </div>
      <Btn form='outline' title='Apply now' onClick={() => alert("Click!")} />
    </div>
  );
};

export default VacancyCard;
