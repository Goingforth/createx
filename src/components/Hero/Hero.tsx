import { FC } from "react";
import SliderHero from "../SliderHero/SliderHero";
import styles from "./Hero.module.scss";

const Hero: FC = () => {
  return (
    <div className={styles.container}>
      <SliderHero />
    </div>
  );
};

export default Hero;
