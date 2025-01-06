import { FC } from "react";
import styles from "./Application.module.scss";
import ApplicationForm from "./ApplicationForm/ApplicationForm";

const VITE_BASE_URL_PHOTO = import.meta.env.VITE_BASE_URL_PHOTO;

const Application: FC = () => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${VITE_BASE_URL_PHOTO}/application.jpg)`,
      }}
    >
      <ApplicationForm />
    </div>
  );
};
export default Application;
