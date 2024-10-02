import { FC, ReactNode } from "react";
import styles from "./SectionWithChildren.module.scss";
type Props = {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  mb?: string | number;
};

const SectionWithChildren: FC<Props> = (props) => {
  const { title = "SectionWithChildren", subtitle, children, mb } = props;
  return (
    <div style={{ marginBottom: `${mb}px` }}>
      <div className={styles.containerChildren}>
        <h1 className={styles.title}>{title}</h1>
        <p
          className={[
            styles.large_regular,
            subtitle ? styles.subTitle : styles.notSubTitle,
          ].join(" ")}
        >
          {subtitle}
        </p>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default SectionWithChildren;
