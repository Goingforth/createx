import { FC } from "react";
import { ScrollToTop } from "../../utils";
import {
  HeroPage,
  AboutProject,
  ConstructiveDecisions,
  Portfolio,
  GalleryModernCottage,
} from "../../components";

const ModernCottage: FC = () => {
  return (
    <div>
      <ScrollToTop />
      <HeroPage />
      <GalleryModernCottage />
      <AboutProject />
      <ConstructiveDecisions />
      <Portfolio
        title='Similar projects'
        pt='180px'
        pb='120px'
        category={["Private houses"]}
      />
    </div>
  );
};

export default ModernCottage;
