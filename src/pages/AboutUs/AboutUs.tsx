import { FC } from "react";
import HeroPage from "../../components/HeroPage/HeroPage";
import Clients from "../../components/Clients/Clients";
import Team from "../../components/Team/Team";
import styles from "./AboutUs.module.scss";
import Statistics from "../../components/Statistics/Statistics";
import CEO from "../../components/CEO/CEO";

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
      <div className={styles.sectionPartnersTeam}>
        <Clients {...dataClients} />
        <Team />
      </div>
    </div>
  );
};

export default AboutUs;
