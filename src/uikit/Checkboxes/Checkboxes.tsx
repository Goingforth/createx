import { FC } from "react";
import styles from "./Checkboxes.module.scss";

type Props = {
  value?: string;
  name: string;
  type?: "radio" | "checkbox";
  // checked: boolean | undefined;
  checked: any;
  onChange: Function;
};

const Checkboxes: FC<Props> = ({
  name,
  value = "Input label",
  type,
  checked,
  onChange,
}) => {
  console.log("type:", type);

  return (
    <div className={styles.container} onClick={() => onChange(name, !checked)}>
      <input
        name={name}
        type={type}
        checked={checked}
        onChange={() => onChange(name, !checked)}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: `<span>${value}</span>`,
        }}
      />
    </div>
  );
};

export default Checkboxes;
