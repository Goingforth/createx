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
  title?: string | undefined;
  note?: string | undefined;
  bgImage?: string | undefined;
};
const toCapizalize = (value: string) => {
  return value.replace(/(^|\s)(.)/g, (_, a, b) => a + b.toUpperCase());
};

const HeroPage: FC = () => {
  const location = useLocation();

  const pageData = dataHeroPages.find(function (item) {
    return item.page === location.pathname;
  });
  const namePage = location.pathname
    .replace("_", " ")
    .split("/")
    .filter((item) => item !== "")
    .map((item) => toCapizalize(item));

  const { title, note, bgImage }: Page = pageData;

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.navInfo}>
        <div className={styles.homepage}>Homepage</div>
        <div className={styles.route}>
          {namePage.map((word, index) => (
            <div className={styles.route} key={`word${index}`}>
              <div className={styles.slash}>/</div>
              <div
                className={
                  index !== namePage.length - 1
                    ? styles.homepage
                    : styles.namepage
                }
              >
                {word}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={styles.title}
        dangerouslySetInnerHTML={{
          __html: `<p>${title}</p>`,
        }}
      />

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
