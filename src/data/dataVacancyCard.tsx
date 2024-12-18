export type TypeDataVacancyCard = {
  id: string;
  meta: {
    location: string;
    type: string;
  };
  position: string;
};

export const dataVacancyCards: TypeDataVacancyCard[] = [
  {
    id: "vacancyCard0",
    meta: {
      location: "New York",
      type: "Full Time",
    },
    position: "Heavy Equipment Operator",
  },
  {
    id: "vacancyCard1",
    meta: {
      location: "San Francisco",
      type: "Full Time",
    },
    position: "Financial Compliance Analyst",
  },
  {
    id: "vacancyCard2",
    meta: {
      location: "New Jersey",
      type: "Full Time",
    },
    position: "Project Manager - Buildings",
  },
  {
    id: "vacancyCard3",
    meta: {
      location: "New York",
      type: "Part Time",
    },
    position: "Environment Specialistr",
  },
  {
    id: "vacancyCard4",
    meta: {
      location: "New York",
      type: "Full Time",
    },
    position: "Accountant",
  },
];
