import { FC, ReactNode } from "react";
import styles from "./BlockHome.module.scss";
type Props = {
  title?: string;
  text?: string;
  children?: ReactNode;
  mb?: string | number;
};

const BlockHome: FC<Props> = ({ title, text, children, mb }) => {
  return (
    <div style={{ marginBottom: `${mb}px` }}>
      <div className={styles.containerChildren}>
        <h1 className={styles.title}>{title}</h1>
        <p className={[styles.large_regular, styles.infoTitle].join(" ")}>
          {text}
        </p>
        <div className={styles.playerWrapper}>{children}</div>
      </div>
    </div>
  );
};

export default BlockHome;
