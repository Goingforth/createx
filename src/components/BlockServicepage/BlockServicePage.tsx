import { FC } from "react";
import { Link } from "react-router-dom";
import { ImgCloudinary, Btn } from "../../uikit";
import styles from "./BlockServicePage.module.scss";

type Props = {
  index: number;
  image: string;
  title: string;
  info: string;
  route: string;
};

const BlockServicePage: FC<Props> = ({ index, title, image, info, route }) => {
  return (
    <div
      className={styles.container}
      style={{ flexDirection: index % 2 ? "row-reverse" : "row" }}
    >
      <div className={styles.imgWrapper}>
        <ImgCloudinary image={image} />
      </div>
      <div className={styles.blockInfo}>
        <h2 className={styles.blockInfoTitle}>{title}</h2>
        <div
          className={styles.info}
          dangerouslySetInnerHTML={{
            __html: `<p>${info}</p>`,
          }}
        />
        <Link
          to={route}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <Btn title='Learn more' form='outline' width={160} />
        </Link>
      </div>
    </div>
  );
};

export default BlockServicePage;
