import { FC, useEffect } from "react";
import { SvgSprite } from "..";
import { TypeFormValue } from "../../data";
import { TypeDataSelect } from "../../data";
import styles from "./CheckBoxesMulti.module.scss";

interface TypeCheckBoxesMulti {
  name: string;
  value: string | boolean | File | Date;
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
  dataSelect?: TypeDataSelect[];
}

export const CheckBoxesMulti: FC<TypeCheckBoxesMulti> = ({
  formValues,
  setFormValues,
  name,
  setStatusInputs,
  statusInputs,
  value,
  dataSelect,
}) => {
  const dataOption = dataSelect?.map((item) => item.option);

  useEffect(() => {
    dataOption?.indexOf(String(value)) === -1 &&
      dataSelect &&
      setFormValues({ ...formValues, [name]: dataSelect[0].option });
    dataOption?.includes(String(value)) &&
      setStatusInputs({ ...statusInputs, [name]: "valid" });
  }, [value]);

  return (
    <div className={styles.container}>
      {dataSelect?.map(({ id, option }) => (
        <div
          className={styles.checkbox}
          key={id}
          onClick={() => {
            setFormValues({ ...formValues, [name]: option });
          }}
        >
          <div>
            {value === option ? (
              <SvgSprite id='checked' />
            ) : (
              <SvgSprite id='unchecked' />
            )}
          </div>
          <div className={styles.label}>{option}</div>
        </div>
      ))}
    </div>
  );
};
