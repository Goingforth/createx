import { FC, useEffect, useState } from "react";
import SvgSprite from "../../uikit/SvgSprite/SvgSprite";
import styles from "./Statistics.module.scss";
import { TypeStatistics } from "../../data";
import { getData } from "../../api/getData";
import { ServerError } from "../../uikit";

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
  const [data, setData] = useState<Array<TypeStatistics>>();
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    getData("/statistics", setData, setIsError);
  }, []);
  return (
    <div className={styles.container}>
      {data && data.map((item) => <StatisticsItem key={item.id} {...item} />)}
      {isError && <ServerError />}
    </div>
  );
};

export default Statistics;
