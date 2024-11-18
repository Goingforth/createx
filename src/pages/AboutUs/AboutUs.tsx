import { FC } from "react";
import {
  HeroPage,
  Clients,
  Team,
  Statistics,
  CEO,
  CoreValues,
  History,
  Map,
} from "../../components";
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
