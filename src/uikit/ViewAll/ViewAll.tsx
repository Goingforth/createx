import { FC } from "react";
import { Link } from "react-router-dom";
import Btn from "../Buttons/Btn/Btn";
import styles from "./ViewAll.module.scss";

export type TypeViewAll = {
  titleViewAll: string;
  to: string;
  btnTitle: string;
};

const ViewAll: FC<TypeViewAll> = (props) => {
  const { titleViewAll, to, btnTitle } = props;
  return (
    <div className={styles.viewAll}>
      <div className={styles.viewAllTitle}>{titleViewAll}</div>
      <Link to={to}>
        <Btn size='large' form='solid' title={btnTitle} />
      </Link>
    </div>
  );
};

export default ViewAll;
