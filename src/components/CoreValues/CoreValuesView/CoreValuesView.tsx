import { FC, useEffect, useState } from "react";

import { TypeCoreValuesItem } from "../../../data";
import { IconBoxBasic, ServerError, SvgSprite } from "../../../uikit/";
import { getData } from "../../../api/getData";
import styles from "./CoreValuesView.module.scss";

const CoreValuesView: FC = () => {
  const [data, setData] = useState<Array<TypeCoreValuesItem>>();
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    getData("/corevalues", setData, setIsError);
  }, []);
  return (
    <div className={styles.container}>
      {data &&
        data.map((item, index) => (
          <div key={item.id} className={styles.item}>
            <IconBoxBasic {...item} />
            {index !== data.length - 1 && <SvgSprite id='divider' />}
          </div>
        ))}
      {isError && <ServerError />}
    </div>
  );
};
export default CoreValuesView;
