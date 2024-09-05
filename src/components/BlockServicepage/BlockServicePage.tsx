import { FC } from "react";
import styles from "./BlockServicePage.module.scss";

type Props = {
  index: number;
};

const BlockServicePage: FC<Props> = ({ index }) => {
  return (
    <div className={styles.container}>
      {index % 2 ? (
        <>
          <div className={styles.blockInfo}>text</div>
          <div className={styles.imgWrapper}>img</div>
        </>
      ) : (
        <>
          <div className={styles.imgWrapper}>img</div>
          <div className={styles.blockInfo}>text</div>
        </>
      )}
    </div>
  );
};

export default BlockServicePage;
