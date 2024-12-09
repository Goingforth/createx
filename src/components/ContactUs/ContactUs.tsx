import { FC } from "react";
import { ContactUsForm, SectionWithChildren } from "../index";

import styles from "./ContactUs.module.scss";

const ContactUsChild: FC = () => {
  return (
    <div className={styles.contactUsChild}>
      <div className={styles.imageWrapper}>
        <img src='/contact.jpg' alt='' />
      </div>
      <div>
        <ContactUsForm />
      </div>
    </div>
  );
};

export const ContactUs: FC = () => {
  return (
    <div className={styles.container}>
      <SectionWithChildren
        title='Contact us'
        subtitle='Please complete the form. Detailed information will help us to make a tuned offer.'
        children={<ContactUsChild />}
      />
    </div>
  );
};
