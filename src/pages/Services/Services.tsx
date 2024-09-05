import { FC } from "react";
import HeroPage from "../../components/HeroPage/HeroPage";
import BlockServicePage from "../../components/BlockServicepage/BlockServicePage";
import styles from "./Services.module.scss";

const Services: FC = () => {
  const services = [1, 2, 3];
  return (
    <>
      <div>
        <HeroPage />
      </div>
      <div className={styles.container}>
        {services.map((item, index) => (
          <BlockServicePage index={index} />
        ))}
      </div>
    </>
  );
};

export default Services;
