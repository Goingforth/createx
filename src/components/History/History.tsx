import { FC, useState } from "react";
import { dataHistorySlides } from "../../data";
import { SvgSprite, ImgCloudinary } from "../../uikit";
import SliderControls from "../../uikit/SliderControls/SliderControls";
import styles from "./History.module.scss";

const History: FC = () => {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.title}>Our history</div>
        <div className={styles.timeline}>
          {dataHistorySlides.map((history, index) => (
            <div
              key={history.id}
              className={[
                styles.timelineItem,
                index === active ? styles.active : "",
              ].join(" ")}
              onClick={() => setActive(index)}
            >
              <div className={styles.ellipse}>
                <SvgSprite id='ellipse' />
              </div>
              <div> {history.timeline}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.containerSlider}>
        <div className={styles.controls}>
          <SliderControls
            type='jump'
            currentSlide={active}
            numberBlockingSlide={8}
            onClickPrev={() => {
              setActive(active - 1);
            }}
            onClickNext={() => {
              setActive(active + 1);
            }}
          />
        </div>
        <div>
          <div className={styles.imageWrapper}>
            <ImgCloudinary image={dataHistorySlides[active].image} />
          </div>
          <div className={styles.description}>
            {dataHistorySlides[active].description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
