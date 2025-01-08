import { FC } from "react";
import { TypeDataGalleryProject, TypeStateSlider } from "../../data";
import { ImgCloudinary } from "../../uikit";
import styles from "./SliderMiniImage.module.scss";

export type TypeSlideMiniImage = {
  dataArray: TypeDataGalleryProject[];

  widthSlide: number;
  state: TypeStateSlider;
};

const SliderMiniImage: FC<TypeSlideMiniImage> = ({ ...props }) => {
  const { dataArray, widthSlide, state } = props;
  const { setOffset, setIndex, index } = state;
  return (
    <div className={styles.container}>
      {dataArray.map((item, i: number) => (
        <div
          key={item.id}
          className={[
            styles.slideWrapper,
            index === i + 1 ? styles.active : "",
          ].join(" ")}
          onClick={() => {
            setIndex(i + 1);
            setOffset(-i * widthSlide);
          }}
        >
          <ImgCloudinary image={item.image} />
        </div>
      ))}
    </div>
  );
};

export default SliderMiniImage;

// const CounterSlider: FC<TypeCounterSlider> = ({ ...props }) => {
//   const { dataLength, state, widthSlide } = props;
//   const { setOffset, setIndex, index } = state;
//   const counterSlider = new Array(dataLength)
//     .fill("0")
//     .map((item, index) => item + (index + 1));
//   return (
//     <div className={styles.counter}>
//       {counterSlider.map((item, i: number) => (
//         <div
//           key={`counter${i}`}
//           className={[
//             styles.slideWrapper,
//             index === i + 1 ? styles.active : "",
//           ].join(" ")}
//           onClick={() => {
//             setIndex(i + 1);
//             setOffset(-i * widthSlide);
//           }}
//         >
//           <h3>{item}</h3>
//         </div>
//       ))}
//     </div>
//   );
// };
