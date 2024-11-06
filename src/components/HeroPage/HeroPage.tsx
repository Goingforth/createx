import { FC } from "react";

import { BreadCrumb, DataHeroPage } from "../index";

import { TypeHeroPage } from "../../data";

import styles from "./HeroPage.module.scss";

const HeroPage: FC = () => {
  const pageData: TypeHeroPage | undefined = DataHeroPage();

  return (
    <>
      {pageData !== undefined && (
        <div
          className={[
            styles.container,
            pageData.bgImage === undefined ? styles.containerSubPage : "",
          ].join(" ")}
          style={{
            backgroundImage:
              pageData.bgImage !== undefined ? `url(${pageData.bgImage})` : "",
          }}
        >
          <BreadCrumb />
          <div
            className={[
              styles.title,
              pageData.bgImage === undefined ? styles.titleSubPage : "",
            ].join(" ")}
            dangerouslySetInnerHTML={{
              __html: `<p>${pageData.title}</p>`,
            }}
          />

          {pageData.note !== undefined && (
            <div
              className={styles.note}
              dangerouslySetInnerHTML={{
                __html: `<p>${pageData.note}</p>`,
              }}
            />
          )}
        </div>
      )}
    </>
  );
};

export default HeroPage;
