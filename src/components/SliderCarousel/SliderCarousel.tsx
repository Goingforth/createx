import { FC } from "react";
import styles from "./SliderCarousel.module.scss";

type Props = {
  offset: number;
  dataArrayObjects: any;
  CardItem: FC;
};

const SliderCarousel: FC<Props> = ({ offset, dataArrayObjects, CardItem }) => {
  return (
    <div className={styles.window}>
      <div
        className={styles.wrapper}
        style={{
          translate: offset,
          transition: "translate 1s ease-in-out",
        }}
      >
        {dataArrayObjects.map((rest) => (
          <CardItem {...rest} />
        ))}
      </div>
    </div>
  );
};

export default SliderCarousel;
