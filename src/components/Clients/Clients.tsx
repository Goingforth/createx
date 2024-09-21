import { FC } from "react";
import SectionWithChildren from "../SectionWithChidren/SectionWtithChildren";
import { dataClientsLogo } from "../../data";
import styles from "./Clients.module.scss";

const Client: FC = () => {
  return (
    <div className={styles.container}>
      {dataClientsLogo.map(({ id, src, alt }) => (
        <div key={id} className={styles.clientLogo}>
          <img src={src} alt={alt} />
        </div>
      ))}
    </div>
  );
};

const Clients: FC = () => {
  return (
    <SectionWithChildren
      title='Supported by 12+ partners'
      children={<Client />}
    />
  );
};

export default Clients;
