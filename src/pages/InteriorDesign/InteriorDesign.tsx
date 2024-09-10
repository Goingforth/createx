import { FC } from "react";
import HeroPage from "../../components/HeroPage/HeroPage";
import Offer from "../../components/Offer/Offer";
import Benefits from "../../components/Benefits/Benefits";
import styles from "./InteriorDesign.module.scss";

const InteriorDesign: FC = () => {
  return (
    <>
      <HeroPage />
      <div className={styles.container}>
        <Offer />
      </div>
      <Benefits />
    </>
  );
};

export default InteriorDesign;
