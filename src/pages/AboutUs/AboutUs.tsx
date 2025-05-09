import { FC } from "react";
import {
  HeroPage,
  Clients,
  Statistics,
  CoreValues,
  History,
  Map,
  Team,
} from "../../components";

import { CEO } from "./CEO/CEO";
import { ScrollToTop } from "../../utils";
import styles from "./AboutUs.module.scss";

const AboutUs: FC = () => {
  const dataClients = {
    title: "Our partners",
    subTitle: "We are supported by 12+ industry bodies and media partners",
    amountLogo: 12,
  };
  return (
    <div>
      <ScrollToTop />
      <HeroPage />
      <div className={styles.sectionStatisticsCEO}>
        <Statistics />
        <CEO />
      </div>
      <div className={styles.sectionCoreValuesHistory}>
        <CoreValues />
        <History />
      </div>
      <div className={styles.sectionPartnersTeam}>
        <Clients {...dataClients} />
        <Team />
      </div>
      <Map />
    </div>
  );
};

export default AboutUs;
