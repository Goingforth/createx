import { FC, useState, useEffect } from "react";
import { categoriesNews, dataNews } from "../../data";
import BasicTab from "../../uikit/Tabs/BasicTab/BasicTab";
import PostCard from "../../uikit/PostCard/PostCard";
import Pagination from "../../uikit/Pagination/Pagination";

import styles from "./NewsBody.module.scss";

const NewsBody: FC = () => {
  const initialActiveTabs = categoriesNews.map((item) => {
    return { category: item.category, isActive: item.isActive };
  });

  const [activeTabs, setActiveTabs] = useState(initialActiveTabs);

  const active = activeTabs
    .filter((item) => item.isActive === true)
    .map((item) => item.category);

  useEffect(() => {
    if (active.length === 0) {
      console.log("!empty!");
      setActiveTabs(initialActiveTabs);
    }
  }, [active]);

  const filterNews = dataNews.filter(
    (news) =>
      active.includes(news.categories) === true || active.includes("All News")
  );

  const onClick = (index: number) => {
    const newActiveTabs = [...activeTabs];
    newActiveTabs[index].isActive = !activeTabs[index].isActive;
    if (index === 0 && newActiveTabs[0].isActive === true) {
      setActiveTabs(initialActiveTabs);
    } else if (index !== 0 && newActiveTabs[index].isActive === true) {
      newActiveTabs[0].isActive = false;
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
            isActive={activeTabs[index].isActive}
          />
        ))}
      </div>
      <div className={styles.gallery}>
        {filterNews.map((props) => (
          <PostCard key={props.id} {...props} size='regular' />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default NewsBody;
