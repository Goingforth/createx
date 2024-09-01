export const navigation = [
  { name: "About Us", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Work", to: "/work" },
  { name: "News", to: "/news" },
  { name: "Contacts", to: "/contacts" },
];
export const connection = [
  {
    iconID: "iPhone",
    to: "tel:405555-0128",
    us: "Call us",
    data: "(405) 555-0128",
  },
  {
    iconID: "chat",
    to: "mailto:hello@createx.com",
    us: "Talk to us",
    data: "hello@createx.com",
  },
];
export const contantSliders = [
  {
    id: "imageSlider0",
    path: "/images/heroImages/heroImage1.jpg",
    title: "CREATE<span>X</span> CONSTRUCTION",
    content:
      "Cras ultrices leo vitae non viverra. Fringilla nisi quisque <br/>consequat, dignissim vitae proin ipsum sed. Pellentesque nec<br/> turpis purus eget pellentesque integer ipsum elementum felis. ",
  },
  {
    id: "imageSlider1",
    path: "/images/heroImages/heroImage2.jpg",
    title: "CREATE <span>NEW</span> IDEAS",
    content:
      "Lorem ipsum dolor sit beatae voluptates est laboriosam illo laborum, quasi cumque debitis facere inventore fugit at.<br/> Recusandae, excepturi? Nesciunt",
  },
  {
    id: "imageSlider2",
    path: "/images/heroImages/heroImage3.jpg",
    title: "MAKE <span>PLANS</span>",
    content:
      "Amet consectetur adipisicing elit. <br/>Consequatur rerum exercitationem iusto modi maxime",
  },
  {
    id: "imageSlider3",
    path: "/images/heroImages/heroImage4.jpg",
    title: "LOOK IN THE <span>FUTURE</span>",
    content:
      "Dolor sit amet consectetur adipisicing elit. Molestias reiciendis sint, provident laborum rem dignissimos beatae suscipit dolorum sapiente nihil nostrum, ea ratione voluptatibus aspernatur magnam deserunt? Eius, vitae quod?",
  },
];

export const coreValuesItems = [
  {
    id: "CoreValuesItem0",
    icon: "ic-like",
    title: "Quality",
    content:
      "Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit </br>nostrud aliquip sunt.",
  },
  {
    id: "CoreValuesItem1",
    icon: "ic-hand",
    title: "Safety",
    content:
      "Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.",
  },
  {
    id: "CoreValuesItem2",
    icon: "ic-slippers",
    title: "Comfort",
    content:
      "Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate</br> ullamco proident ea ad.",
  },
];
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

    pattern: /^[a-zA-Zа-яА-я]+ [a-zA-Zа-яА-Я]+$/,
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

    pattern: /^\+[0-9]{2}-[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
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
    pattern:
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
    // pattern: /[A-Za-zа-яА-Я0-9]{1,}/,
    pattern: /.+/,
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
