import { FC } from "react";
import { BreadCrumb } from "../index";
import { Meta } from "../../uikit";
import { DataPageNews } from "../../utils";

// import { TypeHeroPage, dataHeroPages } from "../../data";
import { dataNews, TypeNews } from "../../data";

import styles from "./HeroPageNews.module.scss";

export const HeroPageNews: FC = () => {
  const pageData: TypeNews | undefined = DataPageNews(dataNews);
  console.log(pageData);

  return (
    <>
      {pageData !== undefined && (
        <div>
          <div className={styles.container}>
            <div className={styles.pageTitle}>
              <BreadCrumb />
              <div
                className={styles.title}
                dangerouslySetInnerHTML={{
                  __html: `<p>${pageData.title}</p>`,
                }}
              />
              <div>
                <Meta
                  categories={pageData.categories}
                  comments={pageData.comments}
                  date={pageData.date}
                  size='large'
                />
              </div>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <img src={pageData.imgFull} alt='' />
          </div>
        </div>
      )}
    </>
  );
};
