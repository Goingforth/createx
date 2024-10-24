import { FC } from "react";
import { useLocation } from "react-router-dom";
import { dataHeroPages, TypeHeroPage } from "../../data";

import styles from "./HeroPage.module.scss";

const toCapizalize = (value: string) => {
  return value.replace(/(^|\s)(.)/g, (_, a, b) => a + b.toUpperCase());
};

const HeroPage: FC = () => {
  const location = useLocation();

  const pageData: TypeHeroPage | undefined = dataHeroPages.find(
    (item) => item.page === location.pathname
  );

  const namePage = location.pathname
    .replace("_", " ")
    .split("/")
    .filter((item) => item !== "")
    .map((item) => toCapizalize(item));
  return (
    <>
      {pageData !== undefined && (
        <div
          className={styles.container}
          style={{ backgroundImage: `url(${pageData.bgImage})` }}
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
              __html: `<p>${pageData.title}</p>`,
            }}
          />

          <div
            className={styles.note}
            dangerouslySetInnerHTML={{
              __html: `<p>${pageData.note}</p>`,
            }}
          />
        </div>
      )}
    </>
  );
};

export default HeroPage;
