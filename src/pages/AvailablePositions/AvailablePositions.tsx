import { FC } from "react";
import { ScrollToTop } from "../../utils";
import { CTA, HeroPage, Vacancies } from "../../components";
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
    </div>
  );
};

export default AvailablePositions;
