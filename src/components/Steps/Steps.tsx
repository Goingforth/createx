import { FC, useState } from "react";
import Step from "./Step/Step";
import { TypeDataStep } from "../../data";
import { ServerError, LoadingWait } from "../../uikit";
import { useData } from "../../api/index";
import styles from "./Steps.module.scss";

export const Steps: FC = () => {
  const { data, isLoading, isError } = useData("/steps");
  const [activeStep, setActiveStep] = useState(-1);

  return (
    <div className={styles.container}>
      <div className={styles.stepsTitle}>That’s how we do it</div>
      <div className={styles.steps}>
        {data?.map(
          ({ id, number, title, info }: TypeDataStep, index: number) => (
            <Step
              key={id}
              number={number}
              title={title}
              info={info}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              index={index}
            />
          )
        )}
      </div>
      {isError && <ServerError />}
      {isLoading && <LoadingWait />}
    </div>
  );
};
