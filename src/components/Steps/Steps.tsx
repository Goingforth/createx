import { FC, useState } from "react";
import Step from "../Step/Step";
import { dataSteps } from "../../data";
import styles from "./Steps.module.scss";

const Steps: FC = () => {
  const [activeStep, setActiveStep] = useState(-1);

  return (
    <div className={styles.container}>
      <div className={styles.stepsTitle}>That’s how we do it</div>
      <div className={styles.steps}>
        {dataSteps.map(({ id, number, title, info }, index) => (
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
    </div>
  );
};

export default Steps;
