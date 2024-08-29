import { FC } from "react";
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
  size?: "large" | "default" | "small";
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
  size = "default",
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
            onBlur(name);
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
            onBlur(name);
          }}
        />
      )}
    </div>
  );
};

export default InputForms;
