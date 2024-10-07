import { FC } from "react";
import SliderCarousel from "../../uikit/SliderCarousel/SliderCarousel";

import { dataPortfolioCards } from "../../data";

type Props = {
  title: string;
  pt?: string | number | undefined;
  pb?: string | number | undefined;
};

const Portfolio: FC<Props> = ({ title, pt, pb }) => {
  const props = {
    dataArray: dataPortfolioCards,
    titleViewAll: "Explore all our works",
    to: "/work",
    btnTitle: "View portfolio",
  };

  return (
    <div style={{ paddingTop: pt, paddingBottom: pb }}>
      <SliderCarousel {...props} title={title} />
    </div>
  );
};

export default Portfolio;
