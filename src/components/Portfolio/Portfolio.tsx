import { FC, useState } from "react";
import { dataPortfolioCards } from "../../data";
import { Link } from "react-router-dom";
import SvgSprite from "../../uikit/SvgSprite/SvgSprite";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import styles from "./Portfolio.module.scss";
import Btn from "../../uikit/Buttons/Btn/Btn";

const Portfolio: FC = () => {
  const [offset, setOffset] = useState(0);
  const stepOffset = 420;

  return (
    <div className={styles.container}>
      <div className='containerSection'>
        <div className={styles.head}>
          <div className={styles.title}>Related projects</div>
          <div className={styles.direction}>
            <button
              onClick={() => setOffset(offset + stepOffset * 3)}
              className={[
                styles.button,
                offset === 0 ? styles.disableButton : "",
              ].join(" ")}
            >
              <SvgSprite id='left' />
            </button>
            <button
              onClick={() => setOffset(offset - stepOffset * 3)}
              className={[
                styles.button,
                offset === -stepOffset * (dataPortfolioCards.length - 3)
                  ? styles.disableButton
                  : "",
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
            {dataPortfolioCards.map(({ id, src, title, subTitle }) => (
              <div key={id}>
                <PortfolioCard src={src} title={title} subTitle={subTitle} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.viewAll}>
          <div className={styles.viewAllTitle}>Explore all our works</div>
          <Link to='/work'>
            <Btn size='large' form='solid' title='View portfolio' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
