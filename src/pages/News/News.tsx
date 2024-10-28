import { FC } from "react";
import { HeroPage, NewsBody } from "../../components";

//import styles from "./News.module.scss";

const News: FC = () => {
  // return <div className={styles.container}>News</div>;
  return (
    <div>
      <HeroPage />
      <NewsBody />
    </div>
  );
};

export default News;
