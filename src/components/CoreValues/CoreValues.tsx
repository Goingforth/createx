import SectionWithChildren from "../SectionWithChidren/SectionWtithChildren";
import CoreValuesView from "./CoreValuesView/CoreValuesView";

const CoreValues = () => {
  return (
    <>
      <SectionWithChildren
        title='Our core values'
        subtitle=' Our mission is to set the highest standards for construction sphere.'
        children={<CoreValuesView />}
      />
    </>
  );
};

export default CoreValues;
