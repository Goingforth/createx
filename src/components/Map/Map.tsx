import { FC } from "react";
import SectionWithChildren from "../SectionWithChidren/SectionWtithChildren";
import styles from "./Map.module.scss";

const MapImg: FC = () => {
  return (
    <div className={styles.mapWrapper}>
      <img src='/map.jpg' alt='Map' />
    </div>
  );
};

const Map: FC = () => {
  return (
    <div className={styles.container}>
      <SectionWithChildren title='We work worldwide' children={<MapImg />} />
    </div>
  );
};

export default Map;
