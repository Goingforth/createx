import sprite from "/sprite.svg";
type IconProp = {
  id: string;
  width?: string;
  hight?: string;
};

export const Icon = ({ id, width, hight }: IconProp) => {
  return (
    <svg width={width} height={hight}>
      <svg>
        <use xlinkHref={`${sprite}#${id}`} />
      </svg>
    </svg>
  );
};
