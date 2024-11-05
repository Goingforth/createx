import { FC, useState, useEffect } from "react";
import { InputForms, Btn, Checkboxes } from "../../uikit";
import styles from "./ApplicationForm.module.scss";
import { dataApplicationFormInput } from "../../data";
//////////
const valuesObj = Object.fromEntries(
  dataApplicationFormInput.map(({ name, defaultValue = "" }) => [
    name,
    defaultValue,
  ])
);

const statusInput = Object.fromEntries(
  dataApplicationFormInput.map(({ name }) => [name, "blank"])
);
////////////////////
const ApplicationForm: FC = () => {
  /////////////////////////////
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
  //////////////////
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>A quick way to discuss details</h3>
      <form className={styles.form}>
        {dataApplicationFormInput.map(
          ({
            id,
            label,
            placeholder,
            name,
            type,
            value,
            messages,
            pattern,
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
                    pattern={pattern}
                    status={status[name]}
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

              {type !== "checkbox" && status[name] !== "blank" ? (
                <div
                  className={[
                    styles.message,
                    status[name] === "valid" ? styles.valid : "",
                    status[name] === "novalid" ? styles.novalid : "",
                    status[name] === "empty" ? styles.novalid : "",
                  ].join(" ")}
                >
                  {changeMessage(name, messages)}
                </div>
              ) : (
                ""
              )}
            </div>
          )
        )}

        <div className={styles.wrapperButton}>
          <Btn title='send request' disabled={isDisabled} onClick={onClick} />
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
