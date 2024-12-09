import { FC } from "react";
import { HeroPage, ContactUs } from "../../components";

//import styles from "./Contacts.module.scss";

const Contacts: FC = () => {
  // return <div className={styles.container}>Contacts</div>;
  return (
    <>
      <div>
        <HeroPage />
      </div>
      <ContactUs />
    </>
  );
};

export default Contacts;
