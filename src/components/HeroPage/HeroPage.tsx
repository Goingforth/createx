import { FC } from "react";

import { BreadCrumb, DataHeroPage } from "../index";

import { TypeHeroPage } from "../../data";

import styles from "./HeroPage.module.scss";

const HeroPage: FC = () => {
  const pageData: TypeHeroPage | undefined = DataHeroPage();

  return (
    <>
      {pageData !== undefined && pageData.typeHero === "heroBasic" && (
        <div
          className={styles.container}
          style={{
            backgroundImage: `url(${pageData.bgImage})`,
          }}
        >
          <BreadCrumb />
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
      {pageData !== undefined && pageData.typeHero === "heroNoImg" && (
        <div className={styles.heroNoImg}>
          <BreadCrumb />
          <div
            className={styles.titleHeroNoImg}
            dangerouslySetInnerHTML={{
              __html: `<p>${pageData.title}</p>`,
            }}
          />
        </div>
      )}
    </>
  );
};

export default HeroPage;
