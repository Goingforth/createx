import { FC } from "react";
import Hero from "../../components/Hero/Hero";
import Video from "../../components/Video/Video";
import CoreValues from "../../components/CoreValues/CoreValues";
import styles from "./Home.module.scss";

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Video />
      <CoreValues />
    </div>
  );
};

export default Home;
