import { FC } from "react";
import {
  HeroPage,
  MediaTabs,
  PortfolioGallery,
  Testimonials,
  Clients,
} from "../../components";

import styles from "./Work.module.scss";

const Work: FC = () => {
  return (
    <>
      <HeroPage />
      <MediaTabs />
      <PortfolioGallery />
      <Testimonials />
      <div className={styles.containerClients}>
        <Clients title='Our clients' />
      </div>
    </>
  );
};

export default Work;
