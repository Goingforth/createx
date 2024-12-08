import { FC } from "react";
import { InputForm } from "../../uikit";
import { TypeDataFormInput } from "../../data";
import styles from "./ModalForms.module.scss";

export type TypeModalForms = {
  data: TypeDataFormInput[];
  formValues: {
    [k: string]: string | boolean | File;
  };
  setFormValues: React.Dispatch<
    React.SetStateAction<{
      [k: string]: string | boolean | File;
    }>
  >;
  statusInputs: {
    [k: string]: string;
  };
  setStatusInputs: React.Dispatch<
    React.SetStateAction<{
      [k: string]: string;
    }>
  >;
};

export const ModalForms: FC<TypeModalForms> = (props) => {
  const { formValues, setFormValues, setStatusInputs, statusInputs, data } =
    props;
  return (
    <form className={styles.form}>
      {data.map(
        ({
          id,
          label,
          placeholder,
          name,
          type,
          messages,
          pattern,
          dataSelect,
        }) => (
          <div key={id} style={{ position: "relative" }}>
            <InputForm
              label={label}
              name={name}
              type={type}
              placeholder={placeholder}
              pattern={pattern}
              messages={messages}
              formValues={formValues}
              setFormValues={setFormValues}
              statusInputs={statusInputs}
              setStatusInputs={setStatusInputs}
              dataSelect={dataSelect}
            />
          </div>
        )
      )}
    </form>
  );
};
