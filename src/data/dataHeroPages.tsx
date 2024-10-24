type TypePage =
  | "/services"
  | "/work"
  | "/about_us"
  | "/news"
  | "/contacts"
  | "/services/interior_design";

export type TypeHeroPage = {
  // page: string | undefined;
  page: TypePage;
  title: string;
  note: string;
  bgImage: string;
};

export const dataHeroPages: TypeHeroPage[] = [
  {
    page: "/services",
    title: "SERVICES",
    note: "If you are looking for a full-service construction company, look</br> to Createx Construction Bureau. We are doing our best</br> to be a partner for all of your construction needs.",
    bgImage: "/bgImageHeros/bgServices.jpg",
  },
  {
    page: "/work",
    title: "OUR WORK",
    note: "Our portfolio represents 20 years of construction experience</br> backed by a passion for perfect client service, quality and</br> innovations in consctuction industry.",
    bgImage: "/bgImageHeros/bgOurWork.jpg",
  },
  {
    page: "/about_us",
    title: "ABOUT US",
    note: "Createx Construction Bureau has been successfully operating</br> in the USA construction market since 2000. We are proud to offer</br> you quality construction and exemplary service.",
    bgImage: "/bgImageHeros/bgAboutUs.jpg",
  },
  {
    page: "/news",
    title: "NEWS",
    note: "Stay tuned with our news, expert tips and articles.",
    bgImage: "/bgImageHeros/bgNews.jpg",
  },
  {
    page: "/contacts",
    title: "CONTACTS",
    note: "Contact us for all your construction needs. We always welcome</br> any questions and comments.",
    bgImage: "/bgImageHeros/bgContacts.jpg",
  },
  {
    page: "/services/interior_design",
    title: "INTERIOR</br> DESIGN",
    note: "Dui augue nec mi mi. Ut ac lectus donec fames pellentesque.</br> Laoreet aenean vulputate elementum blandit amet.",
    bgImage: "/bgImageHeros/bgInterior_design.jpg",
  },
];
