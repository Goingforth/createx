import { retPattern, TypeDataFormInput } from "./index";

export const dataRequestForm: TypeDataFormInput[] = [
  {
    id: "requestFormInput0",
    name: "name",
    label: "Name",
    placeholder: "Your name",
    pattern: retPattern("name"),
  },
  {
    id: "requestFormInput1",
    name: "phone",
    label: "Phone",
    placeholder: "Your phone",
    pattern: retPattern("phone"),
  },
  {
    id: "requestFormInput2",
    name: "message",
    label: "Message",
    placeholder: "Your message",
    pattern: retPattern("textarea"),
  },
  {
    id: "requestFormInput3",
    name: "btn",
    type: "btn",
    placeholder: "send",
  },
];
