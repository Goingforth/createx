import { FC } from "react";
import { Meta, ImgCloudinary } from "../../uikit";
import { Socials } from "./Socials/Socials";

import { TypeNews } from "../../data";

import styles from "./HeroPageNews.module.scss";

export const HeroPageNews: FC<TypeNews> = (props) => {
  const { title, categories, comments, date, image } = props;
  const amountComments = comments?.length;
  return (
    <>
      <div>
        <div className={styles.container}>
          <div className={styles.pageTitle}>
            <div className={styles.breadcrumb}>
              <div className={styles.homepage}>Homepage</div>
              <div className={styles.slash}>/</div>
              <div className={styles.homepage}>News</div>
              <div className={styles.slash}>/</div>
              <div className={styles.namepage}>{title}</div>
            </div>
            <div
              className={styles.title}
              dangerouslySetInnerHTML={{
                __html: `<p>${title}</p>`,
              }}
            />
            <div className={styles.meta_socials}>
              <Meta
                categories={categories}
                comments={amountComments}
                date={date}
                size='large'
              />
              <Socials />
            </div>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <ImgCloudinary image={image} width={1230} hight={500} />
        </div>
      </div>
    </>
  );
};
