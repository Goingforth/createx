import { FC, useState } from "react";
import styles from "./InputSelect.module.scss";
import SvgSprite from "../SvgSprite/SvgSprite";

type TypeInputSelect = {
  placeholder: string;
};

export const InputSelect: FC<TypeInputSelect> = ({ placeholder }) => {
  const [value, setValue] = useState(placeholder);
  const [select, setSelect] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.placeholder}>{value}</div>
        <div className={styles.iconWrapper} onClick={() => setSelect(!select)}>
          <SvgSprite id='downChevron' />
        </div>
        {select && (
          <div className={styles.options}>
            <div
              className={styles.option}
              onClick={() => {
                setValue("1"), setSelect(false);
              }}
            >
              1
            </div>
            <div
              className={styles.option}
              onClick={() => {
                setValue("2"), setSelect(false);
              }}
            >
              2
            </div>
            <div
              className={styles.option}
              onClick={() => {
                setValue("3"), setSelect(false);
              }}
            >
              3
            </div>
          </div>
        )}
      </div>
    </>
  );
};
