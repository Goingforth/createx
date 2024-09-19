import { FC } from "react";
import SectionWithChildren from "../SectionWithChidren/SectionWtithChildren";
import ServicesView from "../ServicesView/ServicesView";
import styles from "./BlockServices.module.scss";

const BlockServices: FC = (Props: any): React.ReactNode => {
  return (
    <div className={styles.container}>
      <SectionWithChildren
        title='Our services'
        subtitle='Createx Construction Bureau is a construction giant with a full range of construction services.'
        children={<ServicesView {...Props} />}
      />
    </div>
  );
};

export default BlockServices;
