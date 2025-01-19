import { FC } from "react";
import styles from "./ServerError.module.scss";

const ServerError: FC = () => {
  return (
    <div className={styles.container}>
      <h1>SERVER ERROR</h1>
    </div>
  );
};

export { ServerError };
