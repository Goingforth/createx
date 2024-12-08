import { FC, useState, useId, useEffect } from "react";
import SvgSprite from "../SvgSprite/SvgSprite";
import styles from "./InputChooseFile.module.scss";
import { TypeFormValuesStatusInputs } from "../../data";

const InputChooseFile: FC<TypeFormValuesStatusInputs> = (props) => {
  const { formValues, setFormValues, statusInputs, setStatusInputs } = props;
  const [file, setFile] = useState<File>();
  useEffect(() => {
    if (file !== undefined) {
      setFormValues({ ...formValues, file: file });
      setStatusInputs({ ...statusInputs, file: "valid" });
    }
  }, [file]);
  const id = useId();
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.files && event.target.files.length) {
      const CV = event.target.files[0];
      setFile(CV);
    }
  };
  return (
    <div className={styles.container}>
      <label htmlFor={id}>
        <div className={styles.inputSelect}>
          <div className={styles.iconWrapper}>
            <SvgSprite id='attach' />
          </div>
          <div className={styles.action}>Attach your CV*</div>
        </div>
      </label>
      <input
        id={id}
        type='file'
        className={styles.inputFileDefault}
        onChange={handleOnChange}
      />
      <div>{file ? file.name : ""}</div>
    </div>
  );
};

export default InputChooseFile;
