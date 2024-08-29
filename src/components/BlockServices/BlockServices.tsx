import { FC } from "react";
import BlockHome from "../BlockHome/BlockHome";
import ServicesView from "../ServicesView/ServicesView";
import styles from "./BlockServices.module.scss";

const BlockServices: FC = (Props: any): React.ReactNode => {
  return (
    <div className={styles.container}>
      <BlockHome
        title='Our services'
        text='Createx Construction Bureau is a construction giant with a full range of construction services.'
        children={<ServicesView {...Props} />}
      />
    </div>
  );
};

export default BlockServices;
