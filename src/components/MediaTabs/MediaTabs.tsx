import { FC, useState, useEffect } from "react";
import { TypeMediaTabs } from "../../data";
import MediaTab from "../../uikit/Tabs/MediaTab/MediaTab";
import { ServerError, LoadingWait } from "../../uikit";
import { getData } from "../../api/getData";
import styles from "./MediaTabs.module.scss";

const MediaTabs: FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState<Array<TypeMediaTabs>>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData("/media_tabs", setData, setIsError, setIsLoading);
  }, []);

  return (
    <div className={styles.container}>
      {data &&
        data.map((props, index) => (
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
