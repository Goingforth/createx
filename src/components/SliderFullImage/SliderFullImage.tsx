import { FC } from "react";
import { SvgSprite, ImgCloudinary } from "../../uikit/";
import { TypeSliderFullImage, TypeStateSlider } from "../../data";

import styles from "./SliderFullImage.module.scss";

export type TypeSliderProps = {
  widthSlide: number;
  heightSlide: number;
  dataArray: TypeSliderFullImage[];
  btnPosition: {
    top: number;
    left: number;
    right: number;
  };
  state: TypeStateSlider;
};

const SliderFullImage: FC<TypeSliderProps> = ({
  widthSlide,
  heightSlide,
  dataArray,
  btnPosition,
  state,
}) => {
  const sliderLength = dataArray.length;
  const { top, left, right } = btnPosition;
  const { offset, setOffset, setIndex, index } = state;

  const SlideLeft = () => {
    offset !== 0
      ? (setOffset(offset + widthSlide), setIndex(index - 1))
      : setOffset(0);
  };
  const SlideRight = () => {
    offset !== -((sliderLength - 1) * widthSlide)
      ? (setOffset(offset - widthSlide), setIndex(index + 1))
      : (setOffset(-(sliderLength - 1) * widthSlide), setIndex(sliderLength));
  };

  return (
    <div className={styles.container}>
      <div
        style={{
          position: "relative",
          width: widthSlide,
          height: heightSlide,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            width: widthSlide,
            height: heightSlide,
            transition: "translate",
            transitionProperty: "transform",
            transitionDuration: "500ms",
            transitionTimingFunction: "ease-in-out",

            transform: `translateX(${offset}px)`,
          }}
        >
          {dataArray.map(({ id, image, title, content }) => {
            return (
              <div key={id} style={{ position: "relative" }}>
                <ImgCloudinary image={image} />
                {title !== undefined && content !== undefined && (
                  <div className={styles.info}>
                    <div
                      className={[styles.display1, styles.title].join(" ")}
                      dangerouslySetInnerHTML={{
                        __html: `<p>${title}</p>`,
                      }}
                    />
                    <div
                      className={styles.lead_regular}
                      dangerouslySetInnerHTML={{
                        __html: `<p>${content}</p>`,
                      }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div
          className={styles.buttonLeft}
          onClick={SlideLeft}
          style={{
            position: "absolute",
            cursor: "pointer",
            left: left,
            top: top,

            fill: "$semiWhite",
            opacity: index === 1 ? 0 : 1,
          }}
        >
          <SvgSprite id='prev-btn' width='48px' height='48px' />
        </div>

        <div
          className={styles.buttonRight}
          onClick={SlideRight}
          style={{
            position: "absolute",
            cursor: "pointer",
            right: right,
            top: top,
            fill: "$semiWhite",
            opacity: index === sliderLength ? 0 : 1,
          }}
        >
          <SvgSprite id='next-btn' width='48px' height='48px' />
        </div>
      </div>
    </div>
  );
};

export default SliderFullImage;
