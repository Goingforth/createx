import { FC, useEffect, useState } from "react";
import { TypeDataVacancyCard } from "../../data";
import { VacancyCard } from "../index";
import styles from "./Vacancies.module.scss";
import { ServerError, LoadingWait } from "../../uikit";
import { getData } from "../../api/getData";

const Vacancies: FC = () => {
  const [data, setData] = useState<Array<TypeDataVacancyCard>>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getData("/vacancies", setData, setIsError, setIsLoading);
  }, []);
  return (
    <>
      {data && (
        <div className={styles.container}>
          {data?.map((card) => (
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
