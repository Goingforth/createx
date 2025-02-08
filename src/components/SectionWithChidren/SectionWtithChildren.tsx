import { FC, ReactNode } from "react";
import styles from "./SectionWithChildren.module.scss";
type Props = {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  mtChild?: string;
};

const SectionWithChildren: FC<Props> = (props) => {
  const {
    title = "SectionWithChildren",
    subtitle,
    children,
    mtChild = "60px",
  } = props;
  return (
    <div className={styles.containerChildren}>
      <h1 className={styles.title}>{title}</h1>

      {subtitle && (
        <p className={[styles.large_regular, styles.subTitle].join(" ")}>
          {subtitle}
        </p>
      )}
      <div style={{ marginTop: `${mtChild}` }}>{children}</div>
    </div>
  );
};

export default SectionWithChildren;
