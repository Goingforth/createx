import { FC } from "react";
import { InputForm } from "../../uikit";
import { TypeDataFormInput, TypeFormValuesStatusInputs } from "../../data";

export type TypeInputsForm = TypeFormValuesStatusInputs & {
  data: TypeDataFormInput[];
  style: React.CSSProperties;
};

export const InputsForm: FC<TypeInputsForm> = (props) => {
  const {
    formValues,
    setFormValues,
    setStatusInputs,
    statusInputs,
    data,
    style,
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
        }) => (
          <div key={id} style={{ position: "relative", gridArea: name }}>
            <InputForm
              label={label}
              name={name}
              type={type}
              size={size}
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
