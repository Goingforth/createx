export type TypeCategoryPortfolio =
  | "Business Centers"
  | "Private houses"
  | "Apartments & flats"
  | "Stores & Malls";

export type TypePortfolioCard = {
  id: string;
  image: string;
  title: string;
  category: TypeCategoryPortfolio;
  to: string;
};

export const dataPortfolioCards: TypePortfolioCard[] = [
  {
    id: "portfolioCard0",
    image: "/portfolio/portfolioCubes.jpg",
    title: "Cubes Building",
    category: "Business Centers",
    to: "/work",
  },
  {
    id: "portfolioCard1",
    image: "/portfolio/portfolioCottage.jpg",
    title: "Modern Cottage",
    category: "Private houses",
    to: "/work/modern_cottage",
  },
  {
    id: "portfolioCard2",
    image: "/portfolio/portfolioBeachHouse.jpg",
    title: "Luxury Beach House",
    category: "Private houses",
    to: "/work",
  },
  {
    id: "portfolioCard3",
    image: "/portfolio/portfolioBedroom.jpg",
    title: "Modern Double Bedroom",
    category: "Apartments & flats",
    to: "/work",
  },
  {
    id: "portfolioCard4",
    image: "/portfolio/portfolioKidsBedroom.jpg",
    title: "Kids Bedroom With Decorations",
    category: "Apartments & flats",
    to: "/work",
  },
  {
    id: "portfolioCard5",
    image: "/portfolio/portfolioPencilBuild.jpg",
    title: "The Pencil Building",
    category: "Stores & Malls",
    to: "/work",
  },
  {
    id: "portfolioCard6",
    image: "/portfolio/portfolioFingerBuild.jpg",
    title: "Red Finger Building",
    category: "Business Centers",
    to: "/work",
  },
  {
    id: "portfolioCard7",
    image: "/portfolio/portfolioScandinavianStyle.jpg",
    title: "Scandinavian Style Interior",
    category: "Private houses",
    to: "/work",
  },
  {
    id: "portfolioCard8",
    image: "/portfolio/portfolioPaintedHouse.jpg",
    title: "Brown and Gray Painted House",
    category: "Private houses",
    to: "/work",
  },
];
