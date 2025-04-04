import { FC, useState, useEffect } from "react";
import { TypeHistorySlide } from "../../data";
import {
  SvgSprite,
  ImgCloudinary,
  SliderControls,
  ServerError,
  LoadingWait,
} from "../../uikit";
import { getData } from "../../api/getData";

import styles from "./History.module.scss";

const History: FC = () => {
  const [active, setActive] = useState(0);
  const [data, setData] = useState<Array<TypeHistorySlide>>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData("/history", setData, setIsError, setIsLoading);
  }, []);
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.title}>Our history</div>
        {isError && <ServerError />}
        <div className={styles.timeline}>
          {data?.map((history, index) => (
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

        {data && (
          <div>
            <div className={styles.imageWrapper}>
              <ImgCloudinary image={data[active].image} />
            </div>
            <div className={styles.description}>{data[active].description}</div>
          </div>
        )}
      </div>
      {isLoading && <LoadingWait />}
    </div>
  );
};

export default History;
