import { FC } from "react";
import styles from "./LoadingWait.module.scss";

const LoadingWait: FC = () => {
  return (
    <div className={styles.container}>
      <h2>
        This is free instance will spin down with inactivity, which can delay
        requests by 50 seconds or more.Sorry for the wait...
      </h2>
    </div>
  );
};

export { LoadingWait };
