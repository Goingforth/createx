import { FC } from "react";
import { dataVacancyCards } from "../../data";
import { VacancyCard } from "../index";
import styles from "./Vacancies.module.scss";

const Vacancies: FC = () => {
  return (
    <div className={styles.container}>
      {dataVacancyCards.map((card) => (
        <VacancyCard key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Vacancies;
