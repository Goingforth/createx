import { FC, useState, useEffect } from "react";
import styles from "./InputSelect.module.scss";
import SvgSprite from "../SvgSprite/SvgSprite";
import type { TypeDataSelect } from "../../data/dataLocation";
import { TypeFormValuesStatusInputs } from "../../data/typesFormInputs";

type TypeInputSelect = TypeFormValuesStatusInputs & {
  name: string;
  placeholder: string;
  dataSelect?: TypeDataSelect[];
  size: "default" | "large" | "small" | "post";
  value: string | boolean | File | Date;
};

export const InputSelect: FC<TypeInputSelect> = (props) => {
  const {
    name,
    placeholder,
    dataSelect,
    setFormValues,
    setStatusInputs,
    formValues,
    statusInputs,
    size,
    value,
  } = props;

  const [select, setSelect] = useState(false);
  const [isSelect, setIsSelect] = useState(false);

  useEffect(() => {
    if (isSelect) {
      setFormValues({ ...formValues, [name]: value });
      setStatusInputs({ ...statusInputs, [name]: "valid" });
    }
  }, [isSelect]);

  return (
    <div className={styles[size]}>
      <div className={styles.container}>
        <div
          className={
            !isSelect || value === "" ? styles.default : styles.selected
          }
        >
          {String(value) || placeholder}
        </div>
        <div
          className={styles.iconWrapper}
          onClick={() => {
            setSelect(!select), setIsSelect(false);
          }}
        >
          <SvgSprite id='downChevron' />
        </div>

        {select && (
          <div
            className={styles.options}
            onMouseLeave={() => {
              select && setSelect(false);
              setIsSelect(true);
            }}
          >
            {dataSelect?.map(({ id, option }) => (
              <div
                key={id}
                className={styles.option}
                onMouseEnter={() =>
                  setFormValues({ ...formValues, [name]: option })
                }
                onClick={() => {
                  setFormValues({ ...formValues, [name]: option });
                  setSelect(false);
                  setIsSelect(true);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
