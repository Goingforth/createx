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
