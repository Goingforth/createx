import { FC } from "react";
import { SectionWithChildren } from "../index";
import { TypeClientsLogo } from "../../data";
import { ImgCloudinary, ServerError, LoadingWait } from "../../uikit";
import { useData } from "../../api/index";
import styles from "./Clients.module.scss";

type PropsClient = {
  amountLogo?: number;
};

const Client: FC<PropsClient> = ({ amountLogo = 6 }) => {
  const { data, isLoading, isError } = useData("/clients_logo");

  return (
    <div className={styles.container}>
      {data &&
        data.slice(0, amountLogo).map(({ id, image }: TypeClientsLogo) => (
          <div key={id} className={styles.clientLogo}>
            <ImgCloudinary image={image} />
          </div>
        ))}
      {isError && <ServerError />}
      {isLoading && <LoadingWait />}
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
