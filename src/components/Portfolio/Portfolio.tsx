import { FC, useState } from "react";

import { dataPortfolioCards } from "../../data";
import SvgSprite from "../../uikit/SvgSprite/SvgSprite";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import styles from "./Portfolio.module.scss";

const Portfolio: FC = () => {
  const [offset, setOffset] = useState(0);
  const stepOffset = 420;
  console.log("offset:", offset);

  return (
    <div className={styles.container}>
      <div className='container_base'>
        <div className={styles.head}>
          <div className={styles.title}>Related projects</div>
          <div className={styles.direction}>
            <button
              onClick={() => setOffset(offset + stepOffset)}
              className={[
                styles.button,
                offset === 0 ? styles.disableButton : "",
              ].join(" ")}
            >
              <SvgSprite id='left' />
            </button>
            <button
              onClick={() => setOffset(offset - stepOffset)}
              className={[
                styles.button,
                offset === -stepOffset * 3 ? styles.disableButton : "",
              ].join(" ")}
            >
              <SvgSprite id='right' />
            </button>
          </div>
        </div>
        <div className={styles.window}>
          <div
            className={styles.wrapper}
            style={{
              translate: offset,
              transition: "translate 1s ease-in-out",
            }}
          >
            {dataPortfolioCards.map(() => (
              <PortfolioCard />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
