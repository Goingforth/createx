import { FC, useState, useEffect } from "react";
import { categoriesNews, dataNews } from "../../data";
import BasicTab from "../../uikit/Tabs/BasicTab/BasicTab";
import PostCard from "../../uikit/PostCard/PostCard";

import styles from "./NewsBody.module.scss";

const NewsBody: FC = () => {
  const initialActiveTabs = categoriesNews.map((item) => item.isActive);

  const [activeTabs, setActiveTabs] = useState(initialActiveTabs);
  useEffect(() => {}, [activeTabs]);

  const onClick = (index: number) => {
    const newActiveTabs = [...activeTabs];
    newActiveTabs[index] = !activeTabs[index];
    if (index === 0 && newActiveTabs[index] === true) {
      setActiveTabs(initialActiveTabs);
    } else if (index !== 0 && newActiveTabs[index] === true) {
      newActiveTabs[0] = false;
      setActiveTabs(newActiveTabs);
    } else {
      setActiveTabs(newActiveTabs);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Categories</div>
      <div className={styles.filter}>
        {categoriesNews.map((props, index) => (
          <BasicTab
            key={props.id}
            {...props}
            index={index}
            onClick={onClick}
            isActive={activeTabs[index]}
          />
        ))}
      </div>
      <div className={styles.gallery}>
        {dataNews.map((props) => (
          <PostCard {...props} size='regular' />
        ))}
      </div>
    </div>
  );
};

export default NewsBody;
