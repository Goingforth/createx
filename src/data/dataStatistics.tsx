import { TypeIdIcons } from "../uikit/SvgSprite/SvgSprite";
export type TypeStatistics = {
  id: string;
  icon: TypeIdIcons;
  rate: string;
  info: string;
};
export const dataStatistics: TypeStatistics[] = [
  {
    id: "statistic0",
    icon: "ic-like",
    rate: "60%",
    info: "Clients on the recommendation of friends",
  },
  {
    id: "statistic1",
    icon: "ic-painting",
    rate: "2400+",
    info: "Apartments renovated",
  },
  {
    id: "statistic2",
    icon: "ic-helmet",
    rate: "670",
    info: "Qualified specialists",
  },
  {
    id: "statistic3",
    icon: "ic-pantone",
    rate: "150000+m2",
    info: "Finishing work was carried out",
  },
];
