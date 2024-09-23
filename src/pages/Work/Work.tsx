import { FC } from "react";
import HeroPage from "../../components/HeroPage/HeroPage";
import PortfolioGallery from "../../components/PortfolioGallery/PortfolioGallery";
import Testimonials from "../../components/Testimonials/Testimonials";
import Clients from "../../components/Clients/Clients";

import styles from "./Work.module.scss";

const Work: FC = () => {
  return (
    <>
      <HeroPage />
      <PortfolioGallery />
      <Testimonials />
      <div className={styles.containerClients}>
        <Clients title='Our clients' />
      </div>
    </>
  );
};

export default Work;
