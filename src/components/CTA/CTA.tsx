import { FC } from "react";
import styles from "./CTA.module.scss";
import { Btn } from "../../uikit";

const CTA: FC = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Didn’t find what you were looking for?</h3>
      <p className={styles.note}>
        Send your CV or subscribe to our newsletter to receive information about
        new vacancies.
      </p>
      <div className={styles.blockBtn}>
        <Btn form='outline' size='large' title='subscribe' width={180} />
        <Btn form='solid' size='large' title='send cv' width={180} />
      </div>
    </div>
  );
};

export default CTA;
