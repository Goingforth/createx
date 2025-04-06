import { FC, useState } from "react";
import { TypeMediaTabs } from "../../data";
import MediaTab from "../../uikit/Tabs/MediaTab/MediaTab";
import { ServerError, LoadingWait } from "../../uikit";
import { useData } from "../../api/index";
import styles from "./MediaTabs.module.scss";

const MediaTabs: FC = () => {
  const { data, isLoading, isError } = useData("/media_tab");
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.container}>
      {data &&
        data.map((props: TypeMediaTabs, index: number) => (
          <MediaTab
            key={props.id}
            {...props}
            index={index}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      {isError && <ServerError />}
      {isLoading && <LoadingWait />}
    </div>
  );
};

export default MediaTabs;
