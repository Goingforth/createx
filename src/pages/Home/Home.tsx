import { FC } from "react";
import Hero from "../../components/Hero/Hero";
import Video from "../../components/Video/Video";
import CoreValues from "../../components/CoreValues/CoreValues";
import BlockServices from "../../components/BlockServices/BlockServices";
import NewsHomePage from "../../components/NewsHomepage/NewsHomePage";
import Portfolio from "../../components/Portfolio/Portfolio";
import Testimonials from "../../components/Testimonials/Testimonials";
// import { TestimonialsBlock } from "../../components/Testimonials/Testimonials";
import styles from "./Home.module.scss";
import Figures from "../../components/Figures/Figures";
import Clients from "../../components/Clients/Clients";
// import Application from "../../components/Application/Application";

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Video />

      <div className={styles.containerCoreValues}>
        <CoreValues />
      </div>

      <div className={styles.containerServices}>
        <BlockServices />
      </div>
      <Portfolio
        title='Browse our selected projects 
and learn more about our work'
        pt='120px'
        pb='120px'
      />
      <div className={styles.containerClients}>
        <Clients title='Supported by 12+ partners' />
      </div>
      <Testimonials />
      {/* <TestimonialsBlock /> */}
      <Figures />
      <NewsHomePage />
    </div>
  );
};

export default Home;
