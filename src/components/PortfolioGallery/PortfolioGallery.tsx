import { FC, useState } from "react";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import { dataPortfolioCards } from "../../data";
import SvgSprite from "../../uikit/SvgSprite/SvgSprite";
import styles from "./PortfolioGallery.module.scss";

const PortfolioGallery: FC = () => {
  const [indexRender, setIndexRender] = useState(2);
  const endIndex = dataPortfolioCards.length - 1;
  const numberItemRow = 3;

  return (
    <div className={styles.container}>
      <div className={styles.containerGallery}>
        {dataPortfolioCards.map(
          ({ src, title, subTitle }, index) =>
            index <= indexRender && (
              <div key={`portfolioGallery${index}`}>
                <PortfolioCard src={src} title={title} subTitle={subTitle} />
              </div>
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
    </div>
  );
};

export default PortfolioGallery;
