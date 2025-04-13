import { FC, useState } from "react";
import { categoriesNews, TypeCategories, TypeNews } from "../../data";
import { BasicTab, PostCard, Pagination, ServerError } from "../../uikit";
import { useNewsByQuery } from "../../api/index";

import { SkeletonCardNews } from "../../uikit/index";

import styles from "./NewsBody.module.scss";

const NewsBody: FC = () => {
  const [activeTabs, setActiveTabs] = useState<Array<string>>(["All News"]);
  const { data, isLoading, isError } = useNewsByQuery({
    categories: activeTabs,
  });

  const onClick = (category: TypeCategories) => {
    if (category === "All News") {
      setActiveTabs(["All News"]);
    } else {
      const posAllNews = activeTabs.indexOf("All News");
      posAllNews !== -1 && activeTabs.splice(posAllNews, 1);
      const pos = activeTabs.indexOf(category);
      if (pos === -1) {
        setActiveTabs([...activeTabs, category]);
      } else if (activeTabs.length === 1) {
        setActiveTabs(["All News"]);
      } else {
        setActiveTabs(activeTabs.filter((item) => item !== category));
      }
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
            onClick={() => onClick(props.category)}
            isActive={activeTabs.includes(props.category) ? true : false}
          />
        ))}
      </div>
      {isError === false ? (
        <div className={styles.gallery}>
          {data &&
            data.map((props: TypeNews) => (
              <PostCard key={props._id} {...props} size='regular' />
            ))}
        </div>
      ) : (
        <ServerError />
      )}
      <Pagination />
      {isLoading && (
        <div className={styles.gallery}>
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <div key={item}>
              <SkeletonCardNews />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsBody;
