import { TypeIdIcons } from "../uikit/SvgSprite/SvgSprite";

export type TypeDataServicesItem = {
  id: string;
  icon: TypeIdIcons;
  title: string;
  bgHoverImage?: string;
  to: string;
};

export const dataServicesItems: TypeDataServicesItem[] = [
  {
    id: "servicesItem0",
    icon: "ic-construction",
    title: "Construction",
    bgHoverImage: "/servicesPage/hover/servicesConstruction.jpg",
    to: "",
  },
  {
    id: "servicesItem1",
    icon: "ic-plan",
    title: "Project Development",
    bgHoverImage: "/servicesPage/hover/servicesDevelopment.jpg",
    to: "",
  },
  {
    id: "servicesItem2",
    icon: "ic-pantone",
    title: "Interior Design",
    bgHoverImage: "/servicesPage/hover/servicesDesign.jpg",
    to: "/services/interior_design",
  },
  {
    id: "servicesItem3",
    icon: "ic-painting",
    title: "Repairs",
    bgHoverImage: "/servicesPage/hover/servicesRepairs.jpg",
    to: "",
  },
];
