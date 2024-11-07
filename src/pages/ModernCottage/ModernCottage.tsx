import { FC } from "react";
import { ScrollToTop } from "../../utils";
import { HeroPage, AboutProject } from "../../components";
import styles from "./ModernCottage.module.scss";

const ModernCottage: FC = () => {
  return (
    <div>
      <ScrollToTop />
      <HeroPage />
      <AboutProject />
    </div>
  );
};

export default ModernCottage;
