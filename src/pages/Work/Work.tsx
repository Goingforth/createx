import { FC } from "react";
import {
  HeroPage,
  MediaTabs,
  PortfolioGallery,
  Testimonials,
  Clients,
} from "../../components";

import { ScrollToTop } from "../../utils";

import styles from "./Work.module.scss";

const Work: FC = () => {
  return (
    <>
      <ScrollToTop />
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
