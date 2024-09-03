import { FC } from "react";
import { servicesItems } from "../../data/data";
import IconBoxBasic from "../../uikit/IconBoxBasic/IconBoxBasic";
import styles from "./ServicesView.module.scss";

type Props = [id?: string, icon?: string, title?: string];

const ServicesView: FC<Props> = () => {
  return (
    <div className={styles.container}>
      {servicesItems.map(({ id, icon, title }) => (
        <div className={styles.box} key={id}>
          <IconBoxBasic icon={icon} title={title} />
        </div>
      ))}
    </div>
  );
};

export default ServicesView;
