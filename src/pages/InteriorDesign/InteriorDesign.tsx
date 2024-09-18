import { FC } from "react";
import HeroPage from "../../components/HeroPage/HeroPage";
import Offer from "../../components/Offer/Offer";
import Benefits from "../../components/Benefits/Benefits";
import styles from "./InteriorDesign.module.scss";
import Portfolio from "../../components/Portfolio/Portfolio";
import Pricing from "../../components/Pricing/Pricing";

const InteriorDesign: FC = () => {
  return (
    <>
      <HeroPage />
      <div className={styles.container}>
        <Offer />
      </div>
      <Benefits />
      <Portfolio />
      <div className={styles.background}>
        <Pricing />
      </div>
    </>
  );
};

export default InteriorDesign;
