import { FC, useState, useEffect } from "react";
import { PortfolioCard } from "../index";
import { TypePortfolioCard } from "../../data";
import { SvgSprite, ServerError, LoadingWait } from "../../uikit";

import { getData } from "../../api/getData";
import styles from "./PortfolioGallery.module.scss";

const PortfolioGallery: FC = () => {
  const [indexRender, setIndexRender] = useState(2);
  const [data, setData] = useState<Array<TypePortfolioCard>>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData("/portfolio_card", setData, setIsError, setIsLoading);
  }, []);
  const endIndex = data && data.length - 1;
  const numberItemRow = 3;

  return (
    <div className={styles.container}>
      {data && (
        <>
          <div className={styles.containerGallery}>
            {data.map(
              (card, index) =>
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
