import { FC } from "react";
import { HeroPage, NewsBody } from "../../components";
import { ScrollToTop } from "../../utils";

const News: FC = () => {
  return (
    <div>
      <ScrollToTop />
      <HeroPage />
      <NewsBody />
    </div>
  );
};

export default News;
