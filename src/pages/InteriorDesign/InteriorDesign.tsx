import { FC } from "react";
import HeroPage from "../../components/HeroPage/HeroPage";
import Offer from "../../components/Offer/Offer";
import Benefits from "../../components/Benefits/Benefits";
import styles from "./InteriorDesign.module.scss";
import Portfolio from "../../components/Portfolio/Portfolio";

const InteriorDesign: FC = () => {
  return (
    <>
      <HeroPage />
      <div className={styles.container}>
        <Offer />
      </div>
      <Benefits />
      <Portfolio />
    </>
  );
};

export default InteriorDesign;
