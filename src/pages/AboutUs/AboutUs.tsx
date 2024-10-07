import { FC } from "react";
import HeroPage from "../../components/HeroPage/HeroPage";
import Team from "../../components/Team/Team";
//import styles from "./AboutUs.module.scss";

const AboutUs: FC = () => {
  // return <div className={styles.container}>AboutUs</div>;
  return (
    <div>
      <HeroPage />
      <Team />
    </div>
  );
};

export default AboutUs;
