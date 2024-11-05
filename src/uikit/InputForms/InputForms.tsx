import { FC } from "react";
import SvgSprite from "../SvgSprite/SvgSprite";
import styles from "./InputForms.module.scss";
export type TypeInputForm = {
  id?: string;
  label?: string;
  placeholder?: string;
  name: string;
  type?: string;
  value: any;
  checked?: boolean;
  onChange: Function;
  onFocus: Function;
  onBlur: Function;
  pattern: RegExp | undefined;
  size?: "large" | "default" | "small";
  status?: string;
  width?: string;
};

const InputForms: FC<TypeInputForm> = ({
  label = "write label",
  placeholder = "write placeholder",
  name = "write name",
  type = "string",
  value,
  onChange,
  onFocus,
  onBlur,
  pattern,
  size = "default",
  status,
  width = "100%",
}) => {
  return (
    <div
      className={[
        styles.container,
        size === "default" ? styles.default : "",
        size === "large" ? styles.large : "",
        size === "small" ? styles.small : "",
      ].join(" ")}
      style={{ width: `${width}` }}
    >
      <label>{label}</label>
      {type !== "textarea" ? (
        <input
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(name, event.target.value)}
          onFocus={() => {
            onFocus(name, pattern);
          }}
          onBlur={() => {
            onBlur(name, pattern);
          }}
        />
      ) : (
        <textarea
          name={name}
          spellCheck='false'
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(name, event.target.value)}
          onFocus={() => {
            onFocus(name);
          }}
          onBlur={() => {
            onBlur(name, pattern);
          }}
        />
      )}
      {type !== "textarea" && (
        <div className={styles.iconInput}>
          {status === "valid" && <SvgSprite id='mark' />}
          {status === "novalid" ||
            (status === "empty" && <SvgSprite id='danger' />)}
        </div>
      )}
    </div>
  );
};

export default InputForms;
