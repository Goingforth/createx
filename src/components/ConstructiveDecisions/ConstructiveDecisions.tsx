import { FC } from "react";
import { SvgSprite } from "../../uikit";
import { dataBulletedList } from "../../data";
import styles from "./ConstructiveDecisions.module.scss";

const ConstructiveDecisions: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerContent}>
        <div>
          <img src='/constructive/image.jpg' alt='' />
        </div>
        <div>
          <div className={styles.title}>Constructive decisions</div>
          <div className={styles.blockInfo}>
            {dataBulletedList.map((item, index) => (
              <div key={`bulletedlist${index}`} className={styles.note}>
                <SvgSprite id='check' />
                <div className={styles.item}>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructiveDecisions;
