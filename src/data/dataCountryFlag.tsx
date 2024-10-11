import { TypeIdIconsCountry } from "../uikit/SvgSpriteCountry/SvgSpriteCountry";

export type TypeCountryFlag = {
  id: string;
  icon: TypeIdIconsCountry;
  left: number;
  top: number;
};

export const dataCountryFlag: TypeCountryFlag[] = [
  {
    id: "countryFlag0",
    icon: "canada",
    left: 165,
    top: 113,
  },
  {
    id: "countryFlag1",
    icon: "usa",
    left: 225,
    top: 208,
  },
  {
    id: "countryFlag2",
    icon: "germany",
    left: 602,
    top: 157,
  },
  {
    id: "countryFlag3",
    icon: "ukraine",
    left: 668,
    top: 165,
  },
  {
    id: "countryFlag4",
    icon: "china",
    left: 910,
    top: 229,
  },
  {
    id: "countryFlag5",
    icon: "australia",
    left: 1009,
    top: 419,
  },
];
