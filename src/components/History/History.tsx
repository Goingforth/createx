import { FC, useState } from "react";
import { TypeHistorySlide } from "../../data";
import {
  SvgSprite,
  ImgCloudinary,
  SliderControls,
  ServerError,
  LoadingWait,
} from "../../uikit";
import { useData } from "../../api/index";

import styles from "./History.module.scss";

const History: FC = () => {
  const { data, isLoading, isError } = useData("/history");
  const [active, setActive] = useState(0);
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.title}>Our history</div>
        {isError && <ServerError />}
        <div className={styles.timeline}>
          {data?.map((history: TypeHistorySlide, index: number) => (
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
              <ImgCloudinary image={data[active]?.image} />
            </div>
            <div className={styles.description}>
              {data[active]?.description}
            </div>
          </div>
        )}
      </div>
      {isLoading && <LoadingWait />}
    </div>
  );
};

export default History;
