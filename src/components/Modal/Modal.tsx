import { FC, useState, useEffect } from "react";
import { InputForms, Btn, SvgSprite } from "../../uikit";
import { dataModalSubscribe } from "../../data";
import styles from "./Modal.module.scss";

type TypeModal = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalSubscribe: FC<TypeModal> = ({ setOpen }) => {
  const valuesObj = Object.fromEntries(
    dataModalSubscribe.map(({ name, defaultValue = "" }) => [
      name,
      defaultValue,
    ])
  );
  const statusInput = Object.fromEntries(
    dataModalSubscribe.map(({ name }) => [name, "blank"])
  );
  const [values, setValues] = useState(valuesObj);
  const [status, setStatus] = useState(statusInput);
  const [isDisabled, setDisabled] = useState(true);

  console.log("status:", status);

  useEffect(() => {
    Object.values(status).filter((item) => item === "valid").length ===
    Object.keys(status).length
      ? setDisabled(false)
      : setDisabled(true);
  }, [status]);

  // const changeHandler = (name: string, value: string | boolean) => {
  //   setValues({ ...values, [name]: value });
  //   setStatus({ ...status, [name]: "input" });
  // };
  const changeHandler = (
    name: string,
    value: string | boolean,
    pattern: RegExp | undefined
  ) => {
    console.log("pattern:", pattern, "name:", name);
    console.log(values[name]);
    setStatus({ ...status, [name]: "input" });
    if (values[name] === "") setStatus({ ...status, [name]: "empty" });
    else if (pattern?.test(String(values[name])))
      setStatus({ ...status, [name]: "valid" });
    else setStatus({ ...status, [name]: "noValid" });
    //
    setValues({ ...values, [name]: value });
  };

  const changeFocus = (name: string) => {
    setStatus({ ...status, [name]: "focus" });
  };

  const changeBlur = (name: string, pattern: RegExp | undefined) => {
    console.log("pattern:", pattern, "name:", name);
    // return;
    // if (values[name] === "") setStatus({ ...status, [name]: "empty" });
    // else if (pattern?.test(String(values[name])))
    //   setStatus({ ...status, [name]: "valid" });
    // else setStatus({ ...status, [name]: "noValid" });
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
  const changeStylesValid = (name: string) => {
    switch (status[name]) {
      case "valid":
        return styles.valid;
      case "novalid":
        return styles.novalid;
      case "empty":
        return styles.novalid;
      default:
        return "";
    }
  };

  const onClick = () => {
    alert(JSON.stringify(values));
    setValues(valuesObj);
    setStatus(statusInput);
  };

  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper} onClick={() => setOpen(false)}>
        <SvgSprite id='cross' />
      </div>
      <h3 className={styles.title}>Subscribe to our newsletter</h3>
      <form className={styles.form}>
        {dataModalSubscribe.map(
          ({
            id,
            label,
            placeholder,
            name,
            type,
            // value,
            messages,
            pattern,
          }) => (
            <div key={id} style={{ position: "relative" }}>
              <InputForms
                label={label}
                name={name}
                type={type}
                placeholder={placeholder}
                value={values[name]}
                pattern={pattern}
                onChange={changeHandler}
                onFocus={changeFocus}
                onBlur={changeBlur}
                status={status[name]}
              />
              {type !== "checkbox" && status[name] !== "blank" ? (
                <div
                  className={[styles.message, changeStylesValid(name)].join(
                    " "
                  )}
                >
                  {changeMessage(name, messages)}
                </div>
              ) : (
                ""
              )}
            </div>
          )
        )}
      </form>
      <Btn
        form='solid'
        title='send'
        width={390}
        disabled={isDisabled}
        onClick={onClick}
      />
    </div>
  );
};

export const ModalSendCV: FC<TypeModal> = ({ setOpen }) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper} onClick={() => setOpen(false)}>
        <SvgSprite id='cross' />
      </div>
      <h3 className={styles.title}>Send your CV</h3>
    </div>
  );
};
