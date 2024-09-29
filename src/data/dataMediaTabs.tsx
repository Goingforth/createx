import { TypeIdIcons } from "../uikit/SvgSprite/SvgSprite";

interface MediaTabs {
  id: string;
  iconID: TypeIdIcons;
  title: string;
}
export const dataMediaTabs: MediaTabs[] = [
  {
    id: "mediaTab0",
    iconID: "ic-house",
    title: "All Projects",
  },
  {
    id: "mediaTab1",
    iconID: "ic-construction",
    title: "Construction",
  },
  {
    id: "mediaTab2",
    iconID: "ic-plan",
    title: "Project Development ",
  },
  {
    id: "mediaTab3",
    iconID: "ic-pantone",
    title: "Interior Design",
  },
  {
    id: "mediaTab4",
    iconID: "ic-painting",
    title: "Repairs",
  },
];
