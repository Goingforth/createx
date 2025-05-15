import { FC } from "react";
import SectionWithChildren from "../SectionWithChidren/SectionWtithChildren";
import ServicesView from "../ServicesView/ServicesView";

const BlockServices: FC = () => {
  return (
    <SectionWithChildren
      title='Our services'
      subtitle='Createx Construction Bureau is a construction giant with a full range of construction services.'
      children={<ServicesView />}
    />
  );
};

export default BlockServices;
