import { FC } from "react";
import { ScrollToTop } from "../../utils";
import { HeroPage } from "../../components";
// import styles from "./AvailablePositions.module.scss";

const AvailablePositions: FC = () => {
  return (
    <div>
      <ScrollToTop />
      <HeroPage />
    </div>
  );
};

export default AvailablePositions;
