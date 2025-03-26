import { FC } from "react";
import {
  SvgSprite,
  InputSelect,
  InputChooseFile,
  Checkboxes,
  Btn,
} from "../index";
import { TypeDataSelect, TypeFormValuesStatusInputs } from "../../data";
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { CheckBoxesMulti } from "../index";
import styles from "./InputForm.module.scss";

interface valueCustomInput extends InputHTMLAttributes<HTMLInputElement> {
  value?: any;
}
interface valueCustomTextarea
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value?: any;
}
const Input: React.FC<valueCustomInput> = (props) => <input {...props} />;
const Textarea: React.FC<valueCustomTextarea> = (props) => (
  <textarea {...props} />
);

export type TypeInputForm = TypeFormValuesStatusInputs & {
  id?: string;
  label?: string;
  placeholder?: string;
  name: string;
  type?: string;
  value?: string;
  fontLabel?: "defaultFont" | "baseFont";
  messages?:
    | {
        focus: string;
        input: string;
        valid: string;
        noValid: string;
      }
    | undefined;
  pattern: RegExp | undefined;
  size?: "large" | "default" | "small" | "post";
  width?: string;
  dataSelect?: TypeDataSelect[];
  checked?: boolean | undefined;
  isDisabled: boolean;
  sendDataForm: React.MouseEventHandler<HTMLButtonElement>;
};

const InputForm: FC<TypeInputForm> = ({
  label,
  value,
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
  fontLabel,
  isDisabled,
  sendDataForm,
}) => {
  const changeMessage = (messages?: {
    focus: string;
    input: string;
    valid: string;
    noValid: string;
  }) => {
    if (messages !== undefined) {
      const { focus, input, valid, noValid } = messages;
      switch (statusInputs[name]) {
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
    switch (statusInputs[name]) {
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
  const onFocus = () => {
    setStatusInputs({ ...statusInputs, [`${name}`]: "focus" });
  };
  const onBlur = () => {
    if (formValues[name] === "")
      setStatusInputs({ ...statusInputs, [`${name}`]: "empty" });
  };
  const onChange = (value: string, pattern: RegExp | undefined) => {
    setStatusInputs({ ...statusInputs, [`${name}`]: "input" });

    setFormValues({ ...formValues, [name]: value });
    pattern?.test(String(value))
      ? setStatusInputs({ ...statusInputs, [`${name}`]: "valid" })
      : setStatusInputs({ ...statusInputs, [`${name}`]: "novalid" });
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
              size === "post" ? styles.post : "",
            ].join(" ")
          : ""
      }
      style={{ width: `${width}` }}
    >
      {label !== undefined && type !== "checkbox" && <label>{label}</label>}

      {(type === "text" || type === "tel" || type === "email") && (
        <Input
          name={name}
          type={type}
          value={formValues[name]}
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
        <Textarea
          name={name}
          spellCheck='false'
          value={formValues[name]}
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
      {type !== "textarea" &&
        type !== "file" &&
        type !== "select" &&
        type !== "checkbox" &&
        type !== "radio" &&
        type !== "checkBoxesMulti" && (
          <div className={styles.iconInput}>
            {statusInputs[name] === "valid" && <SvgSprite id='mark' />}
            {(statusInputs[name] === "novalid" ||
              statusInputs[name] === "empty") && <SvgSprite id='danger' />}
          </div>
        )}
      {type === "select" && (
        <InputSelect
          name={name}
          placeholder={placeholder}
          dataSelect={dataSelect}
          value={formValues[name]}
          size={size}
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
      {type === "checkBoxesMulti" && (
        <CheckBoxesMulti
          name={name}
          dataSelect={dataSelect}
          value={formValues[name]}
          setFormValues={setFormValues}
          formValues={formValues}
          setStatusInputs={setStatusInputs}
          statusInputs={statusInputs}
        />
      )}
      {(type === "radio" || type === "checkbox") && (
        <Checkboxes
          name={name}
          label={label}
          fontLabel={fontLabel}
          type={type}
          checked={formValues[name]}
          // onChange={onChangeCheckbox}
          setFormValues={setFormValues}
          formValues={formValues}
          setStatusInputs={setStatusInputs}
          statusInputs={statusInputs}
        />
      )}

      {type !== "checkbox" && statusInputs[name] !== "blank" ? (
        <div className={[styles.message, changeStylesValid()].join(" ")}>
          {changeMessage(messages)}
        </div>
      ) : (
        ""
      )}
      {type === "btn" && (
        <Btn title={placeholder} disabled={isDisabled} onClick={sendDataForm} />
      )}
    </div>
  );
};

export default InputForm;
