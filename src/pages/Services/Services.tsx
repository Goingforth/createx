import { FC, useEffect, useState } from "react";
import { HeroPage, BlockServicePage } from "../../components";
import { ScrollToTop } from "../../utils";
import { TypeServicesPage } from "../../data";

import { ServerError } from "../../uikit";
import { getData } from "../../api/getData";
import styles from "./Services.module.scss";

const Services: FC = () => {
  const [data, setData] = useState<Array<TypeServicesPage>>();
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    getData("/services", setData, setIsError);
  }, []);
  return (
    <>
      <ScrollToTop />
      <div>
        <HeroPage />
      </div>
      <div className={styles.container}>
        {data &&
          data.map((props, index) => (
            <BlockServicePage key={props.title} index={index} {...props} />
          ))}
        {isError && <ServerError />}
      </div>
    </>
  );
};

export default Services;
