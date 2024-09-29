import { FC, useState } from "react";
import { dataMediaTabs } from "../../data";
import MediaTab from "../../uikit/Tabs/MediaTab/MediaTab";
import styles from "./MediaTabs.module.scss";

const MediaTabs: FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.container}>
      {dataMediaTabs.map((props, index) => (
        <MediaTab
          key={props.id}
          {...props}
          index={index}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      ))}
    </div>
  );
};

export default MediaTabs;
