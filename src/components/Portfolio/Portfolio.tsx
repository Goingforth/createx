import { FC, useState } from "react";
import { dataPortfolioCards } from "../../data";
import { Link } from "react-router-dom";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
// import SliderCarousel from "../SliderCarousel/SliderCarousel";

import SliderControls from "../../uikit/SliderControls/SliderControls";
import styles from "./Portfolio.module.scss";
import Btn from "../../uikit/Buttons/Btn/Btn";

const Portfolio: FC = () => {
  const [offset, setOffset] = useState(0);
  const stepOffset = 420;
  const numberBlockingSlide = dataPortfolioCards.length - 3;
  const onClickPrev = () => setOffset(offset + stepOffset);
  const onClickNext = () => setOffset(offset - stepOffset);
  return (
    <div className={styles.container}>
      <div className='containerSection'>
        <div className={styles.head}>
          <div className={styles.title}>Related projects</div>
          <div className={styles.controlsWrapper}>
            <SliderControls
              type='carousel'
              stepOffset={stepOffset}
              numberBlockingSlide={numberBlockingSlide}
              offset={offset}
              onClickNext={onClickNext}
              onClickPrev={onClickPrev}
            />
          </div>
        </div>
        {/* <SliderCarousel
          offset={offset}
          dataArrayObjects={dataPortfolioCards}
          CardItem={<PortfolioCard />}
        /> */}
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
