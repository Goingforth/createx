import { FC } from "react";
import { dataVacancyCards } from "../../data";
import VacancyCard from "../VacancyCard/VacancyCard";
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
