import { FC, useState, useEffect } from "react";
import { dataContactUs, TypeFormValue } from "../../data";
import { InputForm } from "../../uikit";
import styles from "./ContactUsForm.module.scss";

export const ContactUsForm: FC = () => {
  const valuesObj = Object.fromEntries(
    dataContactUs.map(({ name, defaultValue = "" }) => [name, defaultValue])
  );
  const statusInput = Object.fromEntries(
    dataContactUs.map(({ name }) => [name, "blank"])
  );
  const [isDisabled, setIsDisabled] = useState(true);
  const [statusInputs, setStatusInputs] = useState(statusInput);
  const [formValues, setFormValues] = useState<TypeFormValue>(valuesObj);
  useEffect(() => {
    Object.values(statusInputs).filter((item) => item === "valid").length ===
    Object.keys(statusInputs).length
      ? setIsDisabled(false)
      : setIsDisabled(true);
  }, [statusInputs]);
  console.log("statusInputs :", statusInputs);
  console.log("formValues :", formValues);

  return (
    <div className={styles.container}>
      {/* {dataContactUs.map((item) => (
        <InputForm {...item} />
      ))} */}
    </div>
  );
};
