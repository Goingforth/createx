import { FC, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  SliderFullImage,
  TypeSliderProps,
  SliderMiniImage,
  TypeSlideMiniImage,
} from "../index";
import { widthBlock, TypeDataGalleryProject } from "../../data";
import { ServerError } from "../../uikit";
import { getGalleryByName } from "../../api/getData";
import styles from "./SliderForGallery.module.scss";

interface TypeStateGallery {
  full: TypeDataGalleryProject[];
  mini: TypeDataGalleryProject[];
}

export const SliderForGallery: FC = () => {
  const location = useLocation().pathname;
  const [data, setData] = useState<TypeStateGallery>();
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    getGalleryByName(location, setData, setIsError);
  }, []);

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
    </div>
  );
};
