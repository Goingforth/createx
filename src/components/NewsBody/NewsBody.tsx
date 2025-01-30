import { FC, useState, useEffect } from "react";
import { categoriesNews, TypeCategories, TypeNews } from "../../data";
import { BasicTab, PostCard, Pagination, ServerError } from "../../uikit";
import { getNewsByQuery } from "../../api/getData";

import styles from "./NewsBody.module.scss";

const NewsBody: FC = () => {
  const [activeTabs, setActiveTabs] = useState<Array<string>>(["All News"]);
  const [data, setData] = useState<Array<TypeNews>>();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getNewsByQuery({ categories: activeTabs }, setData, setIsError);
  }, [activeTabs]);

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
            data.map((props) => (
              <PostCard key={props.id} {...props} size='regular' />
            ))}
        </div>
      ) : (
        <ServerError />
      )}
      <Pagination />
    </div>
  );
};

export default NewsBody;
