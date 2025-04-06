import { FC } from "react";
import { HeroPage, BlockServicePage } from "../../components";
import { ScrollToTop } from "../../utils";
import { TypeServicesPage } from "../../data";

import { ServerError, LoadingWait } from "../../uikit";
import { useData } from "../../api/index";
import styles from "./Services.module.scss";

const Services: FC = () => {
  const { data, isLoading, isError } = useData("/services");

  return (
    <>
      <ScrollToTop />
      <div>
        <HeroPage />
      </div>
      <div className={styles.container}>
        {data &&
          data.map((props: TypeServicesPage, index: number) => (
            <BlockServicePage key={props.title} index={index} {...props} />
          ))}
        {isError && <ServerError />}
        {isLoading && <LoadingWait />}
      </div>
    </>
  );
};

export default Services;
