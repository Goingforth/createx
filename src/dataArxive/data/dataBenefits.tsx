import { TypeIdIcons } from "../uikit/SvgSprite/SvgSprite";
import { TypeBenefits } from "../components";
export interface TypeDataBenefits {
  id: string;
  icon: TypeIdIcons;
  title: string;
  content: string;
}

const dataBenefitsDesign: TypeDataBenefits[] = [
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
const dataBenefitsPositions: TypeDataBenefits[] = [
  {
    id: "benefit04",
    icon: "ic-brain",
    title: "Training",
    content:
      "Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.",
  },
  {
    id: "benefit05",
    icon: "ic-success",
    title: "Professional Growth",
    content:
      "Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.",
  },
  {
    id: "benefit06",
    icon: "ic-budget",
    title: "Growing Salary",
    content:
      "Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.",
  },
];

export const dataBenefitsInteriorDesign: TypeBenefits = {
  title: "Our benefits",
  subTitle:
    "Our mission is to set the highest standards for construction sphere.",
  theme: "light",
  dataArray: dataBenefitsDesign,
};
export const dataBenefitsAvailablePositions: TypeBenefits = {
  title: "Employee benefits",
  subTitle: "There’s always room for talent.",

  dataArray: dataBenefitsPositions,
};
