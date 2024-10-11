import { TypeIdIcons } from "../uikit/SvgSprite/SvgSprite";

type TypeCoreValuesItem = {
  id: string;
  icon: TypeIdIcons;
  title: string;
  content: string;
};

export const dataCoreValuesItems: TypeCoreValuesItem[] = [
  {
    id: "CoreValuesItem0",
    icon: "ic-like",
    title: "Quality",
    content:
      "Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit </br>nostrud aliquip sunt.",
  },
  {
    id: "CoreValuesItem1",
    icon: "ic-hand",
    title: "Safety",
    content:
      "Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.",
  },
  {
    id: "CoreValuesItem2",
    icon: "ic-slippers",
    title: "Comfort",
    content:
      "Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate</br> ullamco proident ea ad.",
  },
];
