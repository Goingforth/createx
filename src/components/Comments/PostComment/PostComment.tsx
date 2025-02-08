import { FC, useState, useEffect } from "react";
import { InputsForm, TypeInputsForm } from "../../index";
import { TypeDataFormInput, retPattern } from "../../../data";
import { TypeFormValue } from "../../../data";
import { Btn } from "../../../uikit";

import styles from "./PostComment.module.scss";

const styleForm: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "390px 390px",
  gridTemplateRows: "86px 134px",
  gap: "22px 30px",
  gridTemplateAreas: `"name email" "comment comment" `,
};

const dataPostCommentForm: TypeDataFormInput[] = [
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
    size: "large",
  },
];

const valuesObj = Object.fromEntries(
  dataPostCommentForm.map(({ name, defaultValue = "" }) => [name, defaultValue])
);
const statusInput = Object.fromEntries(
  dataPostCommentForm.map(({ name }) => [name, "blank"])
);

export const PostComment: FC = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [statusInputs, setStatusInputs] = useState(statusInput);
  const [formValues, setFormValues] = useState<TypeFormValue>(valuesObj);
  useEffect(() => {
    Object.values(statusInputs).filter((item) => item === "valid").length ===
    Object.keys(statusInputs).length
      ? setIsDisabled(false)
      : setIsDisabled(true);
  }, [statusInputs]);

  const stateInputs = {
    statusInputs: statusInputs,
    setStatusInputs: setStatusInputs,
    formValues: formValues,
    setFormValues: setFormValues,
  };
  const PostCommentFormProps: TypeInputsForm = Object.assign(
    { data: dataPostCommentForm, style: styleForm },
    stateInputs
  );

  return (
    <div className={styles.container}>
      <InputsForm {...PostCommentFormProps} />
      <Btn width={215} title='Post comment' disabled={isDisabled} />
    </div>
  );
};
