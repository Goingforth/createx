import { FC } from "react";
import { coreValuesItems } from "../../data/data";
import IconBoxBasic from "../IconBoxBasic/IconBoxBasic";
import SvgSprite from "../SvgSprite/SvgSprite";
import styles from "./CoreValuesView.module.scss";

type Props = [id?: string, icon?: string, title?: string, content?: string];

const CoreValuesView: FC<Props> = () => {
  return (
    <div className={styles.container}>
      {coreValuesItems.map(({ id, icon, title, content }, index) => (
        <div key={id}>
          <IconBoxBasic icon={icon} title={title} content={content} />
          {index !== coreValuesItems.length - 1 && <SvgSprite id='divider' />}
        </div>
      ))}
    </div>
  );
};
export default CoreValuesView;
