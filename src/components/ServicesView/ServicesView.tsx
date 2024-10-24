import { FC } from "react";
import { dataServicesItems, TypeDataServicesItem } from "../../data";
import IconBoxBasic from "../../uikit/IconBoxBasic/IconBoxBasic";
import styles from "./ServicesView.module.scss";

const ServicesView: FC<TypeDataServicesItem> = () => {
  return (
    <div className={styles.container}>
      {dataServicesItems.map((item) => (
        <div className={styles.box} key={item.id}>
          <IconBoxBasic {...item} />
        </div>
      ))}
    </div>
  );
};

export default ServicesView;
