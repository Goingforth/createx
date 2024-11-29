import { FC, useState, useEffect } from "react";
import { Btn, SvgSprite } from "../../uikit";
import { ModalForms, TypeModalName, TypeModalForms } from "../index";
import { dataModalSubscribe, dataModalSendCV } from "../../data";
import styles from "./ModalCTA.module.scss";
import { TypeDataFormInput } from "../../data";

type TypeModalCTA = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalName: TypeModalName;
};

type dataArrayModal = {
  name: TypeModalName;
  title: string;
  data: TypeDataFormInput[];
};

const dataArrayModal: dataArrayModal[] = [
  {
    name: "subscribe",
    title: "Subscribe to our newsletter",
    data: dataModalSubscribe,
  },
  {
    name: "sendCV",
    title: "Send your CV",
    data: dataModalSendCV,
  },
];

export const ModalCTA: FC<TypeModalCTA> = ({ setOpen, modalName }) => {
  const dataArray = dataArrayModal.find(({ name }) => name === modalName);

  if (dataArray !== undefined) {
    const data = dataArray.data;
    const title = dataArray.title;
    const valuesObj = Object.fromEntries(
      data.map(({ name, defaultValue = "" }) => [name, defaultValue])
    );
    const statusInput = Object.fromEntries(
      data.map(({ name }) => [name, "blank"])
    );
    const [isDisabled, setIsDisabled] = useState(true);
    const [statusInputs, setStatusInputs] = useState(statusInput);
    const [formValues, setFormValues] = useState(valuesObj);

    const ModalFormsProps: TypeModalForms = {
      data: data,
      statusInputs: statusInputs,
      setStatusInputs: setStatusInputs,
      formValues: formValues,
      setFormValues: setFormValues,
    };

    useEffect(() => {
      console.log(statusInputs);

      Object.values(statusInputs).filter((item) => item === "valid").length ===
      Object.keys(statusInputs).length
        ? setIsDisabled(false)
        : setIsDisabled(true);
    }, [statusInputs]);

    const onClick = () => {
      setOpen(false);
    };

    return (
      <div className={styles.container}>
        <div className={styles.iconWrapper} onClick={() => setOpen(false)}>
          <SvgSprite id='cross' />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <ModalForms {...ModalFormsProps} />
        <Btn
          form='solid'
          title='send'
          width={390}
          disabled={isDisabled}
          onClick={onClick}
        />
      </div>
    );
  }
};
