import { FC } from "react";
import { ScrollToTop } from "../../utils";
import { CTA, HeroPage, Vacancies, Benefits } from "../../components";
import styles from "./AvailablePositions.module.scss";

const AvailablePositions: FC = () => {
  return (
    <div>
      <ScrollToTop />

      <HeroPage />
      <div className={styles.container}>
        <Vacancies />
        <CTA />
      </div>
      <Benefits />
    </div>
  );
};

export default AvailablePositions;
