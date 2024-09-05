import { FC } from "react";
import { useLocation } from "react-router-dom";
import { dataHeroPages } from "../../data";

import styles from "./HeroPage.module.scss";

// type Props = {
//   pageData: Object;
//   page: string | undefined;
//   title: string | undefined;
//   note: string | undefined;
//   bgImage: string | undefined;
// };

type Page = {
  page?: string | undefined;
  pageName: string | undefined;
  title?: string | undefined;
  note?: string | undefined;
  bgImage?: string | undefined;
};

const HeroPage: FC = () => {
  const location = useLocation();
  console.log(location.pathname);
  const pageData = dataHeroPages.find(function (item) {
    return item.page === location.pathname;
  });
  console.log("page:", pageData);
  const { pageName, title, note, bgImage }: Page = pageData;

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.navInfo}>
        <div className={styles.homepage}>Homepage</div>
        <div className={styles.namepage}>/</div>
        <div className={styles.namepage}>{pageName}</div>
      </div>
      <div className={styles.title}>{title}</div>
      <div
        className={styles.note}
        dangerouslySetInnerHTML={{
          __html: `<p>${note}</p>`,
        }}
      />
    </div>
  );
};

export default HeroPage;
