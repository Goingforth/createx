import { FC, useState, useEffect } from "react";
import styles from "./InputSelect.module.scss";
import SvgSprite from "../SvgSprite/SvgSprite";
import { TypeDataSelect, TypeFormValuesStatusInputs } from "../../data";

type TypeInputSelect = TypeFormValuesStatusInputs & {
  name: string;
  placeholder: string;
  dataSelect?: TypeDataSelect[];
  size: "default" | "large" | "small";
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
  } = props;

  const [value, setValue] = useState<string>(
    placeholder !== "write placeholder"
      ? placeholder
      : dataSelect
      ? dataSelect[0].option
      : ""
  );
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
        <div className={!isSelect ? styles.default : styles.selected}>
          {value}
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
                onMouseEnter={() => setValue(option)}
                onClick={() => {
                  setValue(option);
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
