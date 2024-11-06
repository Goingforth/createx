import { FC, useState } from "react";
import { PortfolioCard } from "../index";
import { dataPortfolioCards } from "../../data";
import { SvgSprite } from "../../uikit";
import styles from "./PortfolioGallery.module.scss";

const PortfolioGallery: FC = () => {
  const [indexRender, setIndexRender] = useState(2);
  const endIndex = dataPortfolioCards.length - 1;
  const numberItemRow = 3;

  return (
    <div className={styles.container}>
      <div className={styles.containerGallery}>
        {dataPortfolioCards.map(
          (card, index) =>
            index <= indexRender && <PortfolioCard key={card.id} {...card} />
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
    </div>
  );
};

export default PortfolioGallery;
