interface TypeMeta {
  location: string;
  type: string;
}

export type TypeDataVacancyCard = {
  id: string;
  meta: TypeMeta;
  position: string;
};
