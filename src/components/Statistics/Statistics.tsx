import { FC } from "react";
import SvgSprite from "../../uikit/SvgSprite/SvgSprite";
import styles from "./Statistics.module.scss";
import { TypeStatistics } from "../../data";
import { useData } from "../../api/index";
import { ServerError, LoadingWait } from "../../uikit";

const StatisticsItem: FC<TypeStatistics> = (props) => {
  const { icon, rate, info } = props;
  return (
    <div className={styles.staticticsItem}>
      <div className={styles.iconWrapper}>
        <SvgSprite id={icon} width='48px' height='48px' />
      </div>
      <div className={styles.rate}>{rate}</div>
      <div className={styles.info}>{info}</div>
    </div>
  );
};

const Statistics: FC = () => {
  const { data, isLoading, isError } = useData("/statistics");

  return (
    <div className={styles.container}>
      {data &&
        data.map((item: TypeStatistics) => (
          <StatisticsItem key={item.id} {...item} />
        ))}
      {isError && <ServerError />}
      {isLoading && <LoadingWait />}
    </div>
  );
};

export default Statistics;
