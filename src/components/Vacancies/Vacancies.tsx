import { FC, useEffect, useState } from "react";
import { TypeDataVacancyCard } from "../../data";
import { VacancyCard } from "../index";
import styles from "./Vacancies.module.scss";
import { ServerError } from "../../uikit";
import { getData } from "../../api/getData";

const Vacancies: FC = () => {
  const [data, setData] = useState<Array<TypeDataVacancyCard>>();
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    getData("/vacancies", setData, setIsError);
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
    </>
  );
};

export default Vacancies;
