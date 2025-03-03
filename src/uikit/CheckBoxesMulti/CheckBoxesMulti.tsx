import { FC, useState, useEffect } from "react";
import { SvgSprite } from "..";
import { TypeFormValue } from "../../data";
import styles from "./CheckBoxesMulti.module.scss";

const dataContactMethod = [
  {
    id: "method0",
    item: "phone",
    name: "Phone",
  },
  {
    id: "method1",
    item: "email",
    name: "Email",
  },
  {
    id: "method2",
    item: "viber",
    name: "Viber",
  },
];

const dataItem = dataContactMethod.map((unit) => unit.item);

interface TypeUnitCheckBoxes {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  item: string;
  name: string;
}
const UnitCheckBoxes: FC<TypeUnitCheckBoxes> = ({
  value,
  setValue,
  item,
  name,
}) => {
  return (
    <div className={styles.checkbox} onClick={() => setValue(item)}>
      <div>
        {value === item ? (
          <SvgSprite id='checked' />
        ) : (
          <SvgSprite id='unchecked' />
        )}
      </div>
      <div className={styles.name}>{name}</div>
    </div>
  );
};

interface TypeCheckBoxesMulti {
  name: string;
  formValues: TypeFormValue;
  setFormValues: React.Dispatch<React.SetStateAction<TypeFormValue>>;
  setStatusInputs: React.Dispatch<
    React.SetStateAction<{
      [k: string]: string;
    }>
  >;
  statusInputs: {
    [k: string]: string;
  };
}

export const CheckBoxesMulti: FC<TypeCheckBoxesMulti> = ({
  formValues,
  setFormValues,
  name,
  setStatusInputs,
  statusInputs,
}) => {
  const [value, setValue] = useState(dataContactMethod[0].item);
  useEffect(() => {
    setFormValues({ ...formValues, [name]: value });
    dataItem.includes(value) &&
      setStatusInputs({ ...statusInputs, [name]: "valid" });
  }, [value]);

  return (
    <div className={styles.container}>
      {dataContactMethod.map((unit) => (
        <UnitCheckBoxes key={unit.id} {...{ value, setValue, ...unit }} />
      ))}
    </div>
  );
};
