import { FC, useState, useEffect } from "react";
import Step from "./Step/Step";
import { TypeDataStep } from "../../data";
import { ServerError } from "../../uikit";
import { getData } from "../../api/getData";
import styles from "./Steps.module.scss";

export const Steps: FC = () => {
  const [activeStep, setActiveStep] = useState(-1);
  const [data, setData] = useState<Array<TypeDataStep>>();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getData("/steps", setData, setIsError);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.stepsTitle}>That’s how we do it</div>
      <div className={styles.steps}>
        {data?.map(({ id, number, title, info }, index) => (
          <Step
            key={id}
            number={number}
            title={title}
            info={info}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            index={index}
          />
        ))}
      </div>
      {isError && <ServerError />}
    </div>
  );
};
