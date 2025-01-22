export type ColorsFigures = "warning" | "pink" | "info" | "success";

type HexColorsFigures = {
  color: ColorsFigures;
  hex: string;
};

export const hexColorsFigures: HexColorsFigures[] = [
  { color: "warning", hex: "F89828" },
  { color: "pink", hex: "F52F6E" },
  { color: "info", hex: "5A87FC" },
  { color: "success", hex: "03CEA4" },
];

export type TypeFigure = {
  id: string;
  color: ColorsFigures;
  pct: number;
  label: string;
  caption: string;
  a: number;
};
export const dataFigures: TypeFigure[] = [
  {
    id: "figure0",
    color: "warning",
    pct: 90,
    label: "90%",
    caption: "Totally satisfied clients",
    a: 0.3,
  },
  {
    id: "figure01",
    color: "pink",
    pct: (20 / 28) * 100,
    label: "20",
    caption: "Years of experience",
    a: 0.3,
  },
  {
    id: "figure02",
    color: "info",
    pct: (9452 / 12000) * 100,
    label: "9452",
    caption: "Working hours spent",
    a: 0.3,
  },
  {
    id: "figure03",
    color: "success",
    pct: 100,
    label: "100%",
    caption: "Succeeded projects",
    a: 0.3,
  },
];
