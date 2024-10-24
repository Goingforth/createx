import { TypeIdIcons } from "../uikit/SvgSprite/SvgSprite";

export type TypeDataServicesItem = {
  id: string;
  icon: TypeIdIcons;
  title: string;
};

export const dataServicesItems: TypeDataServicesItem[] = [
  {
    id: "servicesItem0",
    icon: "ic-construction",
    title: "Construction",
  },
  {
    id: "servicesItem1",
    icon: "ic-plan",
    title: "Project Development",
  },
  {
    id: "servicesItem2",
    icon: "ic-pantone",
    title: "Interior Design",
  },
  {
    id: "servicesItem3",
    icon: "ic-painting",
    title: "Repairs",
  },
];
