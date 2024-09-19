import SectionWithChildren from "../SectionWithChidren/SectionWtithChildren";
import CoreValuesView from "../CoreValuesView/CoreValuesView";

const CoreValues = (Props: any): React.ReactNode => {
  return (
    <>
      <SectionWithChildren
        title='Our core values'
        subtitle=' Our mission is to set the highest standards for construction sphere.'
        children={<CoreValuesView {...Props} />}
        mb={271}
      />
    </>
  );
};

export default CoreValues;
