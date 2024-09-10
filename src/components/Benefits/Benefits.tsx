import { FC } from "react";
import IconBoxBasic from "../../uikit/IconBoxBasic/IconBoxBasic";
import { dataBenefits } from "../../data";
import SvgSprite from "../../uikit/SvgSprite/SvgSprite";
import ButtonBasic from "../../uikit/Buttons/ButtonBasic/ButtonBasic";
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
          {dataBenefits.map(({ id, icon, title, content }, index) => (
            <div key={id} className={styles.icons}>
              <IconBoxBasic
                theme='light'
                icon={icon}
                title={title}
                content={content}
              />
              {index !== dataBenefits.length - 1 && <SvgSprite id='divider' />}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.buttonDiscuss}>
        <ButtonBasic />
      </div>
    </div>
  );
};

export default Benefits;
