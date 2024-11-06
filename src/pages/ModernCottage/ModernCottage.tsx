import { FC } from "react";
import { ScrollToTop } from "../../utils";
import { HeroPage } from "../../components";
import styles from "./ModernCottage.module.scss";

const ModernCottage: FC = () => {
  return (
    <div>
      <ScrollToTop />
      <HeroPage />
    </div>
  );
};

export default ModernCottage;
