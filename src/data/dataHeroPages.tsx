export type TypeNamePage =
  | "/services"
  | "/services/interior_design"
  | "/work"
  | "/work/modern_cottage"
  | "/about_us"
  | "/news"
  | "/contacts"
  | "/about_us/available_positions";

type TypeHero = "heroBasic" | "heroNoImg";

export type TypeHeroPage = {
  page: TypeNamePage;
  typeHero: TypeHero;
  title: string;
  note?: string;
  bgImage?: string;
};

export const dataHeroPages: TypeHeroPage[] = [
  {
    page: "/services",
    typeHero: "heroBasic",
    title: "SERVICES",
    note: "If you are looking for a full-service construction company, look</br> to Createx Construction Bureau. We are doing our best</br> to be a partner for all of your construction needs.",
    bgImage: "bgImagesHeros/bgServices.jpg",
  },
  {
    page: "/work",
    typeHero: "heroBasic",
    title: "OUR WORK",
    note: "Our portfolio represents 20 years of construction experience</br> backed by a passion for perfect client service, quality and</br> innovations in consctuction industry.",
    bgImage: "bgImagesHeros/bgOurWork.jpg",
  },
  {
    page: "/about_us",
    typeHero: "heroBasic",
    title: "ABOUT US",
    note: "Createx Construction Bureau has been successfully operating</br> in the USA construction market since 2000. We are proud to offer</br> you quality construction and exemplary service.",
    bgImage: "bgImagesHeros/bgAboutUs.jpg",
  },
  {
    page: "/news",
    typeHero: "heroBasic",
    title: "NEWS",
    note: "Stay tuned with our news, expert tips and articles.",
    bgImage: "bgImagesHeros/bgNews.jpg",
  },
  {
    page: "/contacts",
    typeHero: "heroBasic",
    title: "CONTACTS",
    note: "Contact us for all your construction needs. We always welcome</br> any questions and comments.",
    bgImage: "bgImagesHeros/bgContacts.jpg",
  },
  {
    page: "/services/interior_design",
    typeHero: "heroBasic",
    title: "INTERIOR</br> DESIGN",
    note: "Dui augue nec mi mi. Ut ac lectus donec fames pellentesque.</br> Laoreet aenean vulputate elementum blandit amet.",
    bgImage: "bgImagesHeros/bgInterior_design.jpg",
  },
  {
    page: "/work/modern_cottage",
    typeHero: "heroNoImg",
    title: "Modern Cottage",
  },
  {
    page: "/about_us/available_positions",
    typeHero: "heroBasic",
    title: "AVAILABLE</br> POSITIONS",
    note: "Build your career with Createx Construction Bureau.",
    bgImage: "bgImagesHeros/bgAvailPositions.jpg",
  },
];
