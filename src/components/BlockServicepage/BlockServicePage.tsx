import { FC } from "react";
import ButtonBasic from "../../uikit/Buttons/ButtonBasic/ButtonBasic";
import { Link } from "react-router-dom";
import styles from "./BlockServicePage.module.scss";

type Props = {
  index: number;
  src: string;
  title: string;
  info: string;
  route: string;
};

const BlockServicePage: FC<Props> = ({ index, title, src, info, route }) => {
  return (
    <div
      className={styles.container}
      style={{ flexDirection: index % 2 ? "row-reverse" : "row" }}
    >
      <div className={styles.imgWrapper}>
        <img src={src} alt='' />
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
          <ButtonBasic
            size='regular'
            title='Learn more'
            bg='transparent'
            titleColor='primary'
            borderColor='primary'
            border
          />
        </Link>
      </div>
    </div>
  );
};

export default BlockServicePage;
