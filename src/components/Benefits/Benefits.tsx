import { FC } from "react";
import { IconBoxBasic, SvgSprite, Btn } from "../../uikit";
import { TypeDataBenefits } from "../../data";
import styles from "./Benefits.module.scss";

export type TypeBenefits = {
  title: string;
  subTitle: string;
  theme?: "light" | "basic";
  dataArray: TypeDataBenefits[];
};

export const Benefits: FC<TypeBenefits> = ({ ...props }) => {
  const { title, subTitle, dataArray, theme = "basic" } = props;

  return (
    <div className={styles[theme]}>
      <div className={styles.container}>
        <div className={styles.block}>
          <div className={styles.title}>{title}</div>

          <div className={styles.subTitle}>{subTitle}</div>
          <div className={styles.benefits}>
            {dataArray.map((benefit, index) => (
              <div key={benefit.id} className={styles.icons}>
                <IconBoxBasic theme={theme} {...benefit} />
                {index !== dataArray.length - 1 && <SvgSprite id='divider' />}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.buttonDiscuss}>
          <Btn size='large' title='Discuss a project' />
        </div>
      </div>
    </div>
  );
};
