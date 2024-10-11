import { FC } from "react";

import { dataCoreValuesItems } from "../../data";
import IconBoxBasic from "../../uikit/IconBoxBasic/IconBoxBasic";
import SvgSprite from "../../uikit/SvgSprite/SvgSprite";
import styles from "./CoreValuesView.module.scss";

const CoreValuesView: FC = () => {
  return (
    <div className={styles.container}>
      {dataCoreValuesItems.map((item, index) => (
        <div key={item.id} className={styles.item}>
          <IconBoxBasic {...item} />
          {index !== dataCoreValuesItems.length - 1 && (
            <SvgSprite id='divider' />
          )}
        </div>
      ))}
    </div>
  );
};
export default CoreValuesView;
