//type TypeOption = "New York, USA" | "New Jersey, USA" | "San Francisco, USA";

export type TypeDataSelect = {
  id: string;
  option: string;
};

export const dataLocations: TypeDataSelect[] = [
  {
    id: "option0",
    option: "New Jersey, USA",
  },
  {
    id: "option1",
    option: "New York, USA",
  },
  {
    id: "option2",
    option: "San Francisco, USA",
  },
];
