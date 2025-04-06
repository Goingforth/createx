import { FC } from "react";

import { TypeCoreValuesItem } from "../../../data";
import {
  IconBoxBasic,
  ServerError,
  SvgSprite,
  LoadingWait,
} from "../../../uikit/";
import { useData } from "../../../api/index";
import styles from "./CoreValuesView.module.scss";

const CoreValuesView: FC = () => {
  const { data, isLoading, isError } = useData("/corevalues");

  return (
    <div className={styles.container}>
      {data &&
        data.map((item: TypeCoreValuesItem, index: number) => (
          <div key={item.id} className={styles.item}>
            <IconBoxBasic {...item} />
            {index !== data.length - 1 && <SvgSprite id='divider' />}
          </div>
        ))}
      {isError && <ServerError />}
      {isLoading && <LoadingWait />}
    </div>
  );
};
export default CoreValuesView;
