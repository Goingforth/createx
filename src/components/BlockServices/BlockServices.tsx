import { FC } from "react";
import { SectionWithChildren, ServicesView } from "../index";
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
