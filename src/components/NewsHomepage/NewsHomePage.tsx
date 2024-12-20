import { FC } from "react";
import { SectionWithChildren } from "../index";
import { PostCard, ViewAll } from "../../uikit";
import { dataNews } from "../../data";
import styles from "./NewsHomePage.module.scss";

const NewsGridBlock: FC = () => {
  return (
    <div className={styles.containerNewsGridBlock}>
      <PostCard size='large' {...dataNews[0]} />
      <div className={styles.alignColumns}>
        <PostCard size='small' {...dataNews[1]} />
        <PostCard size='small' {...dataNews[2]} />
      </div>
    </div>
  );
};

const NewsHomePage: FC = () => {
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

export default NewsHomePage;
