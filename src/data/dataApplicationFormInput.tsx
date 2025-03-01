import { retPattern, TypeDataSelect } from "../data";

export type TypeDataFormInput = {
  id: string;
  label?: string;
  placeholder?: string;
  name: string;
  type?: string;
  value?: string;
  size?: "large" | "default" | "small" | "post";
  defaultValue?: boolean;
  messages?: {
    focus: string;
    input: string;
    valid: string;
    noValid: string;
  };
  pattern?: RegExp | undefined;
  dataSelect?: TypeDataSelect[];
};

export const dataApplicationFormInput: TypeDataFormInput[] = [
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

    pattern: retPattern("name"),
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
    pattern: retPattern("phone"),
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
    pattern: retPattern("email"),
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
    pattern: retPattern("textarea"),
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
