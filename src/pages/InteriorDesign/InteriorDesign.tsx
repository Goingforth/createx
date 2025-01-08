import { FC } from "react";
import {
  HeroPage,
  Offer,
  Benefits,
  Portfolio,
  Clients,
  Pricing,
} from "../../components";
import { ScrollToTop } from "../../utils";

import styles from "./InteriorDesign.module.scss";
import { dataBenefitsInteriorDesign } from "../../data";
const VITE_BASE_URL_PHOTO = import.meta.env.VITE_BASE_URL_PHOTO;

const InteriorDesign: FC = () => {
  return (
    <>
      <ScrollToTop />
      <HeroPage />
      <div className={styles.container}>
        <Offer />
      </div>
      <Benefits {...dataBenefitsInteriorDesign} />
      <Portfolio
        title='Related projects'
        pt='180px'
        pb='100px'
        category={["Apartments & flats", "Private houses"]}
      />
      <div
        className={styles.background}
        style={{
          backgroundImage: `url(${VITE_BASE_URL_PHOTO}/background.jpg)`,
        }}
      >
        <Pricing />
        <Clients title='Supported by 12+ partners' />
      </div>
    </>
  );
};

export default InteriorDesign;
