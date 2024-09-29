import { FC } from "react";
import SvgSprite from "../../SvgSprite/SvgSprite";
import { TypeIdIcons } from "../../SvgSprite/SvgSprite";
import styles from "./MediaTab.module.scss";

type Props = {
  iconID: TypeIdIcons;
  title: string;
  index: number;
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
};

const MediaTab: FC<Props> = (props) => {
  const { iconID, title, index, activeTab, setActiveTab } = props;
  return (
    <div
      className={[
        styles.container,
        activeTab === index ? styles.active : "",
      ].join(" ")}
      onClick={() => setActiveTab(index)}
    >
      <div className={styles.iconWrapper}>
        <SvgSprite id={iconID} />
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default MediaTab;
