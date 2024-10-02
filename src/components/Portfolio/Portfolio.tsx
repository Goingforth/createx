import { FC } from "react";
import SliderCarousel from "../../uikit/SliderCarousel/SliderCarousel";

import { dataPortfolioCards } from "../../data";

const Portfolio: FC = () => {
  const props = {
    title: "Related projects",
    dataArray: dataPortfolioCards,
    titleViewAll: "Explore all our works",
    to: "/work",
    btnTitle: "View portfolio",
  };

  return <SliderCarousel {...props} />;
};

export default Portfolio;
