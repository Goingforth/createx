import { FC } from "react";
import ButtonBasic from "../../uikit/Buttons/ButtonBasic/ButtonBasic";
import styles from "./BlockServicePage.module.scss";

type Props = {
  index: number;
  src: string;
  title: string;
  info: string;
};

const BlockServicePage: FC<Props> = ({ index, title, src, info }) => {
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
        <ButtonBasic
          size='regular'
          title='Learn more'
          bg='transparent'
          titleColor='primary'
          borderColor='primary'
          border
        />
      </div>
    </div>
  );
};

export default BlockServicePage;
