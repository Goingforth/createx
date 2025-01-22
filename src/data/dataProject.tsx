import { TypeNamePage } from "./dataHeroPages";
export type TypeDataProject = {
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
