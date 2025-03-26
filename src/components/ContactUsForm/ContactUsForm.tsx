import { FC, useState, useEffect } from "react";
import { dataContactUs, TypeFormValue } from "../../data";
import { InputsForm, TypeInputsForm } from "../index";
import styles from "./ContactUsForm.module.scss";

export const ContactUsForm: FC = () => {
  const filterDataContactUs = dataContactUs.filter(
    (item) => item.name !== "btn"
  );
  const valuesObj = Object.fromEntries(
    filterDataContactUs.map(({ name, defaultValue = "" }) => [
      name,
      defaultValue,
    ])
  );
  const statusInput = Object.fromEntries(
    filterDataContactUs.map(({ name }) => [name, "blank"])
  );
  const [isDisabled, setIsDisabled] = useState(true);
  const [statusInputs, setStatusInputs] = useState(statusInput);
  const [formValues, setFormValues] = useState<TypeFormValue>(valuesObj);

  const styleForm: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "285px 30px 75px 210px",
    gridTemplateRows: "86px 86px 86px 160px",
    rowGap: "24px",
    gridTemplateAreas: `"name . interest interest" "phone . location location" "email . contact contact" "message message message message" "agree agree . btn"`,
  };
  const stateInputs = {
    statusInputs: statusInputs,
    setStatusInputs: setStatusInputs,
    formValues: formValues,
    setFormValues: setFormValues,
  };

  const sendDataForm = () => {
    alert("Send form now!");
    setStatusInputs(statusInput), setFormValues(valuesObj);
  };

  const ContactUsFormProps: TypeInputsForm = Object.assign(
    { data: dataContactUs, style: styleForm, isDisabled, sendDataForm },
    stateInputs
  );

  useEffect(() => {
    Object.values(statusInputs).filter((item) => item === "valid").length ===
    Object.keys(statusInputs).length
      ? setIsDisabled(false)
      : setIsDisabled(true);
  }, [statusInputs]);

  return (
    <div className={styles.container}>
      <InputsForm {...ContactUsFormProps} />
    </div>
  );
};
