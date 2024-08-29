import { FC } from "react";
import styles from "./Application.module.scss";
import ApplicationForm from "../ApplicationForm/ApplicationForm";

const Application: FC = () => {
  return (
    <div className={styles.container}>
      <ApplicationForm />
    </div>
  );
};

export default Application;
