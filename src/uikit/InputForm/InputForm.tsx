import { FC, useState, useEffect } from "react";
import { SvgSprite, InputSelect, InputChooseFile } from "../index";
import { TypeDataSelect, TypeFormValuesStatusInputs } from "../../data";
import styles from "./InputForm.module.scss";

export type TypeInputForm = TypeFormValuesStatusInputs & {
  id?: string;
  label?: string;
  placeholder?: string;
  name: string;
  type?: string;
  messages?:
    | {
        focus: string;
        input: string;
        valid: string;
        noValid: string;
      }
    | undefined;
  pattern: RegExp | undefined;
  size?: "large" | "default" | "small";
  width?: string;
  dataSelect?: TypeDataSelect[];
};

const InputForm: FC<TypeInputForm> = ({
  label,
  placeholder = "write placeholder",
  name = "write name",
  type = "text",
  messages,
  pattern,
  size = "default",
  width = "100%",
  formValues,
  setFormValues,
  statusInputs,
  setStatusInputs,
  dataSelect,
}) => {
  const changeMessage = (messages?: {
    focus: string;
    input: string;
    valid: string;
    noValid: string;
  }) => {
    if (messages !== undefined) {
      const { focus, input, valid, noValid } = messages;
      switch (status) {
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
    } else {
      return;
    }
  };
  const changeStylesValid = () => {
    switch (status) {
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
  const [value, setValue] = useState("");
  const [status, setStatus] = useState("blank");
  useEffect(() => {
    setStatusInputs({ ...statusInputs, [name]: status });
  }, [status]);
  const onFocus = () => {
    setStatus("focus");
  };
  const onBlur = () => {
    if (value === "") setStatus("empty");
  };
  const onChange = (value: string, pattern: RegExp | undefined) => {
    setStatus("input");
    pattern?.test(String(value))
      ? (setStatus("valid"), setFormValues({ ...formValues, [name]: value }))
      : setStatus("novalid");
    setValue(value);
  };

  return (
    <div
      className={
        type !== "file"
          ? [
              styles.container,
              size === "default" ? styles.default : "",
              size === "large" ? styles.large : "",
              size === "small" ? styles.small : "",
            ].join(" ")
          : ""
      }
      style={{ width: `${width}` }}
    >
      {label !== undefined && <label>{label}</label>}

      {(type === "text" || type === "tel" || type === "email") && (
        <input
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value, pattern)}
          onFocus={() => {
            onFocus();
          }}
          onBlur={() => {
            onBlur();
          }}
        />
      )}
      {type === "textarea" && (
        <textarea
          name={name}
          spellCheck='false'
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value, pattern)}
          onFocus={() => {
            onFocus();
          }}
          onBlur={() => {
            onBlur();
          }}
        />
      )}
      {type !== "textarea" && type !== "file" && type !== "select" && (
        <div className={styles.iconInput}>
          {status === "valid" && <SvgSprite id='mark' />}
          {(status === "novalid" || status === "empty") && (
            <SvgSprite id='danger' />
          )}
        </div>
      )}
      {type === "select" && (
        <InputSelect
          placeholder={placeholder}
          dataSelect={dataSelect}
          setFormValues={setFormValues}
          formValues={formValues}
          setStatusInputs={setStatusInputs}
          statusInputs={statusInputs}
        />
      )}
      {type === "file" && (
        <InputChooseFile
          setFormValues={setFormValues}
          formValues={formValues}
          setStatusInputs={setStatusInputs}
          statusInputs={statusInputs}
        />
      )}

      {type !== "checkbox" && status !== "blank" ? (
        <div className={[styles.message, changeStylesValid()].join(" ")}>
          {changeMessage(messages)}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default InputForm;
