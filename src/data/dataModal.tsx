import { retPattern } from "./dataPatterns";
import type { TypeDataFormInput } from "./dataApplicationFormInput";
import { dataLocations } from "./dataLocation";
import { TypeModalName } from "./typeModalName";

type dataModals = {
  nameModal: TypeModalName;
  title: string;
  data: TypeDataFormInput[];
};

const dataModalSubscribe: TypeDataFormInput[] = [
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
  {
    id: "odalSubscribe2",
    name: "btn",
    type: "btn",
    placeholder: "send",
  },
];

const dataModalSendCV: TypeDataFormInput[] = [
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
    dataSelect: dataLocations,
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
  {
    id: "modalSendCV5",
    name: "file",
    type: "file",
  },
  {
    id: "modalSendCV6",
    name: "btn",
    type: "btn",
    placeholder: "send",
  },
];
export const dataModals: dataModals[] = [
  {
    nameModal: "subscribe",
    title: "Subscribe to our newsletter",
    data: dataModalSubscribe,
  },
  {
    nameModal: "sendCV",
    title: "Send your CV",
    data: dataModalSendCV,
  },
];
