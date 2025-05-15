import { FC } from "react";
import { ContactUsForm } from "../ContactUsForm/ContactUsForm";
import SectionWithChildren from "../SectionWithChidren/SectionWtithChildren";
import { ImgCloudinary } from "../../uikit";
import styles from "./ContactUs.module.scss";

const ContactUsChild: FC = () => {
  return (
    <div className={styles.contactUsChild}>
      <div className={styles.imageWrapper}>
        <ImgCloudinary image='/contact.jpg' />
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
