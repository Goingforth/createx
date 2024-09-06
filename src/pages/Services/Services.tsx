import { FC } from "react";

import HeroPage from "../../components/HeroPage/HeroPage";
import BlockServicePage from "../../components/BlockServicepage/BlockServicePage";
import { dataServicesPage } from "../../data";
import styles from "./Services.module.scss";

const Services: FC = () => {
  return (
    <>
      <div>
        <HeroPage />
      </div>
      <div className={styles.container}>
        {dataServicesPage.map(({ src, title, info, route }, index) => (
          <BlockServicePage
            key={title}
            index={index}
            src={src}
            title={title}
            info={info}
            route={route}
          />
        ))}
      </div>
    </>
  );
};

export default Services;