import { FC } from "react";
import SvgSprite from "../../../uikit/SvgSprite/SvgSprite";
import styles from "./Step.module.scss";

type Props = {
  number: string;
  title: string;
  info: string;
  activeStep: number;
  setActiveStep: Function;
  index: number;
};

const Step: FC<Props> = ({
  number,
  title,
  info,
  activeStep,
  setActiveStep,
  index,
}) => {
  return (
    <div
      className={styles.container}
      onMouseOver={() => setActiveStep(index)}
      onMouseOut={() => setActiveStep(-1)}
    >
      <div className={styles.stepHead}>
        <div className={styles.stepNumber}>{number}</div>
        {index <= activeStep && (
          <div className={styles.stepLine}>
            <SvgSprite id='line-step' />
          </div>
        )}
      </div>
      <div className={styles.iconWrapper}>
        <SvgSprite id='bg-circles' />
      </div>
      <div className={styles.stepTitle}>{title}</div>
      <div className={styles.stepInfo}>{info}</div>
    </div>
  );
};

export default Step;
