import { TypeIdIcons } from "../uikit/SvgSprite/SvgSprite";

type dataLinkFooter = { label?: string; name: string; to: string };

type dataBlockLinkFooter = {
  id: string;
  title: string;
  links: dataLinkFooter[];
};

export const dataBlockLinkFooter: dataBlockLinkFooter[] = [
  {
    id: "dataBlockLinkFooter0",
    title: "HEAD OFFICE",
    links: [
      {
        label: "Address:",
        name: "8502 Preston Rd. Inglewood, New York",
        to: "https://www.google.com/maps/search/8502+Preston+Rd.+Inglewood,+New+York/@36.9650333,-106.6300099,5z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D",
      },
      {
        label: "Call:",
        name: "(405) 555-0128",
        to: "tel:405555-0128",
      },
      {
        label: "Email:",
        name: "hello@createx.com",
        to: "mailto:hello@createx.com",
      },
    ],
  },
  {
    id: "dataBlockLinkFooter1",
    title: "WHO WE ARE",
    links: [
      { name: "About Us", to: "/about" },
      { name: "Available Positions", to: "/available_position" },
      { name: "Contacts", to: "/contacts" },
    ],
  },
  {
    id: "dataBlockLinkFooter2",
    title: "OUR EXPERIENCE",
    links: [
      { name: "Services", to: "/services" },
      { name: "Work", to: "/work" },
      { name: "News", to: "/news" },
    ],
  },
];

type dataSocialLink = {
  id: string;
  icon: TypeIdIcons;
  to: string;
};

export const dataSocialLinks: dataSocialLink[] = [
  { id: "socialLink0", icon: "whatsapp", to: "" },
  { id: "socialLink1", icon: "messanger", to: "" },
  { id: "socialLink2", icon: "facebook", to: "" },
  { id: "socialLink3", icon: "twitter", to: "" },
  { id: "socialLink4", icon: "youTube", to: "" },
];
