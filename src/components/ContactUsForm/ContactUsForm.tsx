import { FC, useState, useEffect } from "react";
import { dataContactUs, TypeFormValue } from "../../data";
import { InputsForm, TypeInputsForm } from "../index";
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

  const styleForm: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "285px 285px",
    gridTemplateRows: "86px 86px 86px 160px",
    gap: "24px 30px",
    gridTemplateAreas: `"name interest" "phone location" "email contact" "message message" "agree ."`,
  };
  const stateInputs = {
    statusInputs: statusInputs,
    setStatusInputs: setStatusInputs,
    formValues: formValues,
    setFormValues: setFormValues,
  };

  const ContactUsFormProps: TypeInputsForm = Object.assign(
    { data: dataContactUs, style: styleForm },
    stateInputs
  );
  // const ContactUsFormProps: TypeInputsForm = {
  //   data: dataContactUs,
  //   statusInputs: statusInputs,
  //   setStatusInputs: setStatusInputs,
  //   formValues: formValues,
  //   setFormValues: setFormValues,
  // };
  useEffect(() => {
    Object.values(statusInputs).filter((item) => item === "valid").length ===
    Object.keys(statusInputs).length
      ? setIsDisabled(false)
      : setIsDisabled(true);
  }, [statusInputs]);
  console.log("statusInputs :", statusInputs);
  console.log("formValues :", formValues);
  // console.log(ContactUsFormProps);

  return (
    <div className={styles.container}>
      <InputsForm {...ContactUsFormProps} />
    </div>
  );
};
