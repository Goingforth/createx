import { FC, useState, useEffect } from "react";
import { TypeSliderFullImage, widthBlock } from "../../data";
import {
  SliderFullImage,
  TypeSliderProps,
  CounterSlider,
  TypeCounterSlider,
} from "../index";
import { ServerError, LoadingWait } from "../../uikit";
import { getData } from "../../api/getData";

const SliderHero: FC = () => {
  const [offset, setOffset] = useState(0);
  const [index, setIndex] = useState(1);

  const [data, setData] = useState<Array<TypeSliderFullImage>>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getData("/slider_hero", setData, setIsError, setIsLoading);
  }, []);

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
  console.log("isError :", isError);
  console.log("isLoading :", !isLoading);

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
