import { FC } from "react";
import {
  Hero,
  Video,
  CoreValues,
  BlockServices,
  NewsHomePage,
  Portfolio,
  Testimonials,
  Clients,
  Figures,
  RequestForm,
} from "../../components";

import styles from "./Home.module.scss";

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Video />

      <div className={styles.containerCoreValues}>
        <CoreValues />
        <RequestForm />
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

      <Figures />
      <NewsHomePage />
    </div>
  );
};

export default Home;
