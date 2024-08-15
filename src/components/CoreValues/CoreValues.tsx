import BlockHome from "../BlockHome/BlockHome";
import CoreValuesView from "../CoreValuesView/CoreValuesView";

const CoreValues = (Props: any): React.ReactNode => {
  return (
    <>
      <BlockHome
        title='Our core values'
        text=' Our mission is to set the highest standards for construction sphere.'
        children={<CoreValuesView {...Props} />}
        mb={271}
      />
    </>
  );
};

export default CoreValues;
