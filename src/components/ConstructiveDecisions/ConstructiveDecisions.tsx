import { FC } from "react";
import { SvgSprite } from "../../uikit";
import styles from "./ConstructiveDecisions.module.scss";

const dataBulletedList: string[] = [
  "Vitae ultrices ornare eu sed in est quisque duis id.",
  "A fermentum in morbi pretium aliquam adipiscing donec tempus.",
  "Mauris odio pellentesque commodo, diam.",
  "Fermentum vestibulum est fermentum, egestas gravida scelerisque quis.",
  "At pharetra libero blandit risus, fringilla sed commodo diam.",
  "Integer ultricies viverra ut enim viverra ut.",
];

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
