import { FC } from "react";
import SectionWithChildren from "../SectionWithChidren/SectionWtithChildren";
import { dataClientsLogo } from "../../data";
import styles from "./Clients.module.scss";

type PropsClient = {
  amountLogo?: number;
};

const Client: FC<PropsClient> = ({ amountLogo = 6 }) => {
  return (
    <div className={styles.container}>
      {dataClientsLogo.slice(0, amountLogo).map(({ id, src, alt }) => (
        <div key={id} className={styles.clientLogo}>
          <img src={src} alt={alt} />
        </div>
      ))}
    </div>
  );
};

type Props = {
  title: string;
  amountLogo?: number;
};

const Clients: FC<Props> = (props) => {
  const { title, amountLogo } = props;
  return (
    <SectionWithChildren
      title={title}
      children={<Client amountLogo={amountLogo} />}
    />
  );
};

export default Clients;
