import { FC, useEffect } from "react";
import { TypeFormValue } from "../../data";
import styles from "./Checkboxes.module.scss";

type Props = {
  value?: string;
  name: string;
  label?: string;
  type?: "radio" | "checkbox";
  fontLabel?: "defaultFont" | "baseFont";
  checked?: any;
  onChange?: Function;
  formValues?: TypeFormValue;
  setFormValues?: React.Dispatch<React.SetStateAction<TypeFormValue>>;
  setStatusInputs?: React.Dispatch<
    React.SetStateAction<{
      [k: string]: string;
    }>
  >;
  statusInputs?: {
    [k: string]: string;
  };
};

const Checkboxes: FC<Props> = ({
  name,
  label = "Input label",
  fontLabel = "defaultFont",
  type,
  checked,

  formValues,
  setStatusInputs,
  setFormValues,
  statusInputs,
}) => {
  useEffect(() => {
    setFormValues &&
      setStatusInputs &&
      (checked === true
        ? setStatusInputs({ ...statusInputs, [name]: "valid" })
        : setStatusInputs({ ...statusInputs, [name]: "novalid" }));
  }, [checked]);

  return (
    <div className={styles.container}>
      <input
        name={name}
        type={type}
        checked={checked}
        onChange={() => {
          setFormValues &&
            formValues &&
            setFormValues({ ...formValues, [name]: !formValues[name] });
        }}
      />
      <div
        className={[
          fontLabel === "defaultFont" ? styles.defaultFont : "",
          fontLabel === "baseFont" ? styles.baseFont : "",
        ].join(" ")}
        dangerouslySetInnerHTML={{
          __html: `<span >${label}</span>`,
        }}
      />
    </div>
  );
};

export default Checkboxes;
