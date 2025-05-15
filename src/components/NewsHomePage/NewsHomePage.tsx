import { FC } from "react";
import SectionWithChildren from "../SectionWithChidren/SectionWtithChildren";
import { PostCard, ViewAll, ServerError, LoadingWait } from "../../uikit";
import { useNewsByQuery } from "../../api/index";

import styles from "./NewsHomePage.module.scss";

const NewsGridBlock: FC = () => {
  const { data, isLoading, isError } = useNewsByQuery({
    limit: 3,
  });

  return (
    <>
      {data && (
        <div className={styles.containerNewsGridBlock}>
          <PostCard size='large' {...{ ...data[0], page: "news" }} />
          <div className={styles.alignColumns}>
            <PostCard size='small' {...{ ...data[1], page: "news" }} />
            <PostCard size='small' {...{ ...data[2], page: "news" }} />
          </div>
        </div>
      )}
      {isError && <ServerError />}
      {isLoading && <LoadingWait />}
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
