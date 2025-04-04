import { FC } from "react";
import styles from "./LoadingWait.module.scss";

const LoadingWait: FC = () => {
  return (
    <div className={styles.container}>
      <h1>SERVER ERROR</h1>
    </div>
  );
};

export { LoadingWait };
