import { FC } from "react";

import { DataPage } from "../../utils";
import { dataHeroPages } from "../../data";
import styles from "./BreadCrumb.module.scss";

const toCapizalize = (value: string) => {
  return value.replace(/(^|\s)(.)/g, (_, a, b) => a + b.toUpperCase());
};

const BreadCrumb: FC = () => {
  const pageData = DataPage(dataHeroPages);
  const namePage = location.pathname
    .replace(/_/g, " ")
    .split("/")
    .filter((item) => item !== "")
    .map((item) => toCapizalize(item));

  return (
    <>
      {pageData !== undefined && (
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
      )}
    </>
  );
};

export default BreadCrumb;
