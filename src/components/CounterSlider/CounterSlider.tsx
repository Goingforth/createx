import { FC } from "react";
import { TypeStateSlider } from "../../data";
import styles from "./CounterSlider.module.scss";

export type TypeCounterSlider = {
  dataLength: number;
  widthSlide: number;
  state: TypeStateSlider;
};

const CounterSlider: FC<TypeCounterSlider> = ({ ...props }) => {
  const { dataLength, state, widthSlide } = props;
  const { setOffset, setIndex, index } = state;
  const counterSlider = new Array(dataLength)
    .fill("0")
    .map((item, index) => item + (index + 1));
  return (
    <div className={styles.counter}>
      {counterSlider.map((item, i: number) => (
        <div
          key={`counter${i}`}
          className={[
            styles.slideWrapper,
            index === i + 1 ? styles.active : "",
          ].join(" ")}
          onClick={() => {
            setIndex(i + 1);
            setOffset(-i * widthSlide);
          }}
        >
          <h3>{item}</h3>
        </div>
      ))}
    </div>
  );
};

export default CounterSlider;
