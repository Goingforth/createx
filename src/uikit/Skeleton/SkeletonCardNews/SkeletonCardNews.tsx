import { FC } from "react";
import Skeleton from "@mui/material/Skeleton";
import styles from "./SkeletonCardNews.module.scss";

export const SkeletonCardNews: FC = () => {
  return (
    <div className={styles.regular}>
      <Skeleton variant='rectangular' width={600} height={306} />
      <div className={styles.cardWrapper}>
        <div className={styles.heading}>
          <Skeleton variant='rectangular' width={552} height={30} />
        </div>
        <div className={styles.meta}>
          <Skeleton variant='rectangular' width={330} height={21} />
        </div>
        <Skeleton variant='rectangular' width={552} height={52} />
      </div>
    </div>
  );
};
