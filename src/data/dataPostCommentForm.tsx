import { retPattern } from "./dataPatterns";
import type { TypeDataFormInput } from "./dataApplicationFormInput";

export const dataPostCommentForm: TypeDataFormInput[] = [
  {
    id: "inputPostComment0",
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
    size: "large",
  },
  {
    id: "inputPostComment1",
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
    size: "large",
  },
  {
    id: "inputPostComment2",
    label: "Your comment*",
    placeholder: "Type comment here",
    name: "comment",
    type: "textarea",
    messages: {
      focus: "enter comment",
      input: "comment noformat",
      valid: "Looks good!",
      noValid: "Please provide a valid input.",
    },
    pattern: retPattern("textarea"),
    size: "post",
  },
  {
    id: "inputPostComment3",
    name: "btn",
    type: "btn",
    placeholder: "send",
  },
];
