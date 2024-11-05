import { FC } from "react";
import { IconBoxBasic, SvgSprite, Btn } from "../../uikit";
import { dataBenefits } from "../../data";
import styles from "./Benefits.module.scss";

const Benefits: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.title}>Our benefits</div>
        <div className={styles.subTitle}>
          Our mission is to set the highest standards for construction sphere.
        </div>
        <div className={styles.benefits}>
          {dataBenefits.map((benefit, index) => (
            <div key={benefit.id} className={styles.icons}>
              <IconBoxBasic theme='light' {...benefit} />
              {index !== dataBenefits.length - 1 && <SvgSprite id='divider' />}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.buttonDiscuss}>
        <Btn size='large' title='Discuss a project' />
      </div>
    </div>
  );
};

export default Benefits;
