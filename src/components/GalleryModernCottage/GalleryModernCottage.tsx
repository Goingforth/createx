import { FC } from "react";
import { SliderForGallery } from "../SliderForGallery/SliderForGallery";
import styles from "./GalleryModernCottage.module.scss";

const VITE_BASE_URL_PHOTO = import.meta.env.VITE_BASE_URL_PHOTO;

const GalleryModernCottage: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerBlock}>
        <div
          className={styles.bgWrapper}
          style={{
            backgroundImage: `url(${VITE_BASE_URL_PHOTO}//bgImageGallery.jpg)`,
          }}
        />

        <SliderForGallery />
      </div>
    </div>
  );
};

export default GalleryModernCottage;
