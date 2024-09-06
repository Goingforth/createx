import { FC } from "react";
import HeroPage from "../../components/HeroPage/HeroPage";
import Offer from "../../components/Offer/Offer";
import styles from "./InteriorDesign.module.scss";

const InteriorDesign: FC = () => {
  return (
    <>
      <HeroPage />
      <div className={styles.container}>
        <Offer />
      </div>

      {/* <div className={styles.container}>
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
      </div> */}
    </>
  );
};

export default InteriorDesign;
