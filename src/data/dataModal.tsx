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
