import { FC } from "react";
import SliderCarousel from "../../uikit/SliderCarousel/SliderCarousel";
import { ServerError, LoadingWait } from "../../uikit";

import { useData } from "../../api/index";

import { TypeCategoryPortfolio, TypePortfolioCard } from "../../data";

type Props = {
  title: string;
  category?: TypeCategoryPortfolio[];
  pt?: string | number | undefined;
  pb?: string | number | undefined;
};

const Portfolio: FC<Props> = ({ title, pt, pb, category }) => {
  const { data, isLoading, isError } = useData("/portfolio_card");

  const dataFilteredPortfolioCard = data
    ? category !== undefined
      ? data.filter((card: TypePortfolioCard) =>
          category.includes(card.category)
        )
      : data
    : [];

  const props = {
    dataArray: dataFilteredPortfolioCard,
    titleViewAll: "Explore all our works",
    to: "/work",
    btnTitle: "View portfolio",
  };

  return (
    <div style={{ paddingTop: pt, paddingBottom: pb }}>
      {dataFilteredPortfolioCard && <SliderCarousel {...props} title={title} />}
      {isError && <ServerError />}
      {isLoading && <LoadingWait />}
    </div>
  );
};

export default Portfolio;
