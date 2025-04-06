import { FC } from "react";
import { useLocation } from "react-router-dom";
import { BreadCrumb } from "../index";
import { ServerError, LoadingWait } from "../../uikit";
import { useDataByPage } from "../../api/index";

import styles from "./HeroPage.module.scss";

const VITE_BASE_URL_PHOTO = import.meta.env.VITE_BASE_URL_PHOTO;

const HeroPage: FC = () => {
  const location = useLocation().pathname;
  const { data, isLoading, isError } = useDataByPage("/hero_page", location);

  return (
    <>
      {data !== undefined && data.typeHero === "heroBasic" && (
        <div
          className={styles.container}
          style={{
            backgroundImage: `url(${VITE_BASE_URL_PHOTO}/${data.bgImage})`,
          }}
        >
          <BreadCrumb location={location} />

          <div
            className={styles.title}
            dangerouslySetInnerHTML={{
              __html: `<p>${data.title}</p>`,
            }}
          />

          <div
            className={styles.note}
            dangerouslySetInnerHTML={{
              __html: `<p>${data.note}</p>`,
            }}
          />
        </div>
      )}
      {data !== undefined && data.typeHero === "heroNoImg" && (
        <div className={styles.heroNoImg}>
          <BreadCrumb location={location} />
          <div
            className={styles.titleHeroNoImg}
            dangerouslySetInnerHTML={{
              __html: `<p>${data.title}</p>`,
            }}
          />
        </div>
      )}
      {isError && <ServerError />}
      {isLoading && <LoadingWait />}
    </>
  );
};

export default HeroPage;
