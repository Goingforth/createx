import { FC } from "react";
import { useLocation } from "react-router-dom";
import {
  IconBoxBasic,
  SvgSprite,
  Btn,
  ServerError,
  LoadingWait,
} from "../../uikit";
import { TypeDataBenefits } from "../../data";
import { useDataByPage } from "../../api/index";

import styles from "./Benefits.module.scss";

export const Benefits: FC = () => {
  const location = useLocation().pathname;
  const { data, isLoading, isError } = useDataByPage("/benefits", location);

  return (
    <>
      {data !== undefined && (
        <div className={styles[data.theme]}>
          <div className={styles.container}>
            <div className={styles.block}>
              <div className={styles.title}>{data.title}</div>

              <div className={styles.subTitle}>{data.subTitle}</div>
              <div className={styles.benefits}>
                {data.dataArray.map(
                  (benefit: TypeDataBenefits, index: number) => (
                    <div key={benefit.id} className={styles.icons}>
                      <IconBoxBasic theme={data.theme} {...benefit} />
                      {index !== data.dataArray.length - 1 && (
                        <SvgSprite id='divider' />
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
            <div className={styles.buttonDiscuss}>
              <Btn size='large' title='Discuss a project' />
            </div>
          </div>
        </div>
      )}
      {isError && <ServerError />}
      {isLoading && <LoadingWait />}
    </>
  );
};
