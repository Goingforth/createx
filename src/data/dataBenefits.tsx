import { TypeIdIcons } from "../uikit";

export interface TypeDataBenefits {
  id: string;
  icon: TypeIdIcons;
  title: string;
  content: string;
}
export interface TypeBenefits {
  title: string;
  subTitle: string;
  theme: "light" | "basic";
  dataArray: TypeDataBenefits[];
}
