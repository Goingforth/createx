import { FC } from "react";
import styles from "./BasicTab.module.scss";

type Props = {
  category: string;
  index: number;
  isActive: boolean;
  onClick: (index: number) => void;
};

const BasicTab: FC<Props> = (props) => {
  const { category, isActive, index, onClick } = props;
  return (
    <div
      className={[styles.itemCategory, isActive ? styles.active : ""].join(" ")}
      onClick={() => onClick(index)}
    >
      {category}
    </div>
  );
};

export default BasicTab;
