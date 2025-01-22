import { TypeNamePage } from "./dataHeroPages";
type TypeDataProject = {
  id: string;
  page: TypeNamePage;
  title: string;
  note: string;
  info: {
    location: string;
    client: string;
    architect: string;
    size: string;
    value: string;
    completed: string;
  };
};

export const dataProject: TypeDataProject[] = [
  {
    id: "project0",
    page: "/work/modern_cottage",
    title: "Project goal",
    note: "Build a private house 840 sq. feet with a large living room, three bedrooms, two bathrooms, a terrace, a pool and a garage for two cars. </br></br> Modern design and care for each family member to feel as comfortable as possible in the new home.",
    info: {
      location: "2464 Royal Ln. Mesa, New Jersey",
      client: "Darlene Robertson",
      architect: "HIK Architecture",
      size: "840 sq. feet",
      value: "$2 million",
      completed: "May 2020",
    },
  },
];
