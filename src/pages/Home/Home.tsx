import { FC } from "react";
import Hero from "../../components/Hero/Hero";
import Video from "../../components/Video/Video";
import CoreValues from "../../components/CoreValues/CoreValues";
import BlockServices from "../../components/BlockServices/BlockServices";
import NewsHomePage from "../../components/NewsHomepage/NewsHomePage";
import styles from "./Home.module.scss";
// import Application from "../../components/Application/Application";

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Video />
      <CoreValues />
      <BlockServices />
      <NewsHomePage />
    </div>
  );
};

export default Home;
