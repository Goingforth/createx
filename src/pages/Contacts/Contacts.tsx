import { FC } from "react";
import { HeroPage, ContactUs, ContactsOffices } from "../../components";

//import styles from "./Contacts.module.scss";

const Contacts: FC = () => {
  // return <div className={styles.container}>Contacts</div>;
  return (
    <>
      <div>
        <HeroPage />
      </div>
      <ContactUs />
      <ContactsOffices />
    </>
  );
};

export default Contacts;
