import { FC } from "react";
import { dataStatistics } from "../../data";
import SvgSprite from "../../uikit/SvgSprite/SvgSprite";
import styles from "./Statistics.module.scss";
import { TypeStatistics } from "../../data";

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
  return (
    <div className={styles.container}>
      {dataStatistics.map((item) => (
        <StatisticsItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Statistics;
