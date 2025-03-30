import { FC, useEffect, useState } from "react";
import { SectionWithChildren } from "../index";
import { PostCard, ViewAll, ServerError } from "../../uikit";
import { TypeNews } from "../../data";
import { getNewsByQuery } from "../../api/getData";

import styles from "./NewsHomePage.module.scss";

const NewsGridBlock: FC = () => {
  const [data, setData] = useState<Array<TypeNews>>();
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    getNewsByQuery({ limit: 3 }, setData, setIsError);
  }, []);

  return (
    <>
      {data && (
        <div className={styles.containerNewsGridBlock}>
          <PostCard size='large' {...data[0]} />
          <div className={styles.alignColumns}>
            <PostCard size='small' {...data[1]} />
            <PostCard size='small' {...data[2]} />
          </div>
        </div>
      )}
      {isError && <ServerError />}
    </>
  );
};

export const NewsHomePage: FC = () => {
  return (
    <div className={styles.container}>
      <SectionWithChildren
        key='sectionNewsHomePage'
        title='Recent news'
        children={[
          <NewsGridBlock key='child0' />,
          <div key='child1' className={styles.wrapper}>
            <ViewAll
              titleViewAll='Explore all our news posts'
              btnTitle='View all news'
              to='/news'
            />
          </div>,
        ]}
      />
    </div>
  );
};
