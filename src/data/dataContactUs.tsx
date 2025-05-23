import type { TypeDataFormInput } from "./dataApplicationFormInput";
import { retPattern } from "./dataPatterns";
import { dataLocations } from "./dataLocation";
import { dataContactMethod } from "./dataLocation";
import { dataInterest } from "./dataLocation";

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
    size: "large",
  },
  {
    id: "inputContactUs1",
    label: "I am interested in",
    name: "interest",
    type: "select",
    dataSelect: dataInterest,
    placeholder: " Choose interest",
    size: "large",
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
    size: "large",
  },
  {
    id: "inputContactUs3",
    label: "Location*",
    name: "location",
    type: "select",
    dataSelect: dataLocations,
    placeholder: " Choose location",
    size: "large",
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
    size: "large",
  },
  {
    id: "inputContactUs5",
    label: "Preferred contact method",
    name: "contact",
    type: "checkBoxesMulti",
    dataSelect: dataContactMethod,
    size: "large",
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
    size: "large",
  },
  {
    id: "inputContactUs7",
    label:
      "I agree to receive communications from Createx Construction Bureau.",
    name: "agree",
    type: "checkbox",
    fontLabel: "baseFont",
  },
  {
    id: "inputContactUs8",
    name: "btn",
    type: "btn",
    placeholder: "send request",
  },
];
