import { FC, useState } from "react";

import { contantSliders } from "../../data/data";
import SvgSprite from "../SvgSprite/SvgSprite";

import styles from "./SliderHero.module.scss";

const SLIDE_WIDTH = 1920;
const SliderHero: FC = () => {
  const [offset, setOffset] = useState(0);
  const [index, setIndex] = useState(1);
  const sliderLength = contantSliders.length;

  const SlideLeft = () => {
    offset !== 0
      ? (setOffset(offset + SLIDE_WIDTH), setIndex(index - 1))
      : setOffset(0);
  };
  const SlideRight = () => {
    offset !== -((sliderLength - 1) * SLIDE_WIDTH)
      ? (setOffset(offset - SLIDE_WIDTH), setIndex(index + 1))
      : (setOffset(-(sliderLength - 1) * SLIDE_WIDTH), setIndex(sliderLength));
  };

  const counterSlider = new Array(sliderLength)
    .fill("0")
    .map((item, index) => item + (index + 1));

  return (
    <div className={styles.container}>
      <div className={styles.viewport}>
        <div
          className={styles.view}
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {contantSliders.map(({ id, path, title, content }) => {
            return (
              <div key={id} style={{ position: "relative" }}>
                <img
                  src={path}
                  width='1920px'
                  height='988px'
                  alt='Picture of the author'
                />
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
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={styles.buttonLeft}
        onClick={SlideLeft}
        style={{ opacity: index === 1 ? 0 : 1 }}
      >
        <SvgSprite id='prev-btn' width='48px' height='48px' />
      </div>

      <div
        className={styles.buttonRight}
        onClick={SlideRight}
        style={{ opacity: index === sliderLength ? 0 : 1 }}
      >
        <SvgSprite id='next-btn' width='48px' height='48px' />
      </div>

      <div className={styles.counter}>
        {counterSlider.map((item, i: number) => (
          <div
            key={`counter${i}`}
            className={[
              styles.counterItem,
              index === i + 1 ? styles.active : "",
            ].join(" ")}
            onClick={() => {
              setIndex(i + 1);
              setOffset(-i * SLIDE_WIDTH);
            }}
          >
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderHero;
