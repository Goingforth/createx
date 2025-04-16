import { FC, useState } from "react";
import { widthBlock } from "../../data";
import {
  SliderFullImage,
  TypeSliderProps,
  CounterSlider,
  TypeCounterSlider,
} from "../index";
import { ServerError, LoadingWait } from "../../uikit";
import { useData } from "../../api/index";

const SliderHero: FC = () => {
  const [offset, setOffset] = useState(0);
  const [index, setIndex] = useState(1);
  const { data, isLoading, isError } = useData("/slider_hero");

  const sliderProps: TypeSliderProps = {
    widthSlide: widthBlock.widthApp,
    heightSlide: 988,
    dataArray: data ? data : [],
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
    dataLength: data ? data.length : 0,
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
      {!isError && !isLoading && <SliderFullImage {...sliderProps} />}
      {isError && <ServerError />}
      {isLoading && <LoadingWait />}
      <CounterSlider {...counterProps} />
    </>
  );
};

export default SliderHero;
