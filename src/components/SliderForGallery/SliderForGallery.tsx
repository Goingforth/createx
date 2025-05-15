import { FC, useState } from "react";
import { useLocation } from "react-router-dom";
import SliderFullImage from "../SliderFullImage/SliderFullImage";
import type { TypeSliderProps } from "../SliderFullImage/SliderFullImage";
import SliderMiniImage from "../SliderMinIImage/SliderMiniImage";
import type { TypeSlideMiniImage } from "../SliderMinIImage/SliderMiniImage";

import { widthBlock } from "../../data";
import { ServerError, LoadingWait } from "../../uikit";
import { useGalleryByName } from "../../api/index";
import styles from "./SliderForGallery.module.scss";

export const SliderForGallery: FC = () => {
  const location = useLocation().pathname;
  const { data, isLoading, isError } = useGalleryByName(location);

  const [offset, setOffset] = useState(0);
  const [index, setIndex] = useState(1);
  const sliderProps: TypeSliderProps = {
    widthSlide: widthBlock.widthSection,
    heightSlide: 500,
    dataArray: data ? data.full : [],
    btnPosition: {
      top: 226,
      left: 32,
      right: 32,
    },
    state: {
      offset: offset,
      index: index,
      setOffset: setOffset,
      setIndex: setIndex,
    },
  };
  const sliderMiniProps: TypeSlideMiniImage = {
    widthSlide: widthBlock.widthSection,
    dataArray: data ? data.mini : [],
    state: {
      offset: offset,
      index: index,
      setOffset: setOffset,
      setIndex: setIndex,
    },
  };

  return (
    <div className={styles.gallery}>
      {!isError ? (
        <>
          <SliderFullImage {...sliderProps} />
          <SliderMiniImage {...sliderMiniProps} />
        </>
      ) : (
        <ServerError />
      )}
      {isLoading && <LoadingWait />}
    </div>
  );
};
