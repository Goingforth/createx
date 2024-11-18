import { FC } from "react";
// import SliderHero from "../SliderHero/SliderHero";
import { SliderHero } from "../index";
import ButtonBasic from "../../uikit/Buttons/ButtonBasic/ButtonBasic";
// import { Btn } from "../../uikit";
import styles from "./Hero.module.scss";

const Hero: FC = () => {
  return (
    <div className={styles.container}>
      <SliderHero />
      <div className={styles.blockButton}>
        <ButtonBasic
          title='Learn more about us'
          bg='transparent'
          size='large'
          border
        />
        <ButtonBasic title='SUBMIT REQUEST' bg='primary' size='large' />
        {/* <Btn title='SUBMIT REQUEST' bg='primary' size='large' /> */}
      </div>
    </div>
  );
};

export default Hero;
