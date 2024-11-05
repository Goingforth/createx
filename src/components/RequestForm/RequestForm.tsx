import { FC, useEffect, useState } from "react";
import { InputForms, Btn, TypeBtnProps } from "../../uikit";
import { retPattern, TypeDataFormInput } from "../../data";
import styles from "./RequestForm.module.scss";

const dataRequestForm: TypeDataFormInput[] = [
  {
    id: "requestFormInput0",
    name: "name",
    label: "Name",
    placeholder: "Your name",
    pattern: retPattern("name"),
    width: "260px",
  },
  {
    id: "requestFormInput1",
    name: "phone",
    label: "Phone",
    placeholder: "Your phone",
    pattern: retPattern("phone"),
    width: "260px",
  },
  {
    id: "requestFormInput2",
    name: "message",
    label: "Message",
    placeholder: "Your message",
    pattern: retPattern("textarea"),
  },
];

///
const valuesObj = Object.fromEntries(
  dataRequestForm.map(({ name, defaultValue = "" }) => [name, defaultValue])
);

const statusInput = Object.fromEntries(
  dataRequestForm.map(({ name }) => [name, "blank"])
);

////

const RequestForm: FC = () => {
  ////
  const [values, setValues] = useState(valuesObj);
  const [status, setStatus] = useState(statusInput);
  const [isDisabled, setDisabled] = useState(true);

  useEffect(() => {
    Object.values(status).filter((item) => item === "valid").length ===
      Object.keys(status).length - 1 && values["checked"] === true
      ? setDisabled(false)
      : setDisabled(true);
  }, [status]);

  const changeHandler = (name: string, value: string | boolean) => {
    setValues({ ...values, [name]: value });
    setStatus({ ...status, [name]: "input" });
  };

  const changeFocus = (name: string) => {
    setStatus({ ...status, [name]: "focus" });
  };

  const changeBlur = (name: string, pattern: RegExp | undefined) => {
    if (values[name] === "") setStatus({ ...status, [name]: "empty" });
    else if (pattern?.test(String(values[name])))
      setStatus({ ...status, [name]: "valid" });
    else setStatus({ ...status, [name]: "noValid" });
  };

  const changeMessage = (
    name: string,
    messages?: { focus: string; input: string; valid: string; noValid: string }
  ) => {
    if (messages !== undefined) {
      const { focus, input, valid, noValid } = messages;
      switch (status[name]) {
        case "focus":
          return focus;
        case "input":
          return input;
        case "valid":
          return valid;
        case "noValid":
          return noValid;
        case "empty":
          return "The field cannot be empty";
        default:
          return "default";
      }
    } else {
      return;
    }
  };
  const onClick = () => {
    alert(JSON.stringify(values));
    setValues(valuesObj);
    setStatus(statusInput);
  };
  ////

  const ButtonProps: TypeBtnProps = {
    title: "SEND",
    onClick: onClick,
    disabled: isDisabled,
  };
  return (
    <div className={styles.container}>
      <div className={styles.titles}>Want to know more? Ask us a question:</div>
      <div className={styles.formRequest}>
        {dataRequestForm.map((item) => (
          <InputForms key={item.id} {...item} />
        ))}

        <Btn {...ButtonProps} />
      </div>
    </div>
  );
};

export default RequestForm;
