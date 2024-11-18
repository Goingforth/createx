import { FC, useState } from "react";
import { dataSlidersHero, widthBlock } from "../../data";
import {
  SliderFullImage,
  TypeSliderProps,
  CounterSlider,
  TypeCounterSlider,
} from "../index";

const SliderHero: FC = () => {
  const [offset, setOffset] = useState(0);
  const [index, setIndex] = useState(1);
  const sliderProps: TypeSliderProps = {
    widthSlide: widthBlock.widthApp,
    heightSlide: 988,
    dataArray: dataSlidersHero,
    btnPosition: {
      top: 470,
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

  const counterProps: TypeCounterSlider = {
    dataLength: dataSlidersHero.length,
    widthSlide: widthBlock.widthApp,
    state: {
      offset: offset,
      index: index,
      setOffset: setOffset,
      setIndex: setIndex,
    },
  };

  return (
    <>
      <SliderFullImage {...sliderProps} />
      <CounterSlider {...counterProps} />
    </>
  );
};

export default SliderHero;
