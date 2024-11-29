import { TypeDataFormInput, retPattern } from "./index";

export const dataModalSubscribe: TypeDataFormInput[] = [
  {
    id: "modalSubscribe0",
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
    id: "modalSubscribe1",
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
];

export const dataModalSendCV: TypeDataFormInput[] = [
  {
    id: "modalSendCV0",
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
    id: "modalSendCV1",
    label: "Location*",
    placeholder: "Choose your location",
    name: "location",
    type: "select",
    // messages: {
    //   focus: "enter email",
    //   input: "email in format email",
    //   valid: "Looks good!",
    //   noValid: "Please provide a valid input.",
    // },
    //  pattern: retPattern("email"),
  },
  {
    id: "modalSendCV2",
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
    id: "modalSendCV3",
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
    id: "modalSendCV4",
    label: "Сovering letter",
    placeholder: "Your covering letter",
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
];
