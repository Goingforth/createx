import { FC, useState, useEffect } from "react";
import { SvgSprite } from "../../uikit";
import { InputsForm, TypeModalName, TypeInputsForm } from "../index";
import { TypeFormValue, dataModals } from "../../data";
import styles from "./ModalCTA.module.scss";

type TypeModalCTA = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalName: TypeModalName;
};

export const ModalCTA: FC<TypeModalCTA> = ({ setOpen, modalName }) => {
  const dataArray = dataModals.find(({ nameModal }) => nameModal === modalName);

  if (dataArray !== undefined) {
    const data = dataArray.data;
    const title = dataArray.title;
    const filterData = data.filter((item) => item.name !== "btn");
    const initFormValues = Object.fromEntries(
      filterData.map(({ name, defaultValue = "" }) => [name, defaultValue])
    );
    const initFormStatusInputs = Object.fromEntries(
      filterData.map(({ name }) => [name, "blank"])
    );

    const [isDisabled, setIsDisabled] = useState(true);
    const [statusInputs, setStatusInputs] = useState(initFormStatusInputs);
    const [formValues, setFormValues] = useState<TypeFormValue>(initFormValues);

    const styleFormSubscribe: React.CSSProperties = {
      width: "486px",
      height: "250px",
      display: "grid",
      gridTemplateColumns: `48px 390px 48px `,
      gridTemplateRows: "73px 20px 73px 40px 44px",
      gridTemplateAreas: `". name ." ". . ." ". email . "". . ." ". btn ." `,
    };
    const styleFormSendCV: React.CSSProperties = {
      width: "486px",
      height: "619px",
      display: "grid",
      gridTemplateColumns: `48px 390px 48px `,
      gridTemplateRows:
        "73px 20px 73px 20px 73px 20px 73px 20px 115px 24px 24px 40px 44px",
      gridTemplateAreas: `". name ." ". . ." ". location ." ". . . " ". phone ."". . . "". email . "". . ."". message ."". . . " ". file ."". . . "". btn ." `,
    };

    const styleFormChange = (modalName: TypeModalName) => {
      switch (modalName) {
        case "sendCV":
          return styleFormSendCV;
        case "subscribe":
          return styleFormSubscribe;
      }
    };
    const styleForm = styleFormChange(modalName);

    const stateInputs = {
      statusInputs: statusInputs,
      setStatusInputs: setStatusInputs,
      formValues: formValues,
      setFormValues: setFormValues,
    };
    const sendDataForm = () => {
      setOpen(false);
    };
    const ModalFormsProps: TypeInputsForm = Object.assign(
      { data: data, style: styleForm, isDisabled, sendDataForm },
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
        <div className={styles.iconWrapper} onClick={() => setOpen(false)}>
          <SvgSprite id='cross' />
        </div>
        <h3 className={styles.title}>{title}</h3>

        <InputsForm {...ModalFormsProps} />
      </div>
    );
  }
};
