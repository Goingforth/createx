import { FC } from "react";
import SliderCarousel from "../../uikit/SliderCarousel/SliderCarousel";

import { dataPortfolioCards, TypeCategoryPortfolio } from "../../data";

type Props = {
  title: string;
  category?: TypeCategoryPortfolio[];
  pt?: string | number | undefined;
  pb?: string | number | undefined;
};

const Portfolio: FC<Props> = ({ title, pt, pb, category }) => {
  const dataFilteredPortfolioCard =
    category !== undefined
      ? dataPortfolioCards.filter((card) => category.includes(card.category))
      : dataPortfolioCards;

  const props = {
    dataArray: dataFilteredPortfolioCard,
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
