import { FC } from "react";
import { DataPage } from "../../utils";
import { dataProject } from "../../data";
import styles from "./AboutProject.module.scss";

const AboutProject: FC = () => {
  const dataPage = DataPage(dataProject);
  const info = dataPage.info;
  const keysInfo: string[] = Object.keys(info);
  const valuesInfo: string[] = Object.values(info);

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.title}>{dataPage.title}</div>
        <div
          className={styles.note}
          dangerouslySetInnerHTML={{
            __html: `<p>${dataPage.note}</p>`,
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
  );
};

export default AboutProject;
