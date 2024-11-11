export type TypeCategoryPortfolio =
  | "Business Centers"
  | "Private houses"
  | "Apartments & flats"
  | "Stores & Malls";

export type TypePortfolioCard = {
  id: string;
  src: string;
  title: string;
  category: TypeCategoryPortfolio;
  to: string;
};

export const dataPortfolioCards: TypePortfolioCard[] = [
  {
    id: "portfolioCard0",
    src: "/portfolio/portfolioCubes.jpg",
    title: "Cubes Building",
    category: "Business Centers",
    to: "/work",
  },
  {
    id: "portfolioCard1",
    src: "/portfolio/portfolioCottage.jpg",
    title: "Modern Cottage",
    category: "Private houses",
    to: "/work/modern_cottage",
  },
  {
    id: "portfolioCard2",
    src: "/portfolio/portfolioBeachHouse.jpg",
    title: "Luxury Beach House",
    category: "Private houses",
    to: "/work",
  },
  {
    id: "portfolioCard3",
    src: "/portfolio/portfolioBedroom.jpg",
    title: "Modern Double Bedroom",
    category: "Apartments & flats",
    to: "/work",
  },
  {
    id: "portfolioCard4",
    src: "/portfolio/portfolioKidsBedroom.jpg",
    title: "Kids Bedroom With Decorations",
    category: "Apartments & flats",
    to: "/work",
  },
  {
    id: "portfolioCard5",
    src: "/portfolio/portfolioPencilBuild.jpg",
    title: "The Pencil Building",
    category: "Stores & Malls",
    to: "/work",
  },
  {
    id: "portfolioCard6",
    src: "/portfolio/portfolioFingerBuild.jpg",
    title: "Red Finger Building",
    category: "Business Centers",
    to: "/work",
  },
  {
    id: "portfolioCard7",
    src: "/portfolio/portfolioScandinavianStyle.jpg",
    title: "Scandinavian Style Interior",
    category: "Private houses",
    to: "/work",
  },
  {
    id: "portfolioCard8",
    src: "/portfolio/portfolioPaintedHouse.jpg",
    title: "Brown and Gray Painted House",
    category: "Private houses",
    to: "/work",
  },
];
