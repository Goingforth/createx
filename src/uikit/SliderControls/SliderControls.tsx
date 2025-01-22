import { FC } from "react";
import SvgSprite from "../SvgSprite/SvgSprite";

import styles from "./SliderControls.module.scss";

interface SliderCarousel {
  type: "carousel";
  stepOffset: number;
  numberBlockingSlide?: number;
  offset: number;
  currentSlide?: number;
  onClickPrev: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClickNext: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface SliderJump {
  type: "jump";
  currentSlide: number;
  stepOffset?: number;
  numberBlockingSlide?: number;
  offset?: number;
  onClickPrev: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClickNext: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

type Props = SliderCarousel | SliderJump;

export const SliderControls: FC<Props> = ({
  type,
  stepOffset,
  numberBlockingSlide = 0,
  offset,
  currentSlide,
  onClickPrev,
  onClickNext,
}) => {
  return (
    <div className={styles.direction}>
      <button
        onClick={onClickPrev}
        className={[
          styles.button,
          (type === "carousel" && offset === 0) ||
          (type === "jump" && currentSlide === 0)
            ? styles.disableButton
            : "",
        ].join(" ")}
      >
        <SvgSprite id='left' />
      </button>
      <button
        onClick={onClickNext}
        className={[
          styles.button,
          (type === "carousel" &&
            offset === -stepOffset * numberBlockingSlide) ||
          (type === "jump" && currentSlide === numberBlockingSlide)
            ? styles.disableButton
            : "",
        ].join(" ")}
      >
        <SvgSprite id='right' />
      </button>
    </div>
  );
};
