import { FC, useEffect, useState } from "react";
import { InputsForm } from "../index";
import { TypeInputsForm } from "../index";
import { dataRequestForm } from "../../data";
import { TypeFormValue } from "../../data";
import styles from "./RequestForm.module.scss";

const filterData = dataRequestForm.filter((item) => item.name !== "btn");
const initFormValues = Object.fromEntries(
  filterData.map(({ name, defaultValue = "" }) => [name, defaultValue])
);

const initFormStatusInputs = Object.fromEntries(
  filterData.map(({ name }) => [name, "blank"])
);

const RequestForm: FC = () => {
  const [formValues, setFormValues] = useState<TypeFormValue>(initFormValues);
  const [statusInputs, setStatusInputs] = useState(initFormStatusInputs);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    Object.values(statusInputs).filter((item) => item === "valid").length ===
    Object.keys(statusInputs).length
      ? setIsDisabled(false)
      : setIsDisabled(true);
  }, [statusInputs]);

  const styleForm: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `60px 260px  260px   414px  104px 60px`,
    columnGap: "24px",
    gridTemplateAreas: `". name  phone  message  btn ." `,
    alignItems: "end",
  };
  const stateInputs = {
    statusInputs: statusInputs,
    setStatusInputs: setStatusInputs,
    formValues: formValues,
    setFormValues: setFormValues,
  };

  const sendDataForm = () => {
    alert("Send form now!");
    setStatusInputs(initFormStatusInputs), setFormValues(initFormValues);
  };

  const InputsFormProps: TypeInputsForm = Object.assign(
    { data: dataRequestForm, style: styleForm, isDisabled, sendDataForm },
    stateInputs
  );
  return (
    <div className={styles.container}>
      <div className={styles.titles}>Want to know more? Ask us a question:</div>
      <div className={styles.formRequest}>
        <InputsForm {...InputsFormProps} />
      </div>
    </div>
  );
};

export default RequestForm;
