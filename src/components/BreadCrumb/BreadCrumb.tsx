import { FC } from "react";
import styles from "./BreadCrumb.module.scss";

const toCapizalize = (value: string) => {
  return value.replace(/(^|\s)(.)/g, (_, a, b) => a + b.toUpperCase());
};

interface TypeBreadCrumb {
  location: string;
}
export const BreadCrumb: FC<TypeBreadCrumb> = ({ location }) => {
  const namePage = location
    .replace(/_/g, " ")
    .split("/")
    .filter((item) => item !== "")
    .map((item) => toCapizalize(item));

  return (
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
  );
};
