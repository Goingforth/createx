const BASE_URL_PHOTO = import.meta.env.VITE_BASE_URL_PHOTO;

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
export const dataNews: TypeNews[] = [
  {
    id: "news0",
    title: "How to Build Climate Change-Resilient Infrastructure",
    categories: "Industry News",
    date: "June 24, 2020",
    comments: 4,
    text: "Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...",
    image: `${BASE_URL_PHOTO}/news/news0.jpg`,
    imageFull: `${BASE_URL_PHOTO}/news/news0_full.jpg`,
  },
  {
    id: "news1",
    title: "How Construction Can Help Itself",
    categories: "Innovation",
    date: "June 12, 2020",
    comments: 0,
    text: "Porta habitant vitae quam interdum. Leo viverra non volutpat rhoncus placerat vitae scelerisque. Rhoncus augue faucibus maecenas lacus...",
    image: `${BASE_URL_PHOTO}/news/news1.jpg`,
    imageFull: `${BASE_URL_PHOTO}/news/news0_full.jpg`,
  },
  {
    id: "news2",
    title: "The Difference Between a Digger and an Excavator",
    categories: "Expert Tips",
    date: "May 16, 2020",
    comments: 0,
    text: "Cras est nisi purus velit facilisi vitae, dolor. Lorem scelerisque integer duis et nulla lobortis cursus. Viverra erat sollicitudin praesent viverra...",
    image: `${BASE_URL_PHOTO}/news/news2.jpg`,
    imageFull: `${BASE_URL_PHOTO}/news/news0_full.jpg`,
  },
  {
    id: "news3",
    title: "Building Construction Hand Tools",
    categories: "Expert Tips",
    date: "February 25, 2020",
    comments: 1,
    text: "Tellus quis aliquet volutpat nunc pulvinar donec sed sapien. Vitae elit id dolor, tristique massa. Fames lobortis orci rutrum bibendum integer...",
    image: `${BASE_URL_PHOTO}/news/news3.jpg`,
    imageFull: `${BASE_URL_PHOTO}/news/news0_full.jpg`,
  },
  {
    id: "news4",
    title: "Top 10 Construction Trends",
    categories: "Industry News",
    date: "January 14, 2020",
    comments: 0,
    text: "Dignissim sed enim, eleifend morbi condimentum. Congue id quis vulputate dignissim eget. Ac ullamcorper nunc habitasse enim interdum platea...",
    image: `${BASE_URL_PHOTO}/news/news4.jpg`,
    imageFull: `${BASE_URL_PHOTO}/news/news0_full.jpg`,
  },
  {
    id: "news5",
    title: "Types of Flooring Materials",
    categories: "Company News",
    date: "December 1, 2019",
    comments: 0,
    text: "Maecenas donec lacinia nunc, quam sit magnis mauris. Neque bibendum et mauris, aenean. Vel arcu amet in sem parturient  integer duis et nulla...",
    image: `${BASE_URL_PHOTO}/news/news5.jpg`,
    imageFull: `${BASE_URL_PHOTO}/news/news0_full.jpg`,
  },
];
