import { FC, useState } from "react";
import { dataPortfolioCards, TypePortfolioCard } from "../../data";

import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import ViewAll from "../ViewAll/ViewAll";

import SliderControls from "../SliderControls/SliderControls";
import styles from "./SliderCarousel.module.scss";

type PropsSliderCarousel = {
  title: string;
  dataArray: TypePortfolioCard[];
  titleViewAll: string;
  to: string;
  btnTitle: string;
};

const SliderCarousel: FC<PropsSliderCarousel> = (props) => {
  const { title, dataArray, titleViewAll, to, btnTitle } = props;
  const [offset, setOffset] = useState(0);
  const stepOffset = 420;
  const numberBlockingSlide = dataPortfolioCards.length - 3;
  const onClickPrev = () => setOffset(offset + stepOffset);
  const onClickNext = () => setOffset(offset - stepOffset);
  return (
    // <div className={styles.container}>
    <div className='containerSection'>
      <div className={styles.head}>
        <div className={styles.title}>{title}</div>
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
      <div className={styles.window}>
        <div
          className={styles.wrapper}
          style={{
            translate: offset,
            transition: "translate 1s ease-in-out",
          }}
        >
          {dataArray.map((props) => (
            <PortfolioCard key={props.id} {...props} />
          ))}
        </div>
      </div>
      <ViewAll
        titleViewAll={titleViewAll}
        // to='/work'
        to={to}
        btnTitle={btnTitle}
      />
    </div>
    // </div>
  );
};

export default SliderCarousel;
