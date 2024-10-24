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
        {dataServicesPage.map((props, index) => (
          <BlockServicePage key={props.title} index={index} {...props} />
        ))}
      </div>
    </>
  );
};

export default Services;
