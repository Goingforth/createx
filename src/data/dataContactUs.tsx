import {
  TypeDataFormInput,
  retPattern,
  TypeDataSelect,
  dataLocations,
} from "./index";

const dataInterest: TypeDataSelect[] = [
  {
    id: "optionInterest0",
    option: "Interior Design",
  },
  {
    id: "optionInterest1",
    option: "Construction",
  },
  {
    id: "optionInterest2",
    option: "Project Development, USA",
  },
  {
    id: "optionInterest3",
    option: "Repairs",
  },
];
export const dataContactUs: TypeDataFormInput[] = [
  {
    id: "inputContactUs0",
    label: "Name*",
    placeholder: "Your name",
    name: "name",
    messages: {
      focus: "enter name",
      input: "name in format firstName lastName ",
      valid: "Looks good!",
      noValid: "Please provide a valid input.",
    },

    pattern: retPattern("name"),
  },
  {
    id: "inputContactUs1",
    label: "I am interested in",
    // placeholder: "Choose your location",
    name: "interest",
    type: "select",
    dataSelect: dataInterest,
  },
  {
    id: "inputContactUs2",
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
    pattern: retPattern("phone"),
  },
  {
    id: "inputContactUs3",
    label: "Location*",
    // placeholder: "Choose your location",
    name: "location",
    type: "select",
    dataSelect: dataLocations,
  },
  {
    id: "inputContactUs4",
    label: "Email*",
    placeholder: "Your working email",
    name: "email",
    type: "email",
    messages: {
      focus: "enter email",
      input: "email in format email",
      valid: "Looks good!",
      noValid: "Please provide a valid input.",
    },
    pattern: retPattern("email"),
  },
  {
    id: "inputContactUs5",
    label: "Preferred contact method",
    placeholder: "Your working email",
    name: "checkbox",
    type: "checkbox",
    // messages: {
    //   focus: "enter email",
    //   input: "email in format email",
    //   valid: "Looks good!",
    //   noValid: "Please provide a valid input.",
    // },
    // pattern: retPattern("email"),
  },
  {
    id: "inputContactUs6",
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
    pattern: retPattern("textarea"),
  },
  {
    id: "inputContactUs7",
    // label: "Preferred contact method",
    placeholder:
      "I agree to receive communications from Createx Construction Bureau.",
    name: "checkbox",
    type: "checkbox",
    // messages: {
    //   focus: "enter email",
    //   input: "email in format email",
    //   valid: "Looks good!",
    //   noValid: "Please provide a valid input.",
    // },
    // pattern: retPattern("email"),
  },
];
