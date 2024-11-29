import { FC, useState, useEffect } from "react";
import { Btn, SvgSprite, InputForm } from "../../uikit";
import { dataModalSubscribe } from "../../data";
import styles from "./ModalSubcribe.module.scss";

type TypeModal = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalSubscribe: FC<TypeModal> = ({ setOpen }) => {
  const valuesObj = Object.fromEntries(
    dataModalSubscribe.map(({ name, defaultValue = "" }) => [
      name,
      defaultValue,
    ])
  );
  const statusInput = Object.fromEntries(
    dataModalSubscribe.map(({ name }) => [name, "blank"])
  );
  const [isDisabled, setIsDisabled] = useState(true);
  const [statusInputs, setStatusInputs] = useState(statusInput);
  const [formValues, setFormValues] = useState(valuesObj);

  useEffect(() => {
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
      <h3 className={styles.title}>Subscribe to our newsletter</h3>
      {/*  */}
      <form className={styles.form}>
        {dataModalSubscribe.map(
          ({
            id,
            label,
            placeholder,
            name,
            type,
            // value,
            messages,
            pattern,
          }) => (
            <div key={id} style={{ position: "relative" }}>
              <InputForm
                label={label}
                name={name}
                type={type}
                placeholder={placeholder}
                // value={values[name]}
                pattern={pattern}
                messages={messages}
                formValues={formValues}
                setFormValues={setFormValues}
                statusInputs={statusInputs}
                setStatusInputs={setStatusInputs}
              />
            </div>
          )
        )}
      </form>
      {/*  */}
      <Btn
        form='solid'
        title='send'
        width={390}
        disabled={isDisabled}
        onClick={onClick}
      />
    </div>
  );
};
