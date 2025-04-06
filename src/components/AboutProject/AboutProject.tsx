import { FC } from "react";
import { useLocation } from "react-router-dom";
import { ServerError, LoadingWait } from "../../uikit";
import { useDataByPage } from "../../api/index";

import styles from "./AboutProject.module.scss";

const AboutProject: FC = () => {
  const location = useLocation().pathname;
  const { data, isLoading, isError } = useDataByPage("/projects", location);
  const info = data ? data.info : [];
  const keysInfo: string[] = Object.keys(info);
  const valuesInfo: string[] = Object.values(info);

  return (
    <>
      {data && (
        <div className={styles.container}>
          <div>
            <div className={styles.title}>{data.title}</div>
            <div
              className={styles.note}
              dangerouslySetInnerHTML={{
                __html: `<p>${data.note}</p>`,
              }}
            />
          </div>
          <div className={styles.info}>
            <div className={styles.keys}>
              {keysInfo.map((key) => (
                <div key={key}>{key}</div>
              ))}
            </div>

            <div className={styles.value}>
              {valuesInfo.map((value) => (
                <div key={value}>{value}</div>
              ))}
            </div>
          </div>
        </div>
      )}
      {isError && <ServerError />}
      {isLoading && <LoadingWait />}
    </>
  );
};

export default AboutProject;
