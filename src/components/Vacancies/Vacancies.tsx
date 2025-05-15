import { FC } from "react";
import { TypeDataVacancyCard } from "../../data";
import VacancyCard from "./VacancyCard/VacancyCard";
import styles from "./Vacancies.module.scss";
import { ServerError, LoadingWait } from "../../uikit";
import { useData } from "../../api/index";

const Vacancies: FC = () => {
  const { data, isLoading, isError } = useData("/vacancies");
  return (
    <>
      {data && (
        <div className={styles.container}>
          {data?.map((card: TypeDataVacancyCard) => (
            <VacancyCard key={card.id} {...card} />
          ))}
        </div>
      )}
      {isError && <ServerError />}
      {isLoading && <LoadingWait />}
    </>
  );
};

export default Vacancies;
