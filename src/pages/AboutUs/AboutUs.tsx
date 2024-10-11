import { FC } from "react";
import HeroPage from "../../components/HeroPage/HeroPage";
import Clients from "../../components/Clients/Clients";
import Team from "../../components/Team/Team";
import styles from "./AboutUs.module.scss";
import Statistics from "../../components/Statistics/Statistics";
import CEO from "../../components/CEO/CEO";
import Map from "../../components/Map/Map";
import CoreValues from "../../components/CoreValues/CoreValues";
import History from "../../components/History/History";

const AboutUs: FC = () => {
  const dataClients = {
    title: "Our partners",
    subTitle: "We are supported by 12+ industry bodies and media partners",
    amountLogo: 12,
  };
  return (
    <div>
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
