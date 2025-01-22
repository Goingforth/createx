export type TypeSliderFullImage = {
  id: string;
  image: string;
  title?: string;
  content?: string;
};

export type TypeStateSlider = {
  offset: number;
  index: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};
