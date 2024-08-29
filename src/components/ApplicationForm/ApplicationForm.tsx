import { FC, useState } from "react";
import InputForms from "../InputForms/InputForms";
import Checkboxes from "../Checkboxes/Checkboxes";
import ButtonBasic from "../Buttons/ButtonBasic/ButtonBasic";
import styles from "./ApplicationForm.module.scss";
// type TypeFormInput = {
//   id?: string;
//   label?: string;
//   placeholder?: string;
//   name: string|number|boolean;
//   defaultValue?: string | boolean;
//   type?: string;
//   map: Function;
//   value?: string;
// };

const ApplicationFormInput = [
  {
    id: "ApplicationFormInput0",
    label: "Name*",
    placeholder: "Your name",
    name: "name",
    messageFocus: "enter name",
    messageInput: "name in format",
    messageGood: "Looks good!",
    messageFalse: "Please provide a valid input.",
    pattern: "[a-z]{1,15}",
    // status: "empty",
  },
  {
    id: "ApplicationFormInput1",
    label: "Phone*",
    placeholder: "Your phone number",
    name: "phone",
    type: "tel",
    messageFocus: "enter phone",
    messageInput: "phone in format",
    messageGood: "Looks good!",
    messageFalse: "Please provide a valid input.",
    pattern: "[a-z]{1,15}",
    // status: "empty",
  },
  {
    id: "ApplicationFormInput2",
    label: "Email",
    placeholder: "Your working email",
    name: "email",
    type: "email",
    messageFocus: "enter email",
    messageInput: "email is format",
    messageGood: "Looks good!",
    messageFalse: "Please provide a valid input.",
    pattern: "[a-z]{1,15}",
    // status: "empty",
  },
  {
    id: "ApplicationFormInput3",
    label: "Message*",
    placeholder: "Your message",
    name: "message",
    type: "textarea",
    messageFocus: "enter message",
    messageInput: "message unformat",
    messageGood: "Looks good!",
    messageFalse: "Please provide a valid input.",
    pattern: "[a-z]{1,15}",
    // status: "empty",
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

const valuesObj = Object.fromEntries(
  ApplicationFormInput.map(({ name, defaultValue = "" }) => [
    name,
    defaultValue,
  ])
);

const statusInput = Object.fromEntries(
  ApplicationFormInput.map(({ name }) => [name, "empty"]).filter((name) => {
    console.log(name[0]);
    return name[0] !== "checked";
  })
);
console.log("statusInput:", statusInput);

const ApplicationForm: FC = () => {
  const [values, setValues] = useState(valuesObj);
  const [status, setStatus] = useState(statusInput);

  function changeHandler(name: any, value: any) {
    setValues({ ...values, [name]: value });
    setStatus({ ...status, [name]: "input" });
  }

  function changeFocus(name: any) {
    setStatus({ ...status, [name]: "focus" });
  }

  function changeBlur(name: any) {
    setStatus({ ...status, [name]: "blur" });
  }

  function changeMessage(
    name: string,
    messageGood: string | undefined,
    messageInput: string | undefined,
    messageFalse: string | undefined,
    messageFocus: string | undefined
  ) {
    switch (status[name]) {
      case "focus":
        return messageFocus;
      case "input":
        return messageInput;
      case "blur":
        if (values[name] === "") return "the field cannot be empty";
        else return messageGood;
      // case "blur" && value !== "":
      //   return messageGood;
      default:
        return "default";
    }
  }

  console.log("status :", status);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>A quick way to discuss details</h3>
      {/* <form className={styles.form} action='/formdata" method="GET'> */}
      <form className={styles.form}>
        {ApplicationFormInput.map(
          ({
            id,
            label,
            placeholder,
            name,
            type,
            value,
            // status,
            messageInput,
            messageFalse,
            messageGood,
            messageFocus,
          }) => (
            <div key={id} style={{ position: "relative" }}>
              {type !== "checkbox" ? (
                <div>
                  <InputForms
                    label={label}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={values[name]}
                    onChange={changeHandler}
                    onFocus={changeFocus}
                    onBlur={changeBlur}
                  />
                </div>
              ) : (
                <Checkboxes
                  name={name}
                  value={value}
                  checked={values[name]}
                  onChange={changeHandler}
                />
              )}
              {/* {type !== "checkbox" && status !== "empty" ? ( */}
              {type !== "checkbox" && status[name] !== "empty" ? (
                <div className={styles.message}>
                  {changeMessage(
                    name,
                    messageGood,
                    messageInput,
                    messageFalse,
                    messageFocus
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
          )
        )}

        <div className={styles.wrapperButton}>
          {/* <ButtonBasic size='regular' title='send request' type='submit' /> */}
          <ButtonBasic size='regular' title='send request' />
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
