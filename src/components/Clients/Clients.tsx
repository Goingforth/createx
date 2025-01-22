import { FC, useEffect, useState } from "react";
import { SectionWithChildren } from "../index";
import { ImgCloudinary, ServerError } from "../../uikit";
import { getData } from "../../api/getData";

import { TypeClientsLogo } from "../../data";
import styles from "./Clients.module.scss";

type PropsClient = {
  amountLogo?: number;
};

const Client: FC<PropsClient> = ({ amountLogo = 6 }) => {
  const [data, setData] = useState<Array<TypeClientsLogo>>();
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    getData("/clients_logo", setData, setIsError);
  }, []);
  return (
    <div className={styles.container}>
      {data &&
        data.slice(0, amountLogo).map(({ id, image }) => (
          <div key={id} className={styles.clientLogo}>
            <ImgCloudinary image={image} />
          </div>
        ))}
      {isError && <ServerError />}
    </div>
  );
};

type Props = {
  title: string;
  subTitle?: string;
  amountLogo?: number;
};

const Clients: FC<Props> = (props) => {
  const { title, subTitle, amountLogo } = props;
  return (
    <SectionWithChildren
      title={title}
      subtitle={subTitle}
      children={<Client amountLogo={amountLogo} />}
    />
  );
};

export default Clients;
