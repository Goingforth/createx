import { FC } from "react";
import { InputForm } from "../../uikit";
import { TypeDataFormInput, TypeFormValuesStatusInputs } from "../../data";

export type TypeInputsForm = TypeFormValuesStatusInputs & {
  data: TypeDataFormInput[];
  style: React.CSSProperties;
  isDisabled: boolean;
  sendDataForm: React.MouseEventHandler<HTMLButtonElement>;
};

export const InputsForm: FC<TypeInputsForm> = (props) => {
  const {
    formValues,
    setFormValues,
    setStatusInputs,
    statusInputs,
    data,
    style,
    isDisabled,
    sendDataForm,
  } = props;
  return (
    <form style={style}>
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
          size,
          value,
          fontLabel,
        }) => (
          <div key={id} style={{ position: "relative", gridArea: name }}>
            <InputForm
              label={label}
              name={name}
              type={type}
              size={size}
              fontLabel={fontLabel}
              value={value}
              placeholder={placeholder}
              pattern={pattern}
              messages={messages}
              formValues={formValues}
              setFormValues={setFormValues}
              statusInputs={statusInputs}
              setStatusInputs={setStatusInputs}
              dataSelect={dataSelect}
              isDisabled={isDisabled}
              sendDataForm={sendDataForm}
            />
          </div>
        )
      )}
    </form>
  );
};
