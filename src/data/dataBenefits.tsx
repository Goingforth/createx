import { TypeIdIcons } from "../uikit/SvgSprite/SvgSprite";
interface TypeDataBenefits {
  id: string;
  icon: TypeIdIcons;
  title: string;
  content: string;
}
export const dataBenefits: TypeDataBenefits[] = [
  {
    id: "benefit01",
    icon: "ic-contract",
    title: "Fixed Terms & Cost",
    content:
      "Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt..",
  },
  {
    id: "benefit02",
    icon: "ic-helmet",
    title: "Qualified Workers",
    content:
      "Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.",
  },
  {
    id: "benefit03",
    icon: "ic-camera",
    title: "Supervision & Control ",
    content:
      "Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.",
  },
];
