export type TypeCategories =
  | "All News"
  | "Company News"
  | "Innovation"
  | "Industry News"
  | "Expert Tips"
  | "Marketing";

type TypeCategoriesNews = {
  id: string;
  category: TypeCategories;
  isActive: boolean;
};

export const categoriesNews: TypeCategoriesNews[] = [
  { id: "category0", category: "All News", isActive: true },
  { id: "category1", category: "Company News", isActive: false },
  { id: "category2", category: "Innovation", isActive: false },
  { id: "category3", category: "Industry News", isActive: false },
  { id: "category4", category: "Expert Tips", isActive: false },
  { id: "category5", category: "Marketing", isActive: false },
];

export interface TypeNews {
  id: string;
  title: string;
  categories: TypeCategories;
  date: string;
  comments: number;
  text: string;
  image: string;
  imageFull: string;
}
