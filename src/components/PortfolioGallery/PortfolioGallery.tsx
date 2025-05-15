import { FC, useState } from "react";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import { TypePortfolioCard } from "../../data";
import { SvgSprite, ServerError, LoadingWait } from "../../uikit";

import { useData } from "../../api/index";
import styles from "./PortfolioGallery.module.scss";

const PortfolioGallery: FC = () => {
  const { data, isLoading, isError } = useData("/portfolio_card");
  const [indexRender, setIndexRender] = useState(2);

  const endIndex = data && data.length - 1;
  const numberItemRow = 3;

  return (
    <div className={styles.container}>
      {data && (
        <>
          <div className={styles.containerGallery}>
            {data.map(
              (card: TypePortfolioCard, index: number) =>
                index <= indexRender && (
                  <PortfolioCard key={card.id} {...card} />
                )
            )}
          </div>
          <div
            className={[
              styles.loadMore,
              indexRender === endIndex ? styles.noMore : "",
            ].join(" ")}
            onClick={() =>
              indexRender !== endIndex &&
              setIndexRender(indexRender + numberItemRow)
            }
          >
            <SvgSprite id='convert' />
            <p>Load more</p>
          </div>
        </>
      )}
      {isError && <ServerError />}
      {isLoading && <LoadingWait />}
    </div>
  );
};

export default PortfolioGallery;
