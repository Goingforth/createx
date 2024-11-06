import { FC } from "react";
import { useLocation } from "react-router-dom";
import { dataHeroPages } from "../../data";
import styles from "./BreadCrumb.module.scss";

const toCapizalize = (value: string) => {
  return value.replace(/(^|\s)(.)/g, (_, a, b) => a + b.toUpperCase());
};

export const DataHeroPage = () => {
  return dataHeroPages.find((item) => item.page === location.pathname);
};

const BreadCrumb: FC = () => {
  const location = useLocation();
  const pageData = DataHeroPage();
  const namePage = location.pathname
    .replace("_", " ")
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
