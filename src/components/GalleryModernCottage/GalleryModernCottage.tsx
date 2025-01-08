import { FC, useState } from "react";
import {
  SliderFullImage,
  TypeSliderProps,
  SliderMiniImage,
  TypeSlideMiniImage,
} from "../index";
import { dataGalleryMini } from "../../data";
import { widthBlock, dataGalleryModernCottage } from "../../data";
import styles from "./GalleryModernCottage.module.scss";

const VITE_BASE_URL_PHOTO = import.meta.env.VITE_BASE_URL_PHOTO;

const GalleryModernCottage: FC = () => {
  const [offset, setOffset] = useState(0);
  const [index, setIndex] = useState(1);
  const sliderProps: TypeSliderProps = {
    widthSlide: widthBlock.widthSection,
    heightSlide: 500,
    dataArray: dataGalleryModernCottage,
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
    dataArray: dataGalleryMini,
    state: {
      offset: offset,
      index: index,
      setOffset: setOffset,
      setIndex: setIndex,
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerBlock}>
        <div
          className={styles.bgWrapper}
          style={{
            backgroundImage: `url(${VITE_BASE_URL_PHOTO}//bgImageGallery.jpg)`,
          }}
        />

        <div className={styles.gallery}>
          <SliderFullImage {...sliderProps} />
          <SliderMiniImage {...sliderMiniProps} />
        </div>
      </div>
    </div>
  );
};

export default GalleryModernCottage;
