import { FC } from "react";
import SvgSprite from "../SvgSprite/SvgSprite";
import styles from "./InputForms.module.scss";
type Props = {
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
};

const InputForms: FC<Props> = ({
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
}) => {
  return (
    <div
      className={[
        styles.container,
        size === "default" ? styles.default : "",
        size === "large" ? styles.large : "",
        size === "small" ? styles.small : "",
      ].join(" ")}
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
            onFocus(name);
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
          <SvgSprite
            id={
              status === "valid"
                ? "mark"
                : status === "novalid" || status === "empty"
                ? "danger"
                : ""
            }
          />
        </div>
      )}
    </div>
  );
};

export default InputForms;
