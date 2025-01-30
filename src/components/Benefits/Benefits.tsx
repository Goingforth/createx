import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IconBoxBasic, SvgSprite, Btn } from "../../uikit";
import { TypeBenefits } from "../../data";
import { ServerError } from "../../uikit";
import { getDataByPage } from "../../api/getData";

import styles from "./Benefits.module.scss";

export const Benefits: FC = () => {
  const location = useLocation().pathname;
  const [data, setData] = useState<TypeBenefits>();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getDataByPage("/benefits", location, setData, setIsError);
  }, []);

  return (
    <>
      {data !== undefined && (
        <div className={styles[data.theme]}>
          <div className={styles.container}>
            <div className={styles.block}>
              <div className={styles.title}>{data.title}</div>

              <div className={styles.subTitle}>{data.subTitle}</div>
              <div className={styles.benefits}>
                {data.dataArray.map((benefit, index) => (
                  <div key={benefit.id} className={styles.icons}>
                    <IconBoxBasic theme={data.theme} {...benefit} />
                    {index !== data.dataArray.length - 1 && (
                      <SvgSprite id='divider' />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.buttonDiscuss}>
              <Btn size='large' title='Discuss a project' />
            </div>
          </div>
        </div>
      )}
      {isError && <ServerError />}
    </>
  );
};
