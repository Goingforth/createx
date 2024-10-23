//
export const patterns = {
  name: /^[a-zA-Zа-яА-я]+ [a-zA-Zа-яА-Я]+$/,
  phone: /^\+[0-9]{2}-[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
  email:
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  textarea: /.+/,
};

export const servicesItems = [
  {
    id: "servicesItem0",
    icon: "ic-construction",
    title: "Construction",
  },
  {
    id: "servicesItem1",
    icon: "ic-plan",
    title: "Project Development",
  },
  {
    id: "servicesItem2",
    icon: "ic-pantone",
    title: "Interior Design",
  },
  {
    id: "servicesItem3",
    icon: "ic-painting",
    title: "Repairs",
  },
];

export const ApplicationFormInput = [
  {
    id: "ApplicationFormInput0",
    label: "Name*",
    placeholder: "Your name",
    name: "name",
    messages: {
      focus: "enter name",
      input: "name in format firstName lastName ",
      valid: "Looks good!",
      noValid: "Please provide a valid input.",
    },

    pattern: patterns["name"],
  },
  {
    id: "ApplicationFormInput1",
    label: "Phone*",
    placeholder: "Your phone number",
    name: "phone",
    type: "tel",
    messages: {
      focus: "enter phone",
      input: "phone in format +XX-XXX-XXX-XXXX",
      valid: "Looks good!",
      noValid: "Please provide a valid input.",
    },
    pattern: patterns["phone"],
  },
  {
    id: "ApplicationFormInput2",
    label: "Email",
    placeholder: "Your working email",
    name: "email",
    type: "email",
    messages: {
      focus: "enter email",
      input: "email in format email",
      valid: "Looks good!",
      noValid: "Please provide a valid input.",
    },
    pattern: patterns["email"],
  },
  {
    id: "ApplicationFormInput3",
    label: "Message*",
    placeholder: "Your message",
    name: "message",
    type: "textarea",
    messages: {
      focus: "enter message",
      input: "message noformat",
      valid: "Looks good!",
      noValid: "Please provide a valid input.",
    },
    pattern: patterns["textarea"],
    // pattern: /[A-Za-zа-яА-Я0-9]{1,}/,
  },
  {
    id: "ApplicationFormInput4",
    value:
      "I agree to receive communications from Createx <br/>Construction Bureau.*",
    name: "checked",
    type: "checkbox",
    defaultValue: false,
  },
];

export const dataBlockLinkFooter = [
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

export const socialLinks = [
  { id: "socialLink0", name: "whatsapp", to: "" },
  { id: "socialLink1", name: "messanger", to: "" },
  { id: "socialLink2", name: "facebook", to: "" },
  { id: "socialLink3", name: "twitter", to: "" },
  { id: "socialLink4", name: "youTube", to: "" },
];
