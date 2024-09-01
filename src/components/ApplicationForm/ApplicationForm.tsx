import { FC, useState, useEffect } from "react";
import InputForms from "../InputForms/InputForms";
import Checkboxes from "../Checkboxes/Checkboxes";
import ButtonBasic from "../Buttons/ButtonBasic/ButtonBasic";
import styles from "./ApplicationForm.module.scss";
import { ApplicationFormInput } from "../../data/data";

const valuesObj = Object.fromEntries(
  ApplicationFormInput.map(({ name, defaultValue = "" }) => [
    name,
    defaultValue,
  ])
);
const statusInput = Object.fromEntries(
  ApplicationFormInput.map(({ name }) => [name, "blank"]).filter((name) => {
    return name[0] !== "checked";
  })
);

const ApplicationForm: FC = () => {
  const [values, setValues] = useState(valuesObj);
  const [status, setStatus] = useState(statusInput);
  const [isDisabled, setDisabled] = useState(true);

  useEffect(() => {
    values["checked"] === true ? setDisabled(false) : setDisabled(true);
  }, [status]);
  console.log("status:", status);
  console.log("values:", values["checked"]);

  const changeHandler = (name: any, value: any) => {
    setValues({ ...values, [name]: value });
    setStatus({ ...status, [name]: "input" });
  };

  const changeFocus = (name: any) => {
    setStatus({ ...status, [name]: "focus" });
  };

  const changeBlur = (name: any, pattern: RegExp | undefined) => {
    console.log(pattern, name);

    if (values[name] === "") setStatus({ ...status, [name]: "empty" });
    else if (pattern?.test(String(values[name])))
      setStatus({ ...status, [name]: "valid" });
    else setStatus({ ...status, [name]: "novalid" });
  };

  const changeMessage = (name: string, messages: any) => {
    const { focus, input, valid, noValid } = messages;

    switch (status[name]) {
      case "focus":
        return focus;
      case "input":
        return input;
      case "valid":
        return valid;
      case "novalid":
        return noValid;
      case "empty":
        return "The field cannot be empty";
      default:
        return "default";
    }
  };
  const onClick = () => {
    alert(JSON.stringify(values));
    setValues(valuesObj);
    setStatus(statusInput);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>A quick way to discuss details</h3>
      <form className={styles.form}>
        {ApplicationFormInput.map(
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
          <ButtonBasic
            size='regular'
            title='send request'
            disabled={isDisabled}
            onClick={onClick}
          />
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
