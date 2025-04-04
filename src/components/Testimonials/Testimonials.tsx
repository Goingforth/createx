import { FC, useState, useEffect } from "react";
import { TestimonialsCard } from "../index";
import { SliderControls, ImgCloudinary } from "../../uikit/";
import { TypeTestimonialsCards } from "../../data";

import { ServerError, LoadingWait } from "../../uikit";
import { getData } from "../../api/getData";
import styles from "./Testimonials.module.scss";

const Testimonials: FC = () => {
  const [active, setActive] = useState(0);
  const [offsetCard, setOffsetCard] = useState(0);
  const [show, setShow] = useState(true);

  const [data, setData] = useState<Array<TypeTestimonialsCards>>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData("/testimonials", setData, setIsError, setIsLoading);
  }, []);

  const stepOffsetCard = 600;

  const numberBlockingSlide = data && data.length - 1;
  const onClickPrev = () => {
    setOffsetCard(offsetCard + stepOffsetCard);

    setShow(false);
    setActive(active - 1);
    setTimeout(() => setShow(true), 0);
  };
  const onClickNext = () => {
    setOffsetCard(offsetCard - stepOffsetCard);

    setShow(false);
    setActive(active + 1);

    setTimeout(() => setShow(true), 0);
  };
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.title}>What our clients are saying</div>

        <div className={styles.sliderControls}>
          <SliderControls
            type='carousel'
            stepOffset={stepOffsetCard}
            numberBlockingSlide={numberBlockingSlide}
            offset={offsetCard}
            onClickNext={onClickNext}
            onClickPrev={onClickPrev}
          />
        </div>
        <div className={styles.windowCard}>
          {data?.map((card) => (
            <div
              key={card.id}
              style={{
                translate: offsetCard,
                transition: "translate 1s ease-in-out",
              }}
            >
              <TestimonialsCard {...card} />
            </div>
          ))}
        </div>
        <div className={styles.imageWrapper}>
          {show && data && data?.length > 0 && (
            <div className={styles.pulse}>
              <ImgCloudinary image={data[active].image} />
            </div>
          )}
          {isError && <ServerError />}
          {isLoading && <LoadingWait />}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
