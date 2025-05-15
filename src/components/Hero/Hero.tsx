import { FC } from "react";
import SliderHero from "../SliderHero/SliderHero";
import { Btn } from "../../uikit";
import styles from "./Hero.module.scss";

const Hero: FC = () => {
  return (
    <div className={styles.container}>
      <SliderHero />
      <div className={styles.blockButton}>
        <Btn
          title='Learn more about us'
          size='large'
          width={278}
          bgcolor='transparent'
          border='1px solid white'
        />
        <Btn title='SUBMIT REQUEST' size='large' width={224} />
      </div>
    </div>
  );
};

export default Hero;
